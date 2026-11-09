import { Component, input, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

export interface FormField {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
}

@Component({
    selector: "app-form",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "./form.component.html",
})
export class FormComponent {
    fields = input.required<FormField[]>();
    submitLabel = input<string>("Save");

    onSubmit = output<Record<string, any>>();
}