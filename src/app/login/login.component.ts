import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { LoginInterface } from '../models/login.interface';
import { Router } from '@angular/router';
import { ResponseInterface } from '../models/response.interface';
import { CookieService } from 'ngx-cookie-service/public-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    correo: new FormControl('', Validators.required),
    clave: new FormControl('', Validators.required)
  })
  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void { }

  onLogin(form: LoginInterface) {
    this.api.loginByEmail(form).subscribe(data => {
      let dataResponse: ResponseInterface = data;
      if (dataResponse.status == 'ok') {
        localStorage.setItem('token', dataResponse.result.token);
        this.router.navigate(['/productos']);
      }
    })
  }
}
