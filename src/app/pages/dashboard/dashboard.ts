import { Component } from '@angular/core';
import { FormComponent, FormField } from '../../component/form/form.component';
import { PageInfoComponent } from '../../component/page-info/page-info.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [FormComponent, PageInfoComponent],
    templateUrl: './dashboard.html',
})
export class Dashboard {

    employeeFields: FormField[] = [
        {
            name: "employeeName",
            label: "Name",
            type: "text",
            placeholder: "",
            required: true
        },
        {
            name: "email",
            label: "Email Address",
            type: "email",
            placeholder: "",
            required: true
        },
        {
            name: "phone",
            label: "Phone Number",
            type: "tel",
            placeholder: ""
        }
    ];

    saveEmployee(data: Record<string, any>) {
        console.log(data);
    }
}