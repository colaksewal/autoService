import { Component } from '@angular/core';
import { blogData } from '../autoServiceBlog.const';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  blog: any;
    blogs = blogData[0]; // Burada blog verilerini kullanın

  
    constructor(private route: ActivatedRoute, private router: Router) { } // Router ekleniyor
  
    ngOnInit(): void {
      this.route.params.subscribe(params => {
          if (params['id']) {
              const id = parseInt(params['id']);
              this.blog = blogData[0].find((data: any) => data.id === id.toString());
          }
      });
    }

    
    navigateToBlog(id: string): void {
      console.log("girdi", id);
      this.router.navigate(['/blog', id]);
    }

    makePhoneCall(phoneNumber: string): void {
      window.location.href = 'tel:' + phoneNumber;
    }



}
