import { Component, OnInit } from '@angular/core';

interface Student {
  id: number;
  fName: string;
  lName: string;
  score: number;
  gender: string;
  course: string;
}

@Component({
  selector: 'app-forchatgpt',
  templateUrl: './forchatgpt.component.html',
  styleUrls: ['./forchatgpt.component.css']
})
export class ForchatgptComponent implements OnInit {

  courses: string[] = ['Java', 'DevOps', 'Python'];

  students: Student[] = [
    { id: 1, fName: 'long', lName: 'vibol', score: 20, gender: 'Male', course: 'Java' },
    { id: 2, fName: 'Nou', lName: 'dany', score: 30, gender: 'Female', course: 'Python' },
    { id: 3, fName: 'long', lName: 'braly', score: 50, gender: 'Male', course: 'DevOps' }
  ];

  constructor() {}

  ngOnInit(): void {}

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
  }

  addStudent(): void {
    const newStudent: Student = {
      id: this.students.length + 1,
      fName: 'Sok',
      lName: 'Dara',
      score: 80,
      gender: 'Male',
      course: 'Angular'
    };

    this.students.push(newStudent);
  }

  trackByStudentId(index: number, student: Student): number {
    return student.id;
  }

  getResult(score: number): string {
    if (score >= 50) {
      return 'Pass';
    } else {
      return 'Fail';
    }
  }
}