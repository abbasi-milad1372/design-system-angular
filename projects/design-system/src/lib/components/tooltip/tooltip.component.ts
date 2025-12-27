import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';

type Pos = 'top' | 'bottom' | 'left' | 'right';
type OffsetLike = number | { top?: number; bottom?: number; left?: number; right?: number };

@Component({
  selector: 'iho-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private hostRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) { }

  @ViewChild('popup', { static: false }) popupEl?: ElementRef<HTMLElement>;

  // Inputs
  @Input() classList = '';
  @Input() isVisible = false;
  @Input() popUpTemplate?: TemplateRef<any>;
  @Input() position: Pos = 'bottom';
  @Input() forcePosition = false; // اگر true باشد، فلپ نمی‌کند
  @Input() offset: OffsetLike = 8;
  @Input() showArrow = true;
  @Input() delayEnter = 75;
  @Input() delayLeave = 150;

  @Input() anchor?: ElementRef<HTMLElement> | HTMLElement | null;

  // Outputs
  @Output() closed = new EventEmitter<void>();
  @Output() visibleChange = new EventEmitter<boolean>();

  top = 0;
  left = 0;
  transformOrigin = 'center top';
  ariaHidden = 'true';

  private enterTimeout: any = null;
  private leaveTimeout: any = null;
  private documentClickUnlisten: (() => void) | null = null;
  private isHoverHost = false;
  private isHoverPopup = false;

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.documentClickUnlisten = this.renderer.listen('document', 'click', (ev: MouseEvent) => {
        if (!this.isVisible) return;
        const anchorEl = this.getAnchorElement();
        const popupNode = this.popupEl?.nativeElement;
        if ((anchorEl && anchorEl.contains(ev.target as Node)) ||
          (this.hostRef.nativeElement.contains(ev.target as Node)) ||
          (popupNode && popupNode.contains(ev.target as Node))) {
          return;
        }
        this.ngZone.run(() => this.hideImmediately());
      });
    });
  }

  ngAfterViewInit(): void {
    if (this.isVisible) this.computePosition();
  }

  ngOnDestroy(): void {
    if (this.enterTimeout) clearTimeout(this.enterTimeout);
    if (this.leaveTimeout) clearTimeout(this.leaveTimeout);
    if (this.documentClickUnlisten) this.documentClickUnlisten();
  }

  show() {
    if (this.leaveTimeout) { clearTimeout(this.leaveTimeout); this.leaveTimeout = null; }
    if (this.isVisible) return;

    if (this.delayEnter > 0) {
      if (this.enterTimeout) clearTimeout(this.enterTimeout);
      this.enterTimeout = setTimeout(() => {
        this.doShow();
        this.enterTimeout = null;
      }, this.delayEnter);
    } else {
      this.doShow();
    }
  }

  hide() {
    if (this.enterTimeout) { clearTimeout(this.enterTimeout); this.enterTimeout = null; }
    if (!this.isVisible) return;
    if (this.leaveTimeout) clearTimeout(this.leaveTimeout);
    this.leaveTimeout = setTimeout(() => {
      if (!this.isHoverHost && !this.isHoverPopup) {
        this.doHide();
      }
      this.leaveTimeout = null;
    }, this.delayLeave);
  }

  private hideImmediately() {
    if (this.enterTimeout) { clearTimeout(this.enterTimeout); this.enterTimeout = null; }
    if (this.leaveTimeout) { clearTimeout(this.leaveTimeout); this.leaveTimeout = null; }
    this.doHide();
  }

  private doShow() {
    this.computePosition();

    this.isVisible = true;
    this.ariaHidden = 'false';
    this.visibleChange.emit(true);
  }


  private doHide() {
    this.isVisible = false;
    this.ariaHidden = 'true';
    this.visibleChange.emit(false);
    this.closed.emit();
  }

  @HostListener('pointerenter')
  onHostPointerEnter() {
    this.isHoverHost = true;
    this.show();
  }

  @HostListener('pointerleave')
  onHostPointerLeave() {
    this.isHoverHost = false;
    this.hide();
  }

  onPopupPointerEnter() {
    this.isHoverPopup = true;
    if (this.leaveTimeout) { clearTimeout(this.leaveTimeout); this.leaveTimeout = null; }
    this.show();
  }

  onPopupPointerLeave() {
    this.isHoverPopup = false;
    this.hide();
  }

  private getAnchorElement(): HTMLElement | null {
    if (!this.anchor) return this.hostRef.nativeElement;
    if ((this.anchor as any).nativeElement) return (this.anchor as any).nativeElement as HTMLElement;
    if (this.anchor instanceof HTMLElement) return this.anchor;
    return null;
  }

  private parseOffset(): { top: number; bottom: number; left: number; right: number } {
    if (typeof this.offset === 'number') return { top: this.offset, bottom: this.offset, left: this.offset, right: this.offset };
    const o = this.offset || {};
    return { top: o.top ?? 0, bottom: o.bottom ?? 0, left: o.left ?? 0, right: o.right ?? 0 };
  }

  private computePosition() {
    if (!this.popupEl) return;
    const popup = this.popupEl.nativeElement;
    const anchorEl:any = this.getAnchorElement();
    const hostRect:any = anchorEl.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    const parent = popup.offsetParent as Element | null;
    const parentRect = parent ? parent.getBoundingClientRect() : { top: 0, left: 0 };
    const offsets = this.parseOffset();

    let top = 0;
    let left = 0;
    let origin = 'center top';

    const pos = this.position;

    switch (pos) {
      case 'top':
        top = hostRect.top - popupRect.height - offsets.top - parentRect.top;
        left = hostRect.left + (hostRect.width - popupRect.width) / 2 - parentRect.left;
        origin = 'center bottom';
        break;
      case 'bottom':
        top = hostRect.bottom + offsets.bottom - parentRect.top;
        left = hostRect.left + (hostRect.width - popupRect.width) / 2 - parentRect.left;
        origin = 'center top';
        break;
      case 'left':
        top = hostRect.top + (hostRect.height - popupRect.height) / 2 - parentRect.top;
        left = hostRect.left - popupRect.width - offsets.left - parentRect.left;
        origin = 'right center';
        break;
      case 'right':
        top = hostRect.top + (hostRect.height - popupRect.height) / 2 - parentRect.top;
        left = hostRect.right + offsets.right - parentRect.left;
        origin = 'left center';
        break;
    }

    this.top = Math.round(top);
    this.left = Math.round(left);
    this.transformOrigin = origin;
    popup.style.transformOrigin = origin;
  }
}
