import { Component } from '@angular/core';
import { NaviTabComponent } from '../../component/navi-tab/navi-tab.component';
import { TopOverlayComponent } from '../../component/top-overlay/top-overlay.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [NaviTabComponent, TopOverlayComponent],
    templateUrl: './dashboard.html',
})
export class Dashboard {}