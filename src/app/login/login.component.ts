import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginService } from './login.service';
import { AuthService } from 'app/auth/auth.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {


  // Pubblic variables
  loginParams = { mail: "", password: "" };

  // Private variables
  private _destroyed$ = new Subject();
  constructor(private router: Router, private loginService: LoginService, private authService: AuthService) { }


  // hooks

  ngOnInit() {
    if (this.authService.isAuthenticated())
      this.router.navigate(['dashboard']);
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  // public methods
  public login(): void {
    console.log(this.loginParams)
    this.loginService.login(this.loginParams)
      .pipe(takeUntil(this._destroyed$))
      .subscribe(
        (res: { token: string }) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['dashboard']);
        },
        err => this._showNotification('bottom', 'right', err.error.message))
    // this.router.navigate(["dashboard"]);
  }

  // private methods
  private _showNotification(from: string, align: string, message: any) {
    $.notify({
      icon: "notifications",
      message: message

    }, {
        type: 'danger',
        timer: 4000,
        placement: {
          from: from,
          align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }
}
