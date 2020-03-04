import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../core/user/user.service';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'lpr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [ null, Validators.required ],
      password: [ null, Validators.required ]
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      this.username.markAsTouched();
      this.password.markAsTouched();
      return;
    }

    this.loading = true;
    this.authenticationService.setBasicAuthToken(this.username.value, this.password.value);
    this.userService.me().subscribe(() => {
      this.router.navigate([ '' ]);
    }, () => {
      this.loading = false;

      this.cd.markForCheck();
    });
  }

  get username() { return this.form.controls.username; }
  get password() { return this.form.controls.password; }

}
