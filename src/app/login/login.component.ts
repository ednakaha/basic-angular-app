import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private autoService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }


  login(emailHtml, passwordHtml) {
    this.autoService.Login(emailHtml.value, passwordHtml.value)
      .subscribe((successRes) => {
        console.log(successRes);
        this.router.navigate(['member']);
      }, (errorRes) => {
        console.log(errorRes);
        emailHtml.value = passwordHtml.value = '';
      })


  }
}
