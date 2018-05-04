import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
  providers: [PostService]
})
export class PostFormComponent implements OnInit {
  formStatus = true;
  // date1 = new Date;
  // dateText = this.date1.toString();


  constructor(private postService: PostService, private toastr: ToastrService) { }

  ngOnInit() {
    this.postService.getData();
    this.resetForm();
    // console.log(this.dateText);
  }

  togglePostForm() {
    this.formStatus = !this.formStatus;
    this.resetForm();
  }

  onSubmit(postForm: NgForm) {
    if (postForm.value.$key == null) {
      this.postService.insertPost(postForm.value);
    } else {
      this.postService.updatePost(postForm.value);
    }
    this.resetForm(postForm);
    this.togglePostForm();
    this.toastr.success('Submitted Successfully', 'Post Added');
  }

  resetForm(postForm?: NgForm) {
    if (postForm != null) {
      postForm.reset();
    }
    this.postService.selectedPost = {
      $key: null,
      title: '',
      description: '',
      // date: ''
    };
  }

  // getDate() {
  //   let today = new Date();
  //   let dd = today.getDate();
  //   let mm = today.getMonth() + 1;
  //   const yyyy = today.getFullYear();
  //
  //   if (dd < 10) {
  //     dd = '0' + dd;
  //   }
  //
  //   if (mm < 10) {
  //     mm = '0' + mm;
  //   }
  //
  //   today = mm + '.' + dd + '.' + yyyy;
  //   return today;
  // }

}
