import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password, rememberMe } = this.loginForm.value;
      this.http.post('/api/login', { username, password }).subscribe(
        (response) => {
          // Handle response here
          this.router.navigate(['/home']);
        },
        (error) => {
          this.errorMessage = 'Error logging in.';
        }
      );
    } else {
      this.errorMessage = 'Please enter a valid username and password.';
    }
  }

  onSignup() {
    this.router.navigate(['/signup']);
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
