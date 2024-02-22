import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { IntroComponent } from "./intro/intro.component";
import { OurServicesComponent } from "./our-services/our-services.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, NavbarComponent, IntroComponent, OurServicesComponent, GalleryComponent, FooterComponent]
})
export class AppComponent {
  title = 'auto';
}
