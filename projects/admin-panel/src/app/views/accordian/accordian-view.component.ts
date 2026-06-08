import { Component } from '@angular/core';

@Component({
    selector: 'app-accordian-view',
    templateUrl: './accordian-view.component.html',
})
export class accordianViewComponent { 
    faqs = [
        { question: 'چگونه ثبت‌نام کنم؟', answer: 'برای ثبت‌نام...' },
        { question: 'هزینه اشتراک چقدر است؟', answer: 'هزینه ماهانه...' },
    ];
    code =  `  
    `;    
}
