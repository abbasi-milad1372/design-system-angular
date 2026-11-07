import { Component } from '@angular/core';
import { FooterContact, FooterFeature, FooterSection, NavigationLink } from '@iho/design-system';

@Component({
    selector: 'app-footer-view',
    templateUrl: './footer-view.component.html',
})
export class FooterViewComponent {
    features: FooterFeature[] = [
        { title: 'دسترسی آنلاین', description: 'دسترسی به خدمات در هر زمان' },
        { title: 'بازخورد کاربران', description: 'تجربه‌های واقعی برای انتخاب بهتر' },
        { title: 'گزینه‌های متنوع', description: 'انتخاب متناسب با نیاز هر پروژه' },
        { title: 'پشتیبانی', description: 'همراه شما در استفاده از خدمات' },
    ];
    sections: FooterSection[] = [
        { title: 'پروژه نمونه', links: [{ label: 'درباره ما', href: '/navbar' }, { label: 'تماس با ما', href: '/input' }] },
        { title: 'راهنما', links: [{ label: 'پرسش‌های متداول', href: '/accordian' }, { label: 'کامپوننت‌ها', href: '/cards' }] },
        { title: 'منابع', links: [{ label: 'آیکن‌ها', href: '/icons' }, { label: 'نمونه فرم', href: '/input' }] },
    ];
    contacts: FooterContact[] = [{ label: 'ایمیل:', value: 'support@example.com', href: 'mailto:support@example.com' }];
    socialLinks: NavigationLink[] = [{ label: 'کد منبع', href: 'https://github.com/abbasi-milad1372/design-system-angular' }];
}
