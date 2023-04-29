import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgToastifyConfig } from './ng-toastify-config.model';
import { NgToastifyComponent } from './ng-toastify.component';

const DEFAULT_TOAST_CONFIG: Omit<NgToastifyConfig, 'message' | 'type' | 'title'> = {
  horizontalPosition: 'right',
  verticalPosition: 'bottom',
  duration: 5000,
};

@Injectable({
  providedIn: 'root'
})
export class NgToastifyService {

  private queue: NgToastifyConfig[] = [];
  private isToastDisplayed: boolean = false;

  private toastComponentRef: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) { }


  private showNextToast(): void {
    if (this.queue.length > 0) {
      const toastConfig = this.queue.shift();
      const factory = this.componentFactoryResolver.resolveComponentFactory(NgToastifyComponent);
      this.toastComponentRef = factory.create(this.injector);
      this.toastComponentRef.instance.toastConfig = toastConfig;
      this.toastComponentRef.instance.close.subscribe(() => {
        this.appRef.detachView(this.toastComponentRef.hostView);
        this.toastComponentRef.destroy();
        this.isToastDisplayed = false;
        this.showNextToast();
      });
      this.appRef.attachView(this.toastComponentRef.hostView);
      const element = this.toastComponentRef.location.nativeElement;
      document.body.appendChild(element);
      this.isToastDisplayed = true;
      setTimeout(() => {
        this.appRef.detachView(this.toastComponentRef.hostView);
        this.toastComponentRef.destroy();
        this.isToastDisplayed = false;
        this.showNextToast();
      }, toastConfig.duration);
    } else {
      this.isToastDisplayed = false;
    }
  }

  showToast(toastConfig: NgToastifyConfig): void {
    if (!this.isToastDisplayed) {
      this.isToastDisplayed = true;
      const factory = this.componentFactoryResolver.resolveComponentFactory(NgToastifyComponent);
      this.toastComponentRef = factory.create(this.injector);
      this.toastComponentRef.instance.toastConfig = toastConfig;
      this.toastComponentRef.instance.close.subscribe(() => {
        this.appRef.detachView(this.toastComponentRef.hostView);
        this.toastComponentRef.destroy();
        this.isToastDisplayed = false;
        this.showNextToast();
      });
      this.appRef.attachView(this.toastComponentRef.hostView);
      const element = this.toastComponentRef.location.nativeElement;
      document.body.appendChild(element);
      setTimeout(() => {
        this.appRef.detachView(this.toastComponentRef.hostView);
        this.toastComponentRef.destroy();
        this.isToastDisplayed = false;
        this.showNextToast();
      }, toastConfig.duration);
    } else {
      this.queue.push(toastConfig);
    }
  }

  primary(message: string, options?: Omit<NgToastifyConfig, 'message' | 'type'>) {
    const mergedOptions = { title: 'Primary', ...DEFAULT_TOAST_CONFIG, ...options };
    this.showToast({ message: message, type: 'toast-primary',...mergedOptions });
  }

  secondary(message: string, options?: Omit<NgToastifyConfig, 'message' | 'type'>) {
    const mergedOptions = { title: 'Secondary', ...DEFAULT_TOAST_CONFIG, ...options };
    this.showToast({ message: message, type: 'toast-secondary',...mergedOptions });
  }

  accent(message: string, options?: Omit<NgToastifyConfig, 'message' | 'type'>) {
    const mergedOptions = { title: 'Accent', ...DEFAULT_TOAST_CONFIG, ...options };
    this.showToast({ message: message, type: 'toast-accent',...mergedOptions });
  }

  neutral(message: string, options?: Omit<NgToastifyConfig, 'message' | 'type'>) {
    const mergedOptions = { title: 'Neutral', ...DEFAULT_TOAST_CONFIG, ...options };
    this.showToast({ message: message, type: 'toast-neutral',...mergedOptions });
  }

  success(message: string, options?: Omit<NgToastifyConfig, 'message' | 'type'>) {
    const mergedOptions = { title: 'Success', ...DEFAULT_TOAST_CONFIG, ...options };
    this.showToast({ message: message, type: 'toast-success',...mergedOptions });
  }

  error(message: string, options?: Omit<NgToastifyConfig, 'message' | 'type'>) {
    const mergedOptions = { title: 'Error', ...DEFAULT_TOAST_CONFIG, ...options };
    this.showToast({ message: message, type: 'toast-error',...mergedOptions });
  }

  warning(message: string, options?: Omit<NgToastifyConfig, 'message' | 'type'>) {
    const mergedOptions = { title: 'Warning', ...DEFAULT_TOAST_CONFIG, ...options };
    this.showToast({ message: message, type: 'toast-warning',...mergedOptions });
  }

  info(message: string, options?: Omit<NgToastifyConfig, 'message' | 'type'>) {
    const mergedOptions = { title: 'Info', ...DEFAULT_TOAST_CONFIG, ...options };
    this.showToast({ message: message, type: 'toast-info',...mergedOptions });
  }

}
