
import { Component } from '@angular/core';
export interface IPost {
  userName: string;
  userImage: string;
  postDescription: string;
  postImage: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: IPost[] = [

  ];

  ispostFormShown = false;
}
