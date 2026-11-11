import { Component } from '@angular/core';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { InsertBarComponent } from '../../component/insert-bar/insert.component';
import { StatsComponent } from '../../component/stats/stats.component';
import { TableComponent } from '../../component/table/table.component';
import { DFormComponent } from '../../component/d-form/d-form.component';

@Component({
  standalone: true,
  imports: [SidebarComponent, InsertBarComponent, StatsComponent, TableComponent, DFormComponent],
  selector: 'app-employees',
  templateUrl: './employees.html',
})
export class Employees {}