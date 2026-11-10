import { Component, input } from "@angular/core";

@Component({
    selector: "app-stats",
    standalone: true,
    templateUrl: "./stats.component.html",
})

export class StatsComponent{
    stats = [
    { id: 1, title: 'Unique Users', value: 45 },
    { id: 2, title: 'Total Projects', value: 128 },
    { id: 3, title: 'Employees', value: 250 },
    { id: 4, title: 'Revenue', value: '₹12.5L' },
];
}