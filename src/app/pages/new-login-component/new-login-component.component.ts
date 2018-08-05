
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-login',
  templateUrl: './new-login-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NewLoginComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;

  constructor(protected router: Router) {
  }

  login(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    
    if (this.user.email == "demo" && this.user.password == "demo18") {
      this.router.navigateByUrl('pages/dashboard');
    }
    else {
      this.errors = [];
      this.errors.push("Benutzername oder Passwort falsch!");
    }
  }
}
