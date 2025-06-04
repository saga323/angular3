import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private _users: string[] = ['saga'];


  deleteUserForm = new FormGroup({
    'deleteUser': new FormControl('')
  });

  addUserForm = new FormGroup({
    'addUser': new FormControl('')
  });




  onDeleteUser() {
    if(this.deleteUserForm.value.deleteUser)
    {

            this._users=this._users.filter((user) => user !==this.deleteUserForm.value.deleteUser);
            this.deleteUserForm.reset();
    }
  }
    onAddUser() {
    if(this.addUserForm.value.addUser)
    {
            this._users.push(this.addUserForm.value.addUser);
            this.addUserForm.reset();

    }
  }

  get users(){
    return this._users;
  }
}
