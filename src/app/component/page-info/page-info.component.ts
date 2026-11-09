import { Component, input } from "@angular/core";

@Component({
    selector: "app-page-info",
    standalone: true,
    templateUrl: "./page-info.component.html",
})

export class PageInfoComponent{
    PageHeading = input.required<string>();
    PageDesc = input.required<string>();
}