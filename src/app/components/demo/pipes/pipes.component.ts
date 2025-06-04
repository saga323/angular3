import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  todayDate=new Date();
  trim(value:string,len:number){
    return value.slice(0,len)+'...'
  }

}
