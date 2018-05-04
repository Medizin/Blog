import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { Post } from '../../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getData();
    console.log(this.postService.selectedPost);
  }

}
