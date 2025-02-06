import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
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
    if (
      this.registerUsername &&
      this.registerEmail &&
      this.registerPassword &&
      this.registerPassword === this.registerConfirmPassword
    ) {
      console.log('Register Submitted', {
        username: this.registerUsername,
        email: this.registerEmail,
        password: this.registerPassword,
      });
      // Implement register logic here
    }
  }
}
