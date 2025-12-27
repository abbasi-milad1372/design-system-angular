import { Component, Input, Output, EventEmitter, ViewChild, ViewContainerRef, AfterViewInit, ChangeDetectorRef, Type } from '@angular/core';

@Component({
    selector: 'iho-bottomsheet',
    templateUrl: './bottomsheet.component.html',
    styleUrls: ['./bottomsheet.component.scss'],
})
export class IhoBottomsheetComponent  {
    @Input() position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';
    @Input() set isOpen(value: boolean) {
        this._isOpen = value;
        this.cdr.detectChanges();
    }
    get isOpen(): boolean {
        return this._isOpen;
    }
    private _isOpen = false;
    @Input() fullHeight = false;
    @Input() disabled = false;
    @Input() dir?: string = 'rtl';
    @Input() title: string = '';
    @Input() data: any;
    @Input() iconClass: string = '';

    @Output() closed = new EventEmitter<void>();

    @ViewChild('contentContainer', { read: ViewContainerRef }) contentContainer!: ViewContainerRef;

    private customComponent?: Type<any>;
    private customData?: any;

    constructor(private cdr: ChangeDetectorRef) { }

    // ngAfterViewInit() {
    //     if (this.customComponent && this.contentContainer) {
    //         const contentRef = this.contentContainer.createComponent(this.customComponent);
    //         contentRef.instance.data = this.customData;
    //         this.cdr.detectChanges();
    //         console.log('Custom component rendered with data:', this.customData);
    //     }
    // }

    // setCustomContent(component: Type<any>, data: any) {
    //     this.customComponent = component;
    //     this.customData = data;
    //     this.cdr.detectChanges();
    // }

    get positionClass(): string {
        return `position-${this.position}`;
    }

    close(data?: any) {
        if (!this.disabled) {
            this.isOpen = false;
            this.cdr.detectChanges();
            this.closed.emit(data);
        }
    }
}