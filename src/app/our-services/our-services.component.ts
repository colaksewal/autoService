import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {

  cards = [
    { srcUrl: "../../assets/brake.jpg", title: 'Servis 1', description: 'Bu servis hakkında açıklama' },
    { srcUrl: "../../assets/chain.jpg", title: 'Servis 2', description: 'Bu servis hakkında açıklama' },
    { srcUrl: "../../assets/clutch.jpg", title: 'Servis 3', description: 'Bu servis hakkında açıklama' },
    { srcUrl: "../../assets/oil-on.jpg", title: 'Servis 4', description: 'Bu servis hakkında açıklama' },
    { srcUrl: "../../assets/main-page.jpg", title: 'Servis 5', description: 'Bu servis hakkında açıklama' },
    { srcUrl: "../../assets/chain.jpg", title: 'Servis 6', description: 'Bu servis hakkında açıklama' }
  ];
  startIndex = 0;
  endIndex = 2;

  ngOnInit(): void {
    // İlk olarak sadece ilk üç kartı göstermek için endIndex'i 2 olarak ayarlayalım
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

  
  
  
  
}
