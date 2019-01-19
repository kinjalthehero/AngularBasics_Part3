import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private svc: TestService, private http: HttpClient) {
  
    svc.printToConsole("Using service!");

  }

  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/kinjalthehero');
    obs.subscribe((response) => console.log(response));  
  }
}
