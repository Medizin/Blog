import { Component, OnInit } from '@angular/core';
import { Comment } from '../../comment';
import { CommentService } from '../../comment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentListComponent implements OnInit {

  commentList: Comment[];
  constructor(private commentService: CommentService, private toastr: ToastrService) { }

  ngOnInit() {
    const x = this.commentService.getData();
    x.snapshotChanges().subscribe(item => {
      this.commentList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.commentList.push(y as Comment);
      });
    });
  }

  onEdit(comment: Comment) {
    this.commentService.selectedComment = Object.assign(comment);
    console.log(this.commentService.selectedComment);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this comment ?')) {
      this.commentService.deleteComment(key);
      this.toastr.warning('Deleted Successfully', 'Comment Deleted');
    }
  }

}

