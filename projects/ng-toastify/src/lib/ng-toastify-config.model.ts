export interface NgToastifyConfig{
    type?: string;
    title?: string;
    message?: string;
    horizontalPosition?: 'left' | 'middle' | 'right';
    verticalPosition?: 'top' | 'middle' | 'bottom';
    duration?: number;
}