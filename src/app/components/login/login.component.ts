import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  loginData: any;
  errorMessage: string | undefined;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private fb: UntypedFormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    this.loginData = this.loginForm.value;
  }
}
