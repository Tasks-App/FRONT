import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { DefaultService, Task } from '../../api-client';
import { Observable } from 'rxjs';
import { NgClass } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [TitleComponent, MatTableModule, MatSortModule, NgClass],
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss']
})
export class ViewTasksComponent implements OnInit {
  tasks: Task[] = [];
  displayedColumns: string[] = ['id', 'label', 'description', 'completed'];
  dataSource = new MatTableDataSource<Task>(this.tasks);
  title: string = '';

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private route: ActivatedRoute, private apiService: DefaultService, private router: Router) {}

  ngOnInit(): void {
    // Détecter le type de vue (all ou pending) à partir de l'URL
    this.route.url.subscribe((url) => {
      const path = url[url.length - 1]?.path;
      if (path === 'tasks') {
        this.title = 'Toutes les Tâches';
        this.loadTasks(this.apiService.tasksGet());
      } else if (path === 'pending') {
        this.title = 'Tâches en Attente';
        this.loadTasks(this.apiService.tasksPendingGet());
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort; // Associe le tri à la table
  }

  loadTasks(observable: Observable<Array<Task>>): void {
    observable.subscribe({
      next: (data: Task[]) => {
        this.tasks = data;
        this.dataSource.data = this.tasks; // Met à jour le dataSource
      },
      error: (error) => {
        console.error('Error fetching tasks:', error);
      }
    });
  }

  onRowClick(task: Task): void {
    this.router.navigate(['/tasks/edit', task.id]); // Navega a la pantalla de edición con el ID de la tarea
  }
}