
import { Component } from '@angular/core';

@Component({
    selector: 'app-top-overlay',
    standalone: true,
    templateUrl: './top-overlay.component.html',
    styleUrl: './top-overlay.component.css'
})

export class TopOverlayComponent {
    employee = {
        name: 'John Doe',
        status: 'Active',
        details: [
            { label: 'Employee ID', value: 'EMP-0024' },
            { label: 'Designation', value: 'Software Engineer' },
            { label: 'Department', value: 'Engineering & Technology' },
            { label: 'Email', value: 'john.doe@insystem.in' },
            { label: 'Location', value: 'Indore, India' }
        ]
    };
}
