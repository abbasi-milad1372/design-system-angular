import {
    AfterContentInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener,
    Input,
    OnDestroy,
    Output,
    QueryList,
    ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IhoOptionComponent } from './iho-option.component';
import { debounceTime, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
    selector: 'iho-select',
    templateUrl: './select.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => IhoSelectComponent),
        multi: true
    }],
    styleUrls: ['./select.component.scss'],
})
export class IhoSelectComponent implements AfterContentInit, ControlValueAccessor, OnDestroy {
    @ContentChildren(IhoOptionComponent) options!: QueryList<IhoOptionComponent>;
    @ViewChild('searchInput') searchInputRef!: ElementRef<HTMLInputElement>;
    open = false;
    filterTerm = '';
    @Input() searchable: boolean = false;
    @Input() required = false;
    @Input() size:  | 'md' | 'lg' = 'md';
    @Input() borderless: boolean = false;
    private search$ = new Subject<string>();
    private destroy$ = new Subject<void>();
    @ViewChild('trigger', { read: ElementRef }) triggerEl?: ElementRef<HTMLElement>;
    @Input() error = '';
    @Input() placeholder = 'Select...';
    @Input() disabled = false;
    @Output() valueChange = new EventEmitter<any>();

    // injected host element ref
    constructor(private hostRef: ElementRef<HTMLElement>, public elementRef: ElementRef<HTMLElement>) { }
    trackByFn(index: number, option: IhoOptionComponent): any {
        return option.id || index;
    }

    _value: any = null;
    pendingValue: { has: boolean, val: any } = { has: false, val: null };
    selectedLabel: string | null = null;
    onChange = (_: any) => { };
    onTouched = () => { };
    subs: Subscription[] = [];
    optionClickSubs = new Map<IhoOptionComponent, Subscription>();

    activeIndex = -1;
    activeId: string | null = null;

