import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
  imports: [NgIf, FormsModule]
})
export class LandingPageComponent {
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
    if (
      this.registerUsername &&
      this.registerEmail &&
      this.registerPassword &&
      this.registerPassword === this.registerConfirmPassword
    ) {
      // Simulate successful registration
      console.log('Registration Successful:', this.registerEmail);
      this.router.navigate(['/dashboard']);
    }
  }
}
