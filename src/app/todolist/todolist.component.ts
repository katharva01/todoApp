import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos : Todo[];

  constructor() { 
    if(localStorage.getItem("todos")==null){
      this.todos = [];
    }else{
      this.todos=JSON.parse(localStorage.getItem("todos"))
    }
     
  }

  ngOnInit(): void {
  }

  deleteTodoEle(todo : Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  todoAdd(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
