import { Component } from '@angular/core';
import { NaviTabComponent } from '../../component/navi-tab/navi-tab.component';
import { TopOverlayComponent } from '../../component/top-overlay/top-overlay.component';
import { InfoSectionsComponent } from '../../component/info-sections/info-sections.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [NaviTabComponent, TopOverlayComponent, InfoSectionsComponent],
    templateUrl: './dashboard.html',
})
export class Dashboard {}