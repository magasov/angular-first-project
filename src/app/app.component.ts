import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name="";
  number='';
  email='';
  date='';

  validateError = ''

  addUser() {
   if (this.name) {
    const newUser = {
      id: Date.now(),
      name: this.name,
      number: this.number,
      email: this.email,
      date: this.date,
    };
    this.users.push(newUser);
    this.name = ""
    this.number = ""
    this.email = ""
    this.date = ""

  }else {
    this.validateError = "Данные не запалнены!"
   }
   } ;

   removeUser = (id: number) => {
    this.users = this.users.filter((user: any) => user.id != id)
   }
    

  users: any = [
    { id: 1, name: "Adam" },
    

  ]
}

