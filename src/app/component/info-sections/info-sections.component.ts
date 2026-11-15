
import { Component } from '@angular/core';

interface InfoItem {
    label: string;
    value: string;
    col?: string;
    link?: string;
    icon?: string;
}


@Component({
    selector: 'app-info-sections',
    standalone: true,
    templateUrl: './info-sections.component.html',
    styleUrl: './info-sections.component.css'
})

export class InfoSectionsComponent {

    sections: { title: string; items: InfoItem[] }[] = [

        {
            title: 'Basic Information',
            items: [
                { label: 'Full Name', value: 'John Doe' },
                { label: 'Employee ID', value: 'EMP-0024' },
                { label: 'Date of Birth', value: '12 May 1995' },
                { label: 'Gender', value: 'Male' },
                { label: 'Blood Group', value: 'B+' },
                { label: 'Marital Status', value: 'Single' }
            ]
        },

        {
            title: 'Employment Information',
            items: [
                { label: 'Department', value: 'Engineering & Technology' },
                { label: 'Designation', value: 'Software Engineer' },
                { label: 'Employment Type', value: 'Permanent' },
                { label: 'Joining Date', value: '15 Jan 2024' },
                { label: 'Reporting Manager', value: 'Michael Scott' },
                { label: 'Work Location', value: 'Head Office' },
                { label: 'Total Experience', value: '3 Years' },
                { label: 'Employee Status', value: 'Active' }
            ]
        },

        {
            title: 'Contact & Address',
            items: [
                { label: 'Current Address', value: '45/A, Indore, Madhya Pradesh, India', col: 'col-12 col-lg-6' },
                { label: 'Permanent Address', value: 'Indore, Madhya Pradesh, India', col: 'col-12 col-lg-6' },
                { label: 'City', value: 'Indore' },
                { label: 'State', value: 'Madhya Pradesh' },
                { label: 'PIN Code', value: '452016' },
                { label: 'Country', value: 'India' },
                { label: 'Mobile Number', value: '+91 98765 43210' },
                { label: 'Email Address', value: 'john.doe@insystem.in', col: 'col-12 col-lg-6' }
            ]
        },

        {
            title: 'Education & Experience',
            items: [
                { label: 'Highest Qualification', value: 'B.Tech (Computer Science)' },
                { label: 'Specialization', value: 'Software Engineering' },
                { label: 'Total Experience', value: '3 Years' },
                { label: 'Previous Company', value: 'Tech Solutions Pvt. Ltd.' }
            ]
        },

        {
            title: 'Related Documents',
            items: [
                { label: 'Resume / CV', value: 'John_Doe_Resume.pdf', link: '/', icon: 'bi-file-earmark-pdf' },
                { label: 'Identity Proof', value: 'Identity_Proof.pdf', link: '/', icon: 'bi-file-earmark-pdf' },
                { label: 'Education Certificate', value: 'Degree_Certificate.pdf', link: '/', icon: 'bi-file-earmark-pdf' }
            ]
        },

        {
            title: 'Emergency Contact',
            items: [
                { label: 'Contact Person', value: 'Jane Doe' },
                { label: 'Relationship', value: 'Mother' },
                { label: 'Contact Number', value: '+91 98260 12346' }
            ]
        }

    ];

}
