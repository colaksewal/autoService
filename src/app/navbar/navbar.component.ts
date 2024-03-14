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
      //follow the blog site id in blogData
      this.route.params.subscribe(params => {
          if (params['id']) {
              const id = parseInt(params['id']);
              this.blog = blogData[0].find((data: any) => data.id === id.toString());
          }
      });
    }

    //For the blog title and goes to relative blog site
    navigateToBlog(id: string): void {
      this.router.navigate(['/blog', id]);
    }

    //For telephone icon to navigate call application
    makePhoneCall(phoneNumber: string): void {
      window.location.href = 'tel:' + phoneNumber;//new window open
    }



}
