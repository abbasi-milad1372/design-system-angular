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
    @Input() contentContainerPadding: boolean = true;

    @Output() closed = new EventEmitter<void>();

    @ViewChild('contentContainer', { read: ViewContainerRef }) contentContainer!: ViewContainerRef;

    private customComponent?: Type<any>;
    private customData?: any;

    constructor(private cdr: ChangeDetectorRef) { }

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