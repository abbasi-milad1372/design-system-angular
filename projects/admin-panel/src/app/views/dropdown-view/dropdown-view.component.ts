import { Component } from '@angular/core';

@Component({ selector: 'app-dropdown-view', templateUrl: './dropdown-view.component.html' })
export class dropdownViewComponent {
    cities = [{ value: 'mashhad', label: 'مشهد' }, { value: 'tehran', label: 'تهران' }, { value: 'tabriz', label: 'تبریز' }, { value: 'shiraz', label: 'شیراز' }];
    cityMd: string | null = null;
    cityLg: string | null = 'tehran';
    cityBorderless: string | null = null;
    code = `<mytag-select [(ngModel)]="city" placeholder="شهر را انتخاب کنید" size="md" [required]="true">
  <mytag-option value="mashhad" label="مشهد">مشهد</mytag-option>
  <mytag-option value="tehran" label="تهران">تهران</mytag-option>
</mytag-select>

<mytag-select [(ngModel)]="city" size="lg" [searchable]="true" [borderless]="true">
  <mytag-option *ngFor="let city of cities" [value]="city.value" [label]="city.label">{{ city.label }}</mytag-option>
</mytag-select>

<mytag-select placeholder="انتخاب نامعتبر" error="انتخاب شهر الزامی است"></mytag-select>
<mytag-select placeholder="غیرفعال" [disabled]="true"></mytag-select>`;
}