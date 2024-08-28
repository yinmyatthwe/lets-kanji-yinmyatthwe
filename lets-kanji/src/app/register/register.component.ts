import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  errorMessage: string | null = null;
  users:any[]=[];

  constructor(private userService: UserService, private router: Router,private formBuilder: FormBuilder) { 
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  } 

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  
  onSubmit() {
    if (this.registerForm.valid) {
      
    //   console.log('Form Submitted!', this.registerForm.value);
    // } else {
    //   console.log('Form Not Valid');
    // }
    //console.log(this.registerForm.value);
    this.submitted = true;
  
    if (this.registerForm.invalid) {
      return;
    }
  
    this.userService.register(this.registerForm.value).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration error', error);
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      }
    );
  }
}
}
