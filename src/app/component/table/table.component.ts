import { Component, input } from "@angular/core";

interface TableColumn {
    field: string;
    header: string;
}

@Component({
    selector: "app-table",
    standalone: true,
    templateUrl: "./table.component.html",
})
export class TableComponent {
    cols = input.required<TableColumn[]>();
}