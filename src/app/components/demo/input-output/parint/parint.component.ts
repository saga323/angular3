import { Component } from '@angular/core';

@Component({
  selector: 'app-parint',
  templateUrl: './parint.component.html',
  styleUrl: './parint.component.css'
})
export class ParintComponent {
  messagefromparent="Hello My chiled";
  messagefromchild="";

  mychiled(message:string){
    this.messagefromchild=message;
    console.log(message);
  }

}
