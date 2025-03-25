import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';

  // State
  todos: string[] = [];
  todoText = '';

  // Lifecycle
  ngOnInit() {
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos as string) || [];    
  }

  // Events
  addTodos() {
  this.todos.push(this.todoText);
  localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
