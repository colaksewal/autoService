import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,MatCardModule ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})


export class GalleryComponent {
  photosUrl: string[] = [
 
  "../../assets/gallery/foto2.jpg",
  "../../assets/gallery/foto3.jpg",
  "../../assets/gallery/foto9.jpg",
  "../../assets/gallery/foto4.jpg",
  "../../assets/gallery/foto1.jpg",
  "../../assets/gallery/foto6.jpg",
  "../../assets/gallery/foto7.jpg",
  "../../assets/gallery/foto8.jpg",
  "../../assets/gallery/foto5.jpg",

];


  animal?: string;
  name?: string;

  constructor(public dialog: MatDialog) {}

  openDialog(urlFromGallery: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
      data: {name: this.name, animal: this.animal ,url: urlFromGallery},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

export interface DialogData {
  animal: string;
  name: string;
  url: string;
}


