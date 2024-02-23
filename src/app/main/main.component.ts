import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { IntroComponent } from "../intro/intro.component";
import { OurServicesComponent } from "../our-services/our-services.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [NavbarComponent, IntroComponent, OurServicesComponent, GalleryComponent, FooterComponent]
})
export class MainComponent {

}
