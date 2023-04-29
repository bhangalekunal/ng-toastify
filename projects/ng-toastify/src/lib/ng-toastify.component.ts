import { Component, EventEmitter, Output } from '@angular/core';
import { NgToastifyConfig } from './ng-toastify-config.model';
import { NgToastifyService } from './ng-toastify.service';

const toastTypeMap = new Map<string, {typeClass: string, icon: string}>([
  ['toast-primary', { typeClass: 'primary', icon: 'fa-solid fa-circle-exclamation' }],
  ['toast-secondary', { typeClass: 'secondary', icon: 'fa-solid fa-circle-question' }],
  ['toast-accent', { typeClass: 'accent', icon: 'fa-solid fa-star' }],
  ['toast-neutral', { typeClass: 'neutral', icon: 'fa-solid fa-circle-info' }],
  ['toast-success', { typeClass: 'success', icon: 'fa-solid fa-circle-check' }],
  ['toast-error', { typeClass: 'error', icon: 'fa-solid fa-circle-xmark' }],
  ['toast-warning', { typeClass: 'warning', icon: 'fa-solid fa-triangle-exclamation' }],
  ['toast-info', { typeClass: 'info', icon: 'fa-solid fa-circle-info' }],
]);


@Component({
  selector: 'ng-toastify',
  templateUrl: './ng-toastify.component.html',
  styleUrls: ['./ng-toastify.component.scss']
})
export class NgToastifyComponent {
  toastConfig: NgToastifyConfig;

  @Output() close = new EventEmitter<void>();
  
  constructor(private toastService: NgToastifyService) {

  }
  
  getPositonClasses(): any {
    return {
      [`${this.toastConfig.verticalPosition}-${this.toastConfig.horizontalPosition}`]: true
    };
  }

  getToastTypeClasses(): any {
    return {
      [`${toastTypeMap.get(this.toastConfig.type).typeClass}`]: true
    };
  }

  getToastIconClasses(): any {
    return {
      [`${toastTypeMap.get(this.toastConfig.type).icon}`]: true
    };
  }
  closeToast(): void {
    this.close.emit();
  }

}
