import { Component, input } from "@angular/core";

@Component({
    selector: "app-insert-bar",
    standalone: true,
    templateUrl: "./insert.component.html",
})

export class InsertBarComponent{
    Title = input.required<string>()
    SubTitle = input.required<string>()
}