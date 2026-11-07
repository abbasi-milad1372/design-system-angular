import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
})
export class CodeBlockComponent {
  @Input() code = '';
  @Input() language = 'HTML';
  @Input() label = 'نمونه کد';
  copied = false;
  failed = false;
  feedback = '';
  private request = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  async copy(): Promise<void> {
    const request = ++this.request;
    this.copied = false;
    this.failed = false;
    this.feedback = '';
    try {
      const clipboard = this.document.defaultView?.navigator.clipboard;
      if (!clipboard) {
        throw new Error('Clipboard unavailable');
      }
      await clipboard.writeText(this.code);
      if (request !== this.request) {
        return;
      }
      this.copied = true;
      this.feedback = 'کد کپی شد.';
    } catch {
      if (request !== this.request) {
        return;
      }
      this.failed = true;
      this.feedback = 'کپی خودکار در دسترس نیست؛ کد را انتخاب و کپی کنید.';
    }
  }
}
