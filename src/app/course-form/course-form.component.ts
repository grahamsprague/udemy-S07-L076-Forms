import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  categories = [
    { id: 1, name: 'category 1' },
    { id: 2, name: 'category 2' },
    { id: 3, name: 'category 3' },
  ];

  log(x) {
    console.log(x);
  }

  onSubmit(x) {
    console.log(x);
  }

}
