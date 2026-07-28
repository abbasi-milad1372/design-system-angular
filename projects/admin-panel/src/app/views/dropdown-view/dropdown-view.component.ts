import { Component } from '@angular/core';

@Component({ selector: 'app-dropdown-view', templateUrl: './dropdown-view.component.html' })
export class dropdownViewComponent {
    cities = [{ value: 'mashhad', label: 'مشهد' }, { value: 'tehran', label: 'تهران' }, { value: 'tabriz', label: 'تبریز' }, { value: 'shiraz', label: 'شیراز' }];
    cityMd: string | null = null;
    cityLg: string | null = 'tehran';
    cityBorderless: string | null = null;
    code = `<iho-select [(ngModel)]="city" placeholder="شهر را انتخاب کنید" size="md" [required]="true">
  <iho-option value="mashhad" label="مشهد">مشهد</iho-option>
  <iho-option value="tehran" label="تهران">تهران</iho-option>
</iho-select>

<iho-select [(ngModel)]="city" size="lg" [searchable]="true" [borderless]="true">
  <iho-option *ngFor="let city of cities" [value]="city.value" [label]="city.label">{{ city.label }}</iho-option>
</iho-select>

<iho-select placeholder="انتخاب نامعتبر" error="انتخاب شهر الزامی است"></iho-select>
<iho-select placeholder="غیرفعال" [disabled]="true"></iho-select>`;
}