import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DFormComponent } from './component/d-form/d-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SidebarComponent, DFormComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
