import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  authService: AuthService = inject(AuthService)
  router = inject(Router)

	form: FormGroup<{username: FormControl, password: FormControl}> = new FormGroup({
		username: new FormControl(null, Validators.required),
		password: new FormControl(null, Validators.required)
	})

  onSubmit(){
    console.log(this.form.value)
    if(this.form.valid){
      //@ts-ignore
      this.authService.login(this.form.value).subscribe(resp => {
        this.router.navigate([''])
        console.log(resp)
      })
    }
  }
}