    ngAfterContentInit(): void {
        this.search$.pipe(debounceTime(180), takeUntil(this.destroy$)).subscribe(term => {
            this.filterTerm = term?.trim() ?? '';
            this.applyFilterToOptions();
        });
        this.options.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.applyFilterToOptions();
        });
        this.options.forEach(opt => this.bindOption(opt));
        const s = this.options.changes.subscribe((ql: QueryList<IhoOptionComponent>) => {
            this.cleanupOptionClickSubs();
            ql.forEach(opt => this.bindOption(opt)); // اینجا هم bindOption رو صدا بزن
            this.syncSelectionToValue();
        });
        this.subs.push(s);

        if (this.pendingValue.has) {
            this._value = this.pendingValue.val;
            this.pendingValue = { has: false, val: null };
        }
        this.syncSelectionToValue();

        // پاس دادن searchable به همه options (جدید)
        this.updateOptionsSearchable();
    }
    private updateOptionsSearchable() {
        if (!this.options) return;
        this.options.forEach(opt => {
            opt.searchable = this.searchable;
        });
    }

    bindOption(opt: IhoOptionComponent) {
        (opt as any).id = (opt as any).id || `iho-opt-${Math.random().toString(36).slice(2, 9)}`;
        const sub = opt.optionClick.subscribe(o => {
            this.selectOption(o);
        });
        this.optionClickSubs.set(opt, sub);

        // پاس دادن searchable به این option (جدید)
        opt.searchable = this.searchable;
    }

    cleanupOptionClickSubs() {
        this.optionClickSubs.forEach(sub => sub.unsubscribe());
        this.optionClickSubs.clear();
    }

    writeValue(value: any): void {
        if (!this.options || (Array.isArray((this.options as any).toArray()) && this.options.length === 0)) {
            this.pendingValue = { has: true, val: value };
            this._value = value;
            return;
        }
        this._value = value;
        this.syncSelectionToValue();
    }
    registerOnChange(fn: any): void { this.onChange = fn; }
    registerOnTouched(fn: any): void { this.onTouched = fn; }
    setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

    // --- trigger handlers ---
    onTriggerClick(e: MouseEvent) {
        e.stopPropagation(); // مهم: جلوی bubbling که ممکنه document:click را فعال کند
        this.toggle();
    }
    clearSearch() {
        this.searchInputRef.nativeElement.value = '';
        this.search$.next('');
        // تمرکز رو نگه دار یا بیار
        setTimeout(() => this.searchInputRef?.nativeElement?.focus(), 0);
    }

    onTriggerKeydown(e: KeyboardEvent) {
        if (this.disabled) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            this.highlightSelectedOr(e.key === 'ArrowDown' ? 0 : -1);
            setTimeout(() => this.focusPanel(), 0);
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggle();
        }
    }
    onSearch(value: any) {
        this.filterTerm = (value ?? '').toString().trim();

        this.search$.next(value);
    }
    toggle() {
        if (this.disabled) return;
        this.open = !this.open;
        if (this.open) {
            this.highlightSelectedOr(0);
            setTimeout(() => this.focusPanel(), 0);
        } else {
            this.onTouched();
        }
        setTimeout(() => {
            try {
                if (this.searchable && this.searchInputRef?.nativeElement) {
                    this.searchInputRef.nativeElement.value = this.filterTerm ?? '';
                    this.search$.next(this.filterTerm ?? '');
                    this.searchInputRef.nativeElement.focus();
                } else {
                    this.focusPanel();
                }
            } catch {
                // ignore
                this.focusPanel();
            }
        }, 0);
    }

    closePanel() { this.open = false; this.activeIndex = -1; this.activeId = null; }

    selectOption(opt: any) {
        if (opt.disabled) return;
        this._value = opt.value;
        this.onChange(this._value);
        this.valueChange.emit(this._value);

        // set displayed label: prefer explicit prop, otherwise read DOM text
        this.selectedLabel = (opt.label !== undefined && opt.label !== null)
            ? String(opt.label)
            : (opt.elementRef?.nativeElement?.textContent?.trim() ?? String(opt.value));

        this.setSelectedByValue(this._value);
        this.closePanel();
        setTimeout(() => this.triggerEl?.nativeElement?.focus(), 0);
    }

    private setSelectedByValue(v: any) {
        if (!this.options) return;
        const arr = this.options.toArray();
        if (!arr.length) { this.pendingValue = { has: true, val: v }; return; }

        this.selectedLabel = null;
        arr.forEach((opt: any) => {
            opt.selected = (opt.value === v);
            if (opt.selected) {
                this.selectedLabel = (opt.label !== undefined && opt.label !== null)
                    ? String(opt.label)
                    : (opt.elementRef?.nativeElement?.textContent?.trim() ?? String(v));
            } else {
                opt.selected = false;
            }
        });
    }


    syncSelectionToValue() {
        if (!this.options) return;
        if (this.pendingValue.has) {
            this._value = this.pendingValue.val;
            this.pendingValue = { has: false, val: null };
        }
        this.setSelectedByValue(this._value);
    }

    // keyboard handling while open
    @HostListener('document:keydown', ['$event'])
    onDocumentKeydown(e: KeyboardEvent) {
        if (!this.open) return;
        const arr = (this.options && this.options.toArray()) || [];
        if (!arr.length) return;
        if (e.key === 'ArrowDown') { e.preventDefault(); this.moveActive(1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); this.moveActive(-1); }
        else if (e.key === 'Enter') { e.preventDefault(); const opt = arr[this.activeIndex]; if (opt && !opt.disabled) this.selectOption(opt); }
        else if (e.key === 'Escape') { e.preventDefault(); this.closePanel(); this.triggerEl?.nativeElement.focus(); }
    }

    // --- click outside handler: اگر کلیک خارج از هاست بود، پنل را ببند ---
    @HostListener('document:click', ['$event'])
    onDocumentClick(ev: MouseEvent) {
        if (!this.open) return;
        const clickedInside = this.hostRef?.nativeElement?.contains(ev.target as Node);
        if (!clickedInside) {
            this.closePanel();
        }
    }

    moveActive(delta: number) {
        const arr = (this.options && this.options.toArray()) || [];
        if (!arr.length) return;
        let i = this.activeIndex;
        const len = arr.length;
        for (let attempt = 0; attempt < len; attempt++) {
            i = (i + delta + len) % len;
            if (!arr[i].disabled) break;
        }
        this.highlightAt(i);
    }

    highlightSelectedOr(fallbackIndex: number) {
        const arr = (this.options && this.options.toArray()) || [];
        if (!arr.length) return;
        const selIndex = arr.findIndex(o => o.selected && !o.disabled);
        if (selIndex >= 0) this.highlightAt(selIndex);
        else {
            if (fallbackIndex < 0) this.highlightAt(arr.length - 1);
            else this.highlightAt(fallbackIndex);
        }
    }

    highlightAt(i: number) {
        const arr = (this.options && this.options.toArray()) || [];
        if (!arr.length || i < 0 || i >= arr.length) return;
        this.activeIndex = i;
        arr.forEach((o, idx) => o.highlight = (idx === i));
        this.activeId = (arr[i] as any).id;
        const el = (arr[i] as any).elementRef?.nativeElement ?? null;
        if (el && typeof el.scrollIntoView === 'function') el.scrollIntoView({ block: 'nearest' });
    }

    focusPanel() {
        const arr = (this.options && this.options.toArray()) || [];
        if (this.activeIndex >= 0 && arr[this.activeIndex]) {
            try { arr[this.activeIndex].highlight = true; } catch { }
            const el = (arr[this.activeIndex] as any).elementRef?.nativeElement ?? null;
            if (el && typeof el.scrollIntoView === 'function') el.scrollIntoView({ block: 'nearest' });
            this.activeId = (arr[this.activeIndex] as any).id;
        }
    }

    get value() { return this._value; }
    private applyFilterToOptions() {
        const term = this.filterTerm.toLowerCase();
        if (!this.options) return;
        this.options.forEach(opt => {
            const label = (opt.label || '').toString().toLowerCase();
            const matches = !term || label.includes(term);
            opt.setVisible(matches);
        });
    }
    ngOnDestroy(): void {
        this.subs.forEach(s => s.unsubscribe());
        this.cleanupOptionClickSubs();
    }
}
