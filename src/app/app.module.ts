import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { CommentsComponent } from './comments/comments.component';
import { PostListComponent } from './posts/posts-list/posts-list.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostsComponent } from './posts/posts.component';
import { CommentListComponent } from './comments/comments-list/comments-list.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';

import { environment } from '../environments/environment';
import { PostService } from './post.service';
import { CommentService } from './comment.service';




@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    CommentsComponent,
    PostListComponent,
    PostFormComponent,
    PostsComponent,
    CommentListComponent,
    CommentFormComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
