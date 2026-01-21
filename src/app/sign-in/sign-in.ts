import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true, // הגדרה כרכיב עצמאי
  imports: [CommonModule, ReactiveFormsModule], // ייבוא המודולים ישירות לכאן
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // פונקציית עזר לקיצור הגישה לשדות
  get f() { return this.signInForm.controls; }

  onSignIn() {
    if (this.signInForm.valid) {
      console.log('נתוני התחברות:', this.signInForm.value);
    }
  }
}