import { ChangeDetectionStrategy, Component, Inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notification.service';
import { NOTIFY_DEFAULTS } from './notification.service';

@Component({
    selector: 'iho-notifications',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'], // اختیاری؛ اگر tailwind داری، می‌تونی خالی بگذاری
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
    constructor(
        private notify: NotificationService,
        @Inject(NOTIFY_DEFAULTS) private defaults: any,
    ) { }

    /** bind به تمپلیت */
    notifications = computed(() => this.notify.items());

    /** کلاس پوزیشن‌بندی کانتینر بر اساس تنظیمات پیش‌فرض سرویس */
    containerClass = computed(() => {
        switch (this.defaults.position) {
            case 'top-right': return 'fixed right-5 top-5';
            case 'top-left': return 'fixed left-5 top-5';
            case 'bottom-left': return 'fixed left-5 bottom-5';
            default: return 'fixed right-5 bottom-5';
        }
    });

    close(n: { id: string }) {
        this.notify.close(n.id);
    }
}
