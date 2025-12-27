import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'iho-option',
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
        padding: 4px 8px;
      cursor: pointer;
      user-select: none;
      height:36px;
      &:hover{
        background: var(--color-gray-DEFAULT);
      }
    }
    :host(.is-highlight) { background: var(--color-gray-DEFAULT); border-radius: 4px; }
    :host(.is-disabled) { color: var(--color-gray-200); cursor: not-allowed; }
    .iho-option__inner { 
        line-height: 28px;
      font-size: var(--font-small);
      font-weight: var(--font-weight-medium);
      color: var(--color-gray-400);
      text-align: right;
       border-bottom: 1px solid var(--color-gray-DEFAULT);
    }
   
    :host(.searchable-mode){
 padding: 12px 16px; 
      color: var(--color-gray-400);
      border-bottom: 1px solid var(--color-gray-DEFAULT);
         height:48px;
         border-radius: 4px;
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