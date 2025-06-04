import { Component, inject } from '@angular/core';
import { UserDataService } from "../../../app-routing.module";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userDataservice =inject(UserDataService);
}
