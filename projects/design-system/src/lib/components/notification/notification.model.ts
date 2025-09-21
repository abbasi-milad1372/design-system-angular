export type NotifyType = 'Success' | 'Information' | 'Warning' | 'Error';

export interface NotifyOptions {
    duration?: number;
    dismissible?: boolean;
    action?: { label: string; onClick: () => void };
}

export interface NotifyItem {
    id: string;
    type: NotifyType;
    title: string;
    message?: string;
    createdAt: number;
    duration: number;
    dismissible: boolean;
    action?: { label: string; onClick: () => void };
}
export interface Notification extends Required<NotificationOptions> {
    id: string;
    type: NotifyType;
    title: string;
    /** متن HTML-safe (در کامپوننت با [innerHtml] رندر می‌شود) */
    message?: string;
    createdAt: number;
}

export interface NotificationConfigDefaults {
    duration: number;
    dismissible: boolean;
    maxStack: number;   // حداکثر نوتیف هم‌زمان
    position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}
