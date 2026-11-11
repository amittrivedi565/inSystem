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
        { field: 'designation', header: 'Designation' },
        { field: 'project', header: 'Allocated Project' },
    ],

    tRows: [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@insystem.in',
            department: 'Engineering',
            designation: 'Software Engineer',
            project: 'Indore Smart City Infrastructure'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@insystem.in',
            department: 'Human Resources',
            designation: 'HR Manager',
            project: 'Bhopal Ring Road Development'
        },
        {
            id: 3,
            name: 'Robert Wilson',
            email: 'robert@insystem.in',
            department: 'Finance',
            designation: 'Accountant',
            project: 'Indore–Ujjain Highway Expansion'
        },
        {
            id: 4,
            name: 'Emily Johnson',
            email: 'emily@insystem.in',
            department: 'Operations',
            designation: 'Project Manager',
            project: 'Narmada Water Supply Project'
        },
        {
            id: 5,
            name: 'Michael Brown',
            email: 'michael@insystem.in',
            department: 'Engineering',
            designation: 'Senior Developer',
            project: 'Indore Smart City Infrastructure'
        },
        {
            id: 6,
            name: 'Sarah Williams',
            email: 'sarah@insystem.in',
            department: 'Administration',
            designation: 'Administrator',
            project: 'Bhopal Ring Road Development'
        }
    ]
};
}