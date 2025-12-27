import { Injectable, inject, signal, computed, InjectionToken } from '@angular/core';
import { Notification, NotificationConfigDefaults, NotifyItem, NotifyOptions, NotifyType } from './notification.model';

export const NOTIFY_DEFAULTS = new InjectionToken<NotificationConfigDefaults>('NOTIFY_DEFAULTS', {
    factory: () => ({
        duration: 4000,
        dismissible: true,
        maxStack: 5,
        position: 'bottom-right',
    }),
});

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private defaults = inject(NOTIFY_DEFAULTS);

    /** state */
    private _items = signal<Notification[]>([]);
    /** expose (read-only) */
    readonly items = computed(() => this._items());

    /** برای مدیریت timeout هر آیتم */
    private timers = new Map<string, any>();

    /** API عمومی */
    success(title: string, message?: string, opts: any = {}) {
        return this.push('Success', title, message, opts);
    }
    info(title: string, message?: string, opts: any = {}) {
        return this.push('Information', title, message, opts);
    }
    warning(title: string, message?: string, opts: any = {}) {
        return this.push('Warning', title, message, opts);
    }
    error(title: string, message?: string, opts: any = {}) {
        return this.push('Error', title, message, opts);
    }

    /** بستن / پاک‌سازی */
    close(id: string) {
        this.clearTimer(id);
        this._items.update(list => list.filter(n => n.id !== id));
    }

    clearAll() {
        this._items().forEach(n => this.clearTimer(n.id));
        this._items.set([]);
    }

    /** جزئیات داخلی */
    private push(type: NotifyType, title: string, message?: string, opts: NotifyOptions = {}) {
        const id = crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
        const notif: any = {
            id,
            type,
            title,
            message,
            duration: opts.duration ?? this.defaults.duration,
            dismissible: opts.dismissible ?? this.defaults.dismissible,
            action: opts.action, // اختیاری
            createdAt: Date.now(),
            position : opts.position ?? this.defaults.position
        };
        this._items.update(list => [notif, ...list].slice(0, this.defaults.maxStack));
        if (notif.duration > 0) setTimeout(() => this.close(id), notif.duration);
        return id;
    }

    private clearTimer(id: string) {
        const t = this.timers.get(id);
        if (t) {
            clearTimeout(t);
            this.timers.delete(id);
        }
    }
}
