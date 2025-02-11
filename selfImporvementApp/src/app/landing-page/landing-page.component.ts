import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
=======
>>>>>>> parent of c20502b (Did the landing page)
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
<<<<<<< HEAD
=======
  standalone: true,
  imports: [FormsModule],
>>>>>>> parent of c20502b (Did the landing page)
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
  imports: [NgIf, FormsModule]
})
export class LandingPageComponent {
<<<<<<< HEAD
  showLogin = false;
  showRegister = false;

  loginEmail = '';
  loginPassword = '';

  registerUsername = '';
  registerEmail = '';
  registerPassword = '';
  registerConfirmPassword = '';

  constructor(private router: Router) {}

  showLoginForm() {
    this.showLogin = true;
    this.showRegister = false;
  }

  showRegisterForm() {
    this.showLogin = false;
    this.showRegister = true;
  }

  onLoginSubmit() {
    if (this.loginEmail && this.loginPassword) {
      // Simulate successful login
      console.log('Login Successful:', this.loginEmail);
      this.router.navigate(['/dashboard']);
    }
  }

  onRegisterSubmit() {
=======
  // Variables for Login Form
  loginEmail: string = '';
  loginPassword: string = '';
  loginSubmitted: boolean = false;

  // Variables for Register Form
  registerUsername: string = '';
  registerEmail: string = '';
  registerPassword: string = '';
  registerConfirmPassword: string = '';
  registerSubmitted: boolean = false;

  showLogin: boolean = false;
  showRegister: boolean = false;

  // Login Form submission
  onLoginSubmit() {
    this.loginSubmitted = true;
    if (this.loginEmail && this.loginPassword) {
      console.log('Login Submitted', { email: this.loginEmail, password: this.loginPassword });
      // Implement login logic here
    }
  }

  // Register Form submission
  onRegisterSubmit() {
    this.registerSubmitted = true;
>>>>>>> parent of c20502b (Did the landing page)
    if (
      this.registerUsername &&
      this.registerEmail &&
      this.registerPassword &&
      this.registerPassword === this.registerConfirmPassword
    ) {
<<<<<<< HEAD
      // Simulate successful registration
      console.log('Registration Successful:', this.registerEmail);
      this.router.navigate(['/dashboard']);
=======
      console.log('Register Submitted', {
        username: this.registerUsername,
        email: this.registerEmail,
        password: this.registerPassword,
      });
      // Implement register logic here
>>>>>>> parent of c20502b (Did the landing page)
    }
  }
}
