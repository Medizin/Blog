import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../comment.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  constructor(private commentService: CommentService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.commentService.getData();
    this.resetForm();
  }

  onSubmit(commentForm: NgForm) {
    if (commentForm.value.$key == null) {
      this.commentService.insertComment(commentForm.value);
    } else {
      this.commentService.updateComment(commentForm.value);
    }
    this.resetForm(commentForm);
    this.toastr.success('Submitted Successfully', 'Comment Added');
  }

  resetForm(commentForm?: NgForm) {
    if (commentForm != null) {
      commentForm.reset();
    }
    this.commentService.selectedComment = {
      $key: null,
      name: '',
      message: '',
    };
  }
}
