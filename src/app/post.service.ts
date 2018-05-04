import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Post } from './post';

@Injectable()
export class PostService {
  postList: AngularFireList<any>;
  selectedPost: Post = new Post;
  // date: object = new Date;
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.postList = this.firebase.list('posts');
    return this.postList;
  }

  insertPost(post: Post) {
    this.postList.push({
      title: post.title,
      description: post.description/*,
      date: post.date*/
    });
  }

  updatePost(post: Post) {
    this.postList.update(post.$key, {
      title: post.title,
      description: post.description/*,
      date: post.date*/
    });
  }

  deletePost($key: string) {
    this.postList.remove($key);
  }

}
