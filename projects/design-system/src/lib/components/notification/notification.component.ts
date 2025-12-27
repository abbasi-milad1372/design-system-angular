import { ChangeDetectionStrategy, Component, Inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notification.service';
import { NOTIFY_DEFAULTS } from './notification.service';

@Component({
    selector: 'iho-notifications',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'], 
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
    constructor(
        private notify: NotificationService,
        @Inject(NOTIFY_DEFAULTS) private defaults: any,
    ) { }

    notifications = computed(() => this.notify.items());

    containerClass(notification: any) {
        const position = notification.position ?? this.defaults.position;

        switch (position) {
            case 'top-right': return 'top-right';
            case 'top-left': return 'top-left';
            case 'bottom-left': return 'bottom-left';
            case 'bottom-right': return 'bottom-right';
            default: return 'bottom-right';
        }
    }

    close(n: { id: string }) {
        this.notify.close(n.id);
    }
}
