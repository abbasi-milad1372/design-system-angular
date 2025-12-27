import { Injectable, ComponentRef, ViewContainerRef, Injector, Type, PLATFORM_ID, Inject, EventEmitter } from '@angular/core';
import { IhoBottomsheetComponent } from './bottomsheet.component';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

interface CustomComponent {
    data?: any;
    close?: EventEmitter<any>;
}

@Injectable({
    providedIn: 'root',
})
export class BottomsheetService {
    constructor(private injector: Injector,
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(DOCUMENT) private document: Document,
    ) { }

    open<T, C extends CustomComponent>(
        viewContainerRef: ViewContainerRef,
        config: {
            component?: Type<C>;
            data?: T;
            position?: 'bottom' | 'top' | 'left' | 'right';
            title?: string;
            dir?: string;
            disabled?: boolean;
            iconClass?: string;
            fullHeight?:boolean;
        } = {}
    ): ComponentRef<IhoBottomsheetComponent> {
        // ایجاد دینامیک کامپوننت Bottomsheet
        const bottomsheetRef = viewContainerRef.createComponent(IhoBottomsheetComponent, {
            injector: this.injector,
        });

        // تنظیم ورودی‌های Bottomsheet
        bottomsheetRef.instance.title = config.title ?? '';
        bottomsheetRef.instance.position = config.position ?? 'bottom';
        bottomsheetRef.instance.dir = config.dir ?? 'rtl';
        bottomsheetRef.instance.disabled = config.disabled ?? false;
        bottomsheetRef.instance.iconClass = config.iconClass ?? '';
        bottomsheetRef.instance.fullHeight = config.fullHeight ?? false;

        // ابتدا DOM را رندر کنید
        bottomsheetRef.hostView.detectChanges();

        // رندر کامپوننت سفارشی و داده‌ها
        if (config.component && config.data !== undefined) {
            
            const contentRef = bottomsheetRef.instance.contentContainer.createComponent(config.component, {
                injector: this.injector,
            });
            contentRef.instance.data = config.data;
            contentRef.changeDetectorRef.detectChanges();
            if (contentRef.instance.close) {
                contentRef.instance.close.subscribe((data: any) => {
                    bottomsheetRef.instance.close(data); 
                });
            }
            
        } else {
            console.warn('No custom component or data provided');
        }

        // اعمال انیمیشن باز شدن با تأخیر
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                bottomsheetRef.instance.isOpen = true;
                bottomsheetRef.hostView.detectChanges();
                if (isPlatformBrowser(this.platformId)) {
                (this.document.querySelector('html') as any).style.overflow = 'hidden';
                }
            });
        });

        // مدیریت بسته شدن با تأخیر برای انیمیشن
        bottomsheetRef.instance.closed.subscribe((data: any) => {
            bottomsheetRef.instance.isOpen = false;
            bottomsheetRef.hostView.detectChanges();
            if (isPlatformBrowser(this.platformId)){
            setTimeout(() => {
                if (isPlatformBrowser(this.platformId)) {
                    (this.document.querySelector('html') as any).style.overflow = '';
                }
                bottomsheetRef.destroy();
                
            }, 300);
        }
        });

        return bottomsheetRef;
    }
}