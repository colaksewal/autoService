import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { blogData } from '../autoServiceBlog.const';


@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {

  constructor(private router: Router) { }

  cards = blogData[0];
 
  startIndex = 0;
  endIndex = 2;

  ngOnInit(): void {

  }

  prevSlide(): void {
    if (this.startIndex === 0) {
      this.startIndex = this.cards.length - 3;
      this.endIndex = this.cards.length - 1;
    } else {
      this.startIndex--;
      this.endIndex--;
    }
  }
  
  nextSlide(): void {
    if (this.endIndex === this.cards.length - 1) {
      this.startIndex = 0;
      this.endIndex = 2;
    } else {
      this.startIndex++;
      this.endIndex++;
    }
  }



  // BlogComponent'e yönlendirme yapacak fonksiyon
  showBlog(blogId: number) {
    this.router.navigate(['/blog', blogId]);
  }

  
  
  
  
}
