import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'mytag-option',
  template: `
  <ng-container *ngIf="visible">
  <div class="iho-option__inner" role="option" [attr.id]="id" (click)="select()">
    <ng-content></ng-content>
  </div>
</ng-container>
  `,
  styles: [`
    :host {
      display: block;
        padding: var(--space-xs) var(--space-md);
      cursor: pointer;
      user-select: none;
      height:36px;
      &:hover{
        background: var(--color-gray-DEFAULT);
      }
    }
    :host(.is-highlight) { background: var(--color-gray-DEFAULT); border-radius: var(--border-radius-xs); }
    :host(.is-disabled) { color: var(--color-gray-200); cursor: not-allowed; }
    .iho-option__inner { 
        line-height: 28px;
      font-size: var(--font-small);
      font-weight: var(--font-weight-medium);
      color: var(--color-gray-400);
      text-align: right;
       border-bottom: var(--border-width-inside) solid var(--color-gray-DEFAULT);
    }
   
    :host(.searchable-mode){
 padding: var(--space-lg) var(--space-xl);
      color: var(--color-gray-400);
      border-bottom: var(--border-width-inside) solid var(--color-gray-DEFAULT);
         height:var(--space-6xl);
         border-radius: var(--border-radius-xs);
    }
    /* استایل‌های خاص برای حالت searchable */
    :host(.searchable-mode) .iho-option__inner {
     border:none;
    }
    :host(.searchable-mode.is-highlight) {
     
   
      
    }
    :host(.iho-option--hidden){
      display:none;
    }
  `]
})
export class IhoOptionComponent {
  @Input() value: any;
  @Input() disabled = false;
  @Input() label?: string;
  @Input() id?: string;
  @Input() searchable = false; // Input جدید برای searchable
  visible = true;
  constructor(public elementRef: ElementRef<HTMLElement>) { }
  @HostBinding('class.is-highlight') highlight = false;
  @HostBinding('class.is-disabled') get isDisabled() { return this.disabled; }
  @HostBinding('attr.tabindex') tabindex = '-1';
  @HostBinding('class.iho-option--hidden') get hiddenClass() {
    return !this.visible;
  }
  @HostBinding('class.searchable-mode') get searchableMode() { 
    return this.searchable;
  }
  setVisible(v: boolean) {
    this.visible = v;
  }
  @Input() selected = false;

  // host will listen and call this
  @Output() optionClick = new EventEmitter<IhoOptionComponent>();

  @HostListener('click')
  onClick() {
    if (this.disabled) return;
    this.optionClick.emit(this);
  }
  select() {
    // منطقی که قبلاً داشتی برای انتخاب option
  }
}