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
  title = 'firstproject';

  array= ['magas', 'adam', 'test'];

  style = "color: blue";

  valueInp='';

  name="";
  age='';

  validateError = ''

  addUser() {
   if (this.name && this.age) {
    const newUser = {
      id: Date.now(),
      name: this.name,
      avatar: 'https://help.hotdocs.com/advance/core/current/assets/icons/Blue/Manage_Users.png',
      age: this.age,
    };
    this.users.push(newUser);
    this.name = ""
    this.age = ""
  }else {
    this.validateError = "Данные не запалнены!"
   }
   } ;

   removeUser = (id: number) => {
    this.users = this.users.filter((user: any) => user.id != id)
   }
    

  users: any = [
    { id: 1, name: "Adam", avatar: "https://i.ytimg.com/vi/ymhAGz_94cs/maxresdefault.jpg", age: 23 },
    { id: 2, name: "Eva", avatar: "https://a.d-cd.net/B29TjC7TasOvwa83tSoNccP1-Wk-1920.jpg", age: 22 },
    { id: 3, name: "John", avatar: "https://avatars.mds.yandex.net/get-autoru-vos/2155444/b94b7ff3c37ce126b6328b49aa6368b1/1200x900", age: 25 },
    { id: 4, name: "Alice", avatar: "https://i.pinimg.com/736x/18/1c/d0/181cd0570f42e15ed72707c2e4eecbe4.jpg", age: 24 },
    { id: 5, name: "Bob", avatar: "https://vmeste-rf.tv/upload/resize_cache/iblock/e10/1040_585_2/e10cfc7c06c2e7eaaa1527d8fc5fc233.jpg", age: 26 },
    { id: 6, name: "Charlie", avatar: "https://cdn.culture.ru/images/c180d572-f6a2-5ac4-a78c-4b4f96e82604", age: 27 },
    { id: 7, name: "David", avatar: "https://sun9-33.userapi.com/impg/UTfBPdIehlFgv42_IbkXAPkWejqCTtrBER5fYg/_WPgwSY7D8s.jpg?size=1280x720&quality=96&sign=55820421567fc53b13bec70586aa578a&c_uniq_tag=2TvxOWVQSMMc-Le3dZo3XGneQpau_vc00TLXwVJ08A4&type=album", age: 28 },

  ]
}

