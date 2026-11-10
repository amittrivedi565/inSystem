import { Component, input } from '@angular/core';

@Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './table.component.html',
})
export class TableComponent {
    tableData = {
        tHead: [
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'Email' },
            { field: 'department', header: 'Department' },
            { field: 'designation', header: 'Designation' },
            { field: 'status', header: 'Status' }
        ],

        tRows: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john.doe@insystem.in',
                department: 'Engineering',
                designation: 'Software Engineer',
                status: 'Active'
            },
            {
                id: 2,
                name: 'Jane Smith',
                email: 'jane.smith@insystem.in',
                department: 'Human Resources',
                designation: 'HR Manager',
                status: 'Active'
            },
            {
                id: 3,
                name: 'Robert Wilson',
                email: 'robert@insystem.in',
                department: 'Finance',
                designation: 'Accountant',
                status: 'Inactive'
            },
            {
                id: 4,
                name: 'Emily Johnson',
                email: 'emily@insystem.in',
                department: 'Operations',
                designation: 'Project Manager',
                status: 'Active'
            },
            {
                id: 5,
                name: 'Michael Brown',
                email: 'michael@insystem.in',
                department: 'Engineering',
                designation: 'Senior Developer',
                status: 'Active'
            },
            {
                id: 6,
                name: 'Sarah Williams',
                email: 'sarah@insystem.in',
                department: 'Administration',
                designation: 'Administrator',
                status: 'Inactive'
            }
        ]
    };
}