import { Component, Input, Inject, PLATFORM_ID, OnInit, DestroyRef, inject, makeStateKey, Output, EventEmitter } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { WINDOW } from '../../window.module';
import { Router } from '@angular/router';
@Component({
  selector: 'iho-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

export class ButtonComponent {
  //  @Input() label = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'error' | 'default' | 'ghost-primary' | 'gray-inside' | 'primary-inside' | 'secondary-inside' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() disabled = false;
  @Input() type: 'button' | 'link' = 'button';
  @Input() href?: string | null = null;
  @Input() widthPx?: number;
  @Input() widthPercent?: number;
  @Output() clickBtn = new EventEmitter<any>();
  get widthCss(): string | null {
    if (this.widthPx != null) return `${this.widthPx}px`;
    if (this.widthPercent != null) return `${this.widthPercent}%`;
    return null;
  }
  @Input() showLoading = false;
  router = inject(Router);
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
   @Inject(WINDOW) private windowRef: Window,route:Router) {
 
  }

  ngOnInit() {

  }
  openLink(ev:Event) {
    if (this.disabled || this.showLoading) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    this.clickBtn.emit(ev);

  }



  get classes(): any {
    return {
      'button':true,
      [`button--${this.variant}`]:true,
      [`button--${this.size}`]:true,
      'button--disabled' : this.disabled,
    };
  }
 
}