import { Component, OnDestroy } from '@angular/core';
import { NotificationService, NotifyOptions } from '@mytag/design-system';

@Component({
  selector: 'app-notifications-view',
  templateUrl: './notifications-view.component.html',
})
export class NotificationsViewComponent implements OnDestroy {
  readonly positions: NonNullable<NotifyOptions['position']>[] = [
    'bottom-right',
    'bottom-left',
    'top-right',
    'top-left',
  ];
  position: NonNullable<NotifyOptions['position']> = 'bottom-right';
  duration = 4000;
  dismissible = true;
  withAction = false;
  lastAction = '';
  lastId = '';

  constructor(public notify: NotificationService) {}

  show(type: 'success' | 'info' | 'warning' | 'error'): void {
    this.lastId = this.notify[type](
      'عنوان اعلان',
      'این اعلان با تنظیمات انتخاب‌شده نمایش داده می‌شود.',
      {
        duration: Math.max(0, Number(this.duration) || 0),
        dismissible: this.dismissible,
        position: this.position,
        ...(this.withAction
          ? {
              action: {
                label: 'مشاهده',
                onClick: () => (this.lastAction = 'اکشن انتخاب شد'),
              },
            }
          : {}),
      }
    );
  }

  ngOnDestroy(): void {
    this.notify.clearAll();
  }
}
