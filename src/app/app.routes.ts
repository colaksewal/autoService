import { Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "main", component: MainComponent },
    { path: 'blog/:id', component: BlogComponent},
    { path: 'gallery', component: GalleryComponent}
];
