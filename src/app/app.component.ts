import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedApp: boolean;

  constructor(private autoService: AuthService) {

  }

  ngOnInit(): void {
    this.autoService.isLogged().subscribe(suc => {
      this.isLoggedApp = suc;
    })
  }

  logOut() {
    this.autoService.logOut();
  }
  title = 'basic';
}
