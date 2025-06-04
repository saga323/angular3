import { Injectable } from '@angular/core';
import { IPost } from '../../models/ipost.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: IPost[] = [
    {
      id: 1,
      userName: 'Mohamed',
      userImage: '../assets/2ae978add7a2a92cb00c08e84b1fab40.jpg',
      postImage: 'assets/2ae978add7a2a92cb00c08e84b1fab40.jpg',
      postDescription: 'My first post',
      liked: false
    },
    {
      id: 2,
      userName: 'Mohamed',
      userImage: '../assets/2ae978add7a2a92cb00c08e84b1fab40.jpg',
      postImage: 'assets/2ae978add7a2a92cb00c08e84b1fab40.jpg',
      postDescription: 'My first post',
      liked: false
    },
    {
      id: 3,
      userName: 'Mohamed',
      userImage: '../assets/bfbe8688c29e1e2f91b78abb1bc1b089.jpg',
      postImage: 'assets/bfbe8688c29e1e2f91b78abb1bc1b089.jpg',
      postDescription: 'My first post',
      liked: false
    },
    {
      id: 4,
      userName: 'Mohamed',
      userImage: '../assets/ca01f09705a5c4a83ac559ff650ebdce.jpg',
      postImage: 'assets/ca01f09705a5c4a83ac559ff650ebdce.jpg',
      postDescription: 'My first post',
      liked: false
    }
  ];

  //
  postForm = new FormGroup({
    userName: new FormControl<string>('', Validators.required),
    userImage: new FormControl<string>('', Validators.required),
    postDescription: new FormControl<string>('', Validators.required),
    postImage: new FormControl<string>('', Validators.required),
  });

  isPostFormShowen = false;

  onsumbit(){
    console.log(this.postForm.value);

  }
  addNewPost() {
    if (this.postForm.valid) {
      const userName = this.postForm.value.userName ?? '';
      const userImage = this.postForm.value.userImage ?? '';
      const postDescription = this.postForm.value.postDescription ?? '';
      const postImage = this.postForm.value.postImage ?? '';

      this.posts.push( {
     id: (this.posts[this.posts.length - 1]?.id ?? 0) + 1,
        userName,
        userImage,
        postDescription,
        postImage,
      liked: false
      });
      this.isPostFormShowen=false;
    }

  }
//DELET
delete(id: number){
  this.posts=this.posts.filter((posts)=>posts.id !==id)

}

getPosts(): IPost[] {
  return this.posts;
}
}
