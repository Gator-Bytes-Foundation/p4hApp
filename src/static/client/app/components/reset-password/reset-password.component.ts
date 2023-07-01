import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const { email } = this.resetPasswordForm.value;
      this.http.post('/api/reset-password', { email }).subscribe(
        (response) => {
          // Handle response here
          // For example, show a success message to the user
        },
        (error) => {
          this.errorMessage = 'Error resetting password.';
        }
      );
    } else {
      this.errorMessage = 'Please enter a valid email address.';
    }
  }

  get email() {
    return this.resetPasswordForm.get('email');
  }
}
