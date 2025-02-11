import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for template-driven forms
import { CommonModule } from '@angular/common';  // Import CommonModule for ngIf

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Add CommonModule here
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  // Boolean flags for showing login/register forms
  showLogin = false;
  showRegister = false;

  // Login Form properties
  loginEmail: string = '';
  loginPassword: string = '';

  // Register Form properties
  registerUsername: string = '';
  registerEmail: string = '';
  registerPassword: string = '';
  registerConfirmPassword: string = '';

  // Toggle login form visibility
  showLoginForm() {
    this.showLogin = true;
    this.showRegister = false;
  }

  // Toggle register form visibility
  showRegisterForm() {
    this.showRegister = true;
    this.showLogin = false;
  }

  // Submit logic for Login
  onLoginSubmit() {
    console.log('Login submitted');
    // You can add your login logic here
  }

  // Submit logic for Register
  onRegisterSubmit() {
    console.log('Register submitted');
    // You can add your register logic here
  }
}
