import { Component, Input } from '@angular/core';

@Component({
    selector: 'iho-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    @Input() label = '';
    @Input() size: 'sm' | 'md' = 'md';
    @Input() variant: 'outline' = 'outline';
    @Input() disabled = false;
    @Input() active = false;
    @Input() layout: 'default' | 'icon-top' = 'default';
    @Input() border: true | false = false;
    // get classes(): string {
    //     const base = `flex items-center gap-md px-lg py-xs font-medium transition whitespace-nowrap`;
    //     const sizeMap = {
    //         sm: 'h-[28px]  text-small min-w-[50px]',
    //         md: 'h-[32px]  text-p min-w-[50px]',
    //     };
    //     const variantMap = { 
    //         'outline': `text-gray-400`,
    //     };
    //     const hoverStyle = this.layout === 'icon-top' ? 'hover:border-b-2 hover:border-gray-300' : 'hover:bg-white-600 hover:text-gray-300';
    //     const borderClass = this.border ? 'border border-gray' : '';
    //     const activeStyle = this.active && this.layout != 'icon-top' ?
    //      'border-primary-500 text-primary-600 hover:text-primary-600 hover:bg-white' 
    //     : this.active && this.layout === 'icon-top' ?
    //     'border-b-2 border-primary-500 text-primary-600 hover:border-primary-600' : '';
    //     const disabledStyle = this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    //     const layoutClass = this.layout === 'icon-top' ? 'flex-col  text-center py-sm px-md !h-auto' : 'flex-row  rounded-full inline-flex';
    //     return `${base} ${sizeMap[this.size]} ${hoverStyle} ${variantMap[this.variant]} ${borderClass} ${layoutClass} ${activeStyle} ${disabledStyle}`;
    // }
    get classes(): string[] {
        const borderClass = this.border ? 'tab__border' : '';
        const sizeClass = this.size === 'sm' ? 'tab__label--sm' : 'tab__label--md';
        const layoutClass = this.layout === 'icon-top' ? 'tab__label--icon-top' : '';
        const activeClass = this.active && this.layout === 'icon-top' ? 'tab__border-bottom' : '';

        return [
            'tab',
            sizeClass,
            layoutClass,
            activeClass,
            borderClass,
            this.active ? 'tab--active' : '',
            this.disabled ? 'tab--disabled' : '',
        ].filter(Boolean); // حذف رشته‌های خالی
    }
      
}
