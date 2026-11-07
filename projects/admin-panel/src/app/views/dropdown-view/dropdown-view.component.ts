import { Component } from '@angular/core';

@Component({ selector: 'app-dropdown-view', templateUrl: './dropdown-view.component.html' })
export class dropdownViewComponent {
    cities = [{ value: 'mashhad', label: 'مشهد' }, { value: 'tehran', label: 'تهران' }, { value: 'tabriz', label: 'تبریز' }, { value: 'shiraz', label: 'شیراز' }];
    cityMd: string | null = null;
    cityLg: string | null = 'tehran';
    cityBorderless: string | null = null;
}