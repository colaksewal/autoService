import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute, Router } from '@angular/router';
import { blogData } from '../autoServiceBlog.const';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-blog',
    standalone: true,
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
    imports: [NavbarComponent,CommonModule,]
})

export class BlogComponent implements OnInit {

    blogId: number | undefined;
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
