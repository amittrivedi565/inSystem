
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './navbar.component.html',
})

export class NavbarComponent {

    brand = 'inSystem';

    userName = 'Amit Trivedi';

    navItems = [
        { label: 'Projects', route: '/projects' },
        { label: 'Employees', route: '/employees' },
        { label: 'Attendance', route: '/attendance' },
        { label: 'Payroll', route: '/payroll' },
        { label: 'Sub-Contractors', route: '/sub-contractors' },
        { label: 'Vendors', route: '/vendors' },
        { label: 'AMC', route: '/amc' }
    ];

    profileMenu = [
        { label: 'My Profile', icon: 'bi-person', route: '/profile' },
        { label: 'Settings', icon: 'bi-gear', route: '/settings' },
        { label: 'Logout', icon: 'bi-box-arrow-right', route: '/logout', danger: true }
    ];

}
