import { Client, TodoTask } from '../../api/api-client';
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
    tasks: TodoTask[] = [];
    newTaskName: string = '';
  
    constructor(private todoService: Client) {}
  
    ngOnInit(): void {
      this.getTasks();
    }
  
    getTasks(): void {
      this.todoService.getAllTasks().subscribe((tasks) => (this.tasks = tasks));
    }
  
    addTask(): void {
      if (!this.newTaskName.trim()) return;
      const newTask: TodoTask = {
          name: this.newTaskName
      };
      this.todoService.createTask(newTask).subscribe(() => {
        this.getTasks(); // Refresh the list
        this.newTaskName = ''; // Clear the input
      });
    }
  
    completeTask(id: number): void {
      this.todoService.completeTask(id).subscribe(() => this.getTasks());
    }
  
    deleteTask(id: number): void {
      this.todoService.deleteTask(id).subscribe(() => this.getTasks());
    }
  }
