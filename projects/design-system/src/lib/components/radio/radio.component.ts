import { Component, Input } from '@angular/core';
import { IhoRadioGroupComponent } from './radio-group.component';

@Component({
    selector: 'iho-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
    @Input() label = '';
    @Input() radioValue: any;
    @Input() disabled = false;

    // توسط گروه ست می‌شوند:
    groupName!: string;
    groupDisabled = false;
    @Input()  checked = false;
    @Input() dir?: string = 'rtl';
    id = 'iho-radio-' + Math.random().toString(36).slice(2);

    // مرجع گروه را گروه در ngAfterContentInit به ما می‌دهد
    private group?: IhoRadioGroupComponent;
    registerHost(group: IhoRadioGroupComponent) {
        this.group = group;
    }

    onNativeChange(ev: Event) {
        const input = ev.target as HTMLInputElement;
        if (input.checked && this.group) {
            this.group.selectFromOption(this);
        }
    }

    onTouched() {
        // گروه خودش onTouched را صدا می‌زند؛ اینجا لازم نیست کاری کنیم
    }
}
