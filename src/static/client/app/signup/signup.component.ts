import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
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
    this.signupForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { username, password, email, fname, lname } = this.signupForm.value;
      console.log(this.signupForm.value);
      this.http.post('http://127.0.0.1:5000/api/signup', this.signupForm.value, { headers: { 'Content-Type': 'application/json' } })
        .subscribe(
          (response) => {
            // Handle response here
            this.router.navigate(['/login']);
          },
          (error) => {
            this.errorMessage = 'Error signing up.';
          }
        );
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  get fname(){
    return this.signupForm.get('fname');
  }

  get lname(){
    return this.signupForm.get('lname');
  }

  get username() {
    return this.signupForm.get('username');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }
}