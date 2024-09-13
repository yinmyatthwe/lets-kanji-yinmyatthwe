import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login(this.loginForm.value).subscribe(
      response => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.jwt); 
        localStorage.setItem('userId', response.user.id); 
        this.router.navigate(['/main']); 
      },
      error => {
        console.error('Login error', error);
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message; 
        } else {
          this.errorMessage = 'Login failed. Please check your credentials and try again.';
        }
      }
    );
  }
}
