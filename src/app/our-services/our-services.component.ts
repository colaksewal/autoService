import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {

  constructor(private router: Router) { }

  cards = [
    {id: 1, srcUrl: "../../assets/brake.jpg", title: 'Fren Bakımı Balata Değişimi', description: 'Balatalarınızın fazla aşınması frenlerinizin veya disklerinizin deforme olması fren performansınızı ciddi ölçüde etkiler. Kendinizi emniyette hissetmeniz için fren bakımlarını yaptırmanız önerilir.' },
    { id: 2,srcUrl: "../../assets/chain.jpg", title: 'Triger Kayışı veya Zincir Değişimi', description: 'Motorunuzda yer alan pistonlar ve subapların senkronize olarak çalışmasını sağlayan triger kayışı veya zincirler zamanla yıpranarak deforme olurlar. Zincirinizin veya triger kayışınızın kopması yüksek tamir maliyetlerine yol açar bu yüzden zamanında değişim yapmanız önerilir.' },
    { id: 3,srcUrl: "../../assets/clutch.jpg", title: 'Servis 3', description: 'Bu servis hakkında açıklama' },
    { id: 4,srcUrl: "../../assets/oil-on.jpg", title: 'Servis 4', description: 'Bu servis hakkında açıklama' },
    { id: 5,srcUrl: "../../assets/main-page.jpg", title: 'Servis 5', description: 'Bu servis hakkında açıklama' },
    { id: 6,srcUrl: "../../assets/chain.jpg", title: 'Servis 6', description: 'Bu servis hakkında açıklama' }
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



  // BlogComponent'e yönlendirme yapacak fonksiyon
  showBlog(blogId: number) {
    this.router.navigate(['/blog', blogId]);
  }

  
  
  
  
}
