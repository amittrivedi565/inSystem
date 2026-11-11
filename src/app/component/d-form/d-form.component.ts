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
        label: "Employee Name",
        type: "text",
        placeholder: "Enter employee name",
        required: true
    },
    {
        id: 2,
        label: "Email Address",
        type: "email",
        placeholder: "Enter email",
        required: true
    },
    {
        id: 3,
        label: "Department",
        type: "select",
        placeholder: "Select department",
        options: ["HR", "Finance", "Engineering", "Operations"],
        required: true
    },
    {
        id: 4,
        label: "Joining Date",
        type: "date",
        placeholder: "",
        required: true
    },
    {
        id: 5,
        label: "Experience",
        type: "number",
        placeholder: "Enter years",
        required: false
    },
    {
        id: 6,
        label: "Profile Photo",
        type: "file",
        placeholder: "Upload photo",
        accept: "image/*",
        required: false
    },
    {
        id: 7,
        label: "Address",
        type: "textarea",
        placeholder: "Enter address",
        required: false
    }
];
}