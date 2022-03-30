import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  name:string;
  id:number;
  desc:string;

  
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("click add");
    const todo = {
      name:this.name,
      id : this.id,
      desc: this.desc,
    };
    this.todoAdd.emit(todo);
  }

}
