import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Comment } from './comment';

@Injectable()
export class CommentService {
  commentList: AngularFireList<any>;
  selectedComment: Comment = new Comment;
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.commentList = this.firebase.list('comments');
    return this.commentList;
  }

  insertComment(comment: Comment) {
    this.commentList.push({
      name: comment.name,
      message: comment.message
    });
  }

  updateComment(comment: Comment) {
   this.commentList.update(comment.$key, {
     name: comment.name,
     message: comment.message
   });
  }

  deleteComment($key: string) {
    this.commentList.remove($key);
  }
}
