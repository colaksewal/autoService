import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  makePhoneCall(phoneNumber: string): void {
    window.location.href = 'tel:' + phoneNumber;
  }
}
