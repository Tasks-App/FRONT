import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DefaultService, TaskInput } from '../../api-client';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from '../../shared/title/title.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-set-task',
  standalone: true,
  imports: [TitleComponent, MatFormFieldModule, MatInputModule, MatCheckboxModule, FormsModule, NgIf],
  templateUrl: './set-task.component.html',
  styleUrls: ['./set-task.component.scss']
})
export class SetTaskComponent implements OnInit {
  task: TaskInput = { label: '', description: '', completed: false };
  taskId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: DefaultService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.taskId) {
      this.apiService.tasksIdGet(this.taskId).subscribe({
        next: (data) => (this.task = { ...data }),
        error: (err) => console.error('Error fetching task:', err)
      });
    }
  }

  saveTask(): void {
    if (this.taskId) {
      // Editar tarea
      this.apiService.tasksIdPatch(this.taskId, { completed: this.task.completed }).subscribe({
        next: () => this.router.navigate(['/tasks']),
        error: (err) => console.error('Error updating task:', err)
      });
    } else {
      // Crear nueva tarea
      this.apiService.tasksPost(this.task).subscribe({
        next: () => this.router.navigate(['/tasks']),
        error: (err) => console.error('Error creating task:', err)
      });
    }
  }
}