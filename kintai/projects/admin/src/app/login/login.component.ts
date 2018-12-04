import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'projects/shared/src/lib/service/auth.service';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  systemId: string;
  email: string;
  password: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private procResultService: ProcResultService
  ) {}

  ngOnInit() {}

  async login() {
    try {
      const result = await this.authService.adminlogin(this.systemId, this.email, this.password);
      if (!result) { throw new Error('Result error'); }
      window.location.href = '/home';
    } catch (e) {
      console.error(e);
      this.procResultService.error('IDかパスワードが間違っています');
    }
  }
}
