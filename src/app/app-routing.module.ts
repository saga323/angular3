import { Injectable, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@Injectable({
  providedIn: 'root'
})

export class UserDataService {
  private _users: string[] = ['saga'];


  addNweUser(newUser: string) {
    this._users.push(newUser);
  }
  deletUser(userName: string) {
    this._users = this.users.filter((user) => user !== userName);
  }

  get users() {
    return this._users;
  }


}
