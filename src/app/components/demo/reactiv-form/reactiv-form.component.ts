import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiv-form',
  templateUrl: './reactiv-form.component.html',
  styleUrl: './reactiv-form.component.css'
})
export class ReactivFormComponent {

  loginForm=new FormGroup({
    'email':new FormControl('',[
      Validators.required,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)

    ]),
    'password':new FormControl('',[

      Validators.required
    ]),
  })
  user:any='';
  onsubmit(){
    // console.log(this.loginForm.value);
    // console.log(this.loginForm.controls.email.value);
    // console.log(this.loginForm.controls.email.touched);
    //  console.log(this.log[inForm.controls.email.dirty);'
    if(this.loginForm.valid){
      this.user=this.loginForm.value;

    }else{
      this.loginForm.markAllAsTouched();
    }

  }

  onRest(){
    this.loginForm.reset();
  }
  // get isEmailValid(){
  //   return this. loginForm.controls.email.errors?.['required']&& this. loginForm.controls.email.touched
  // }
    constructorValidation(contorller:AbstractControl,validationType:'requird '|'pattern'){
    return contorller.errors?.['required']&& contorller.touched
  }

    get isEmailmatchpattern(){
    return this. loginForm.controls.email.errors?.['pattern']&& this. loginForm.controls.email.touched
  }
}
