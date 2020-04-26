import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService]
})
export class AppComponent {

  name: string ='gfh';
  
  newTodo: Todo = new Todo();
  title = 'anggualrProjectN'
  
  private todoDataService: TodoDataService;

  constructor(todoDataService: TodoDataService) {
    this.todoDataService = todoDataService;
  }

  // Service is now available as this.todoDataService
  
  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    //this.name = name;
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
