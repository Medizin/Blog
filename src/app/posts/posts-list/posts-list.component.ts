import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../post.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: Post[];
  constructor(private postService: PostService, private toastr: ToastrService) { }

  ngOnInit() {
    const x = this.postService.getData();
    x.snapshotChanges().subscribe(item => {
      this.postList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.postList.push(y as Post);
      });
    });
  }

  onEdit(post: Post) {
    this.postService.selectedPost = Object.assign({}, post);
    console.log(this.postService.selectedPost);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this post ?')) {
      this.postService.deletePost(key);
      this.toastr.warning('Deleted Successfully', 'Post Deleted');
    }
  }

}
