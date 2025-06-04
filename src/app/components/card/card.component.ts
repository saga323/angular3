import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../models/ipost.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  posts: IPost[] = [];
  isFormVisible = false;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }

  toggleLike(post: IPost): void {
    post.liked = !post.liked;
  }

  showForm(): void {
    this.isFormVisible = true;
  }

  handlePostAdded(newPost: IPost) {
    this.posts.push(newPost);
    this.isFormVisible = false;
  }

  deletePost(id: number): void {
    this.postsService.delete(id);
    this.posts = this.postsService.getPosts();
  }
}
