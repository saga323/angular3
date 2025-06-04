import { Component, EventEmitter, Input,Output } from '@angular/core';
@Component({
  selector: 'app-chail',
  templateUrl: './chail.component.html',
  styleUrl: './chail.component.css'
})
export class ChailComponent {
  @Input() message = "";
  @Output() say= new EventEmitter<string>()
}
// onclick(){
//   this.sayHelloParent.emit("hello dad");
// }

