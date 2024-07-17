/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService: AuthService = inject(AuthService);
  router = inject(Router);
  isPasswordVisible = signal<boolean>(false);

  form = new FormGroup<{ username: FormControl; password: FormControl }>({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  changePasswordVisible() {
    this.isPasswordVisible.set(!this.isPasswordVisible());
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      //@ts-expect-error
      this.authService.login(this.form.value).subscribe(resp => {
        this.router.navigate(['']);
        console.log(resp);
      });
    }
  }
}
