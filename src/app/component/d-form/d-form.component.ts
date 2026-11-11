import { Component, input } from "@angular/core";

@Component({
    selector: "app-d-form",
    standalone: true,
    templateUrl: "./d-form.component.html",
})
export class DFormComponent {
    FormTitle = input<string>("Title");
    FormSubTitle = input<string>("Subtitle");

    InputFields = [
    {
        id: 1,
        label: "Full Name",
        type: "text",
        placeholder: "Enter full name",
        required: true
    },
    {
        id: 2,
        label: "Email Address",
        type: "email",
        placeholder: "Enter email address",
        required: true
    },
    {
        id: 3,
        label: "Mobile Number",
        type: "tel",
        placeholder: "Enter mobile number",
        required: true
    },
    {
        id: 4,
        label: "Date of Birth",
        type: "date",
        placeholder: "",
        required: true
    }
];
}