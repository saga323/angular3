import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPost } from '../../../models/ipost.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent {
  @Output() postAdded = new EventEmitter<IPost>();
  postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      userName: [''],
      userImage: [''],
      postDescription: [''],
      postImage: ['']
    });
  }

  onsumbit() {
    const post: IPost = {
      id: Date.now(),
      userName: this.postForm.value.userName,
      userImage: this.postForm.value.userImage,
      postDescription: this.postForm.value.postDescription,
      postImage: this.postForm.value.postImage,
      liked: false
    };

    this.postAdded.emit(post);
    this.postForm.reset();
  }
}
