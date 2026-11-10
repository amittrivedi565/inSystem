import { Component } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { InsertBarComponent } from '../../component/insert-bar/insert.component';
import { StatsComponent } from '../../component/stats/stats.component';
import { TableComponent } from '../../component/table/table.component';

@Component({
  standalone: true,
  imports: [NavComponent, SidebarComponent, InsertBarComponent, StatsComponent, TableComponent],
  selector: 'app-employees',
  templateUrl: './employees.html',
})
export class Employees {}