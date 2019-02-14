import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Our app!';
  username = ''; 
  allowNewUsername = false; 
  usernameStatus = 'No username was created!'; 

  constructor() {
    setTimeout(() => {
      this.allowNewUsername = true; 
    }, 2000); 
  }

  ngOnInit() {
  }
  
  onCreateUsername(){
    this.usernameStatus = 'Username was created! Name is ' + this.username; 
  }

  onUpdateUsername(event: Event){
    this.username = (<HTMLInputElement>event.target).value; 
  }
}
