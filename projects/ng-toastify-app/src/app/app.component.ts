import { Component } from '@angular/core';
import { NgToastifyService } from 'ng-toastify';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private toastService: NgToastifyService) {
  }


  onPrimary(): void { 
    this.toastService.primary('Your changes saved successfully');
  }

  onSecondary(): void { 
    this.toastService.secondary('Your changes saved successfully');
  }

  onAccent(): void { 
    this.toastService.accent('Your changes saved successfully');
  }

  onNeutral(): void { 
    this.toastService.neutral('Your changes saved successfully');
  }

  onSuccess(): void { 
    this.toastService.success('Your changes saved successfully');
  }

  onError(): void {
    this.toastService.error('Error has occured while saving changes',{horizontalPosition:'left',verticalPosition:'top'});
  }

  onWarning(): void {
    this.toastService.warning('Username you have entered is invalid');
  }

  onInfo(): void {
    this.toastService.info('New settings available on your account');
  }
}
