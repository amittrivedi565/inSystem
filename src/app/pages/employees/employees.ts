import { Component } from '@angular/core';
import { CommandBarComponent } from '../../component/command-bar/command-bar.component';
import { PageInfoComponent } from '../../component/page-info/page-info.component';
import { NavComponent } from '../../component/nav/nav.component';
import { TableComponent } from '../../component/table/table.component';

@Component({
  imports: [CommandBarComponent, PageInfoComponent, NavComponent, TableComponent],
  selector: 'app-employees',
  templateUrl: './employees.html',
})
export class Employees {
  columns = [
    { field: 'ID', header: 'ID'},
    { field: 'name', header: 'Name'},
    { field: 'project', header: 'Allocated To'},
    { field: 'status', header: 'Status'}
];
}
