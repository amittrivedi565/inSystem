import { Component } from '@angular/core';
import { PageInfoComponent } from '../../component/page-info/page-info.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [PageInfoComponent],
    templateUrl: './dashboard.html',
})
export class Dashboard {}