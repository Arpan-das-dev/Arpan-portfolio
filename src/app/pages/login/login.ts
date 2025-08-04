import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  signupForm: FormGroup;

  constructor(private builder: FormBuilder, private router: Router) {
    this.signupForm = this.builder.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z ]+$')
      ]]
    });
  }

  gotoHomePage() {
    if (this.signupForm.valid) {
      const name = this.signupForm.get('name')?.value.trim();
      sessionStorage.setItem('username', name);
      console.log('Saved name:', name);
      this.router.navigate(['/home']);
    }
  }

  exitPage() {
    this.signupForm.reset();
    window.location.href = 'https://www.google.com';
  }
}
