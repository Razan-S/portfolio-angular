import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';

@Component({
  selector: 'app-slide-show',
  standalone: true,
  imports: [CommonModule, HammerModule],
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.scss'
})
export class SlideShowComponent {
  // @Input() images: string[] = [
  //   './assets/images/me.png',
  //   './assets/images/me.png',
  //   './assets/images/me.png'
  // ];

  images: string[] = [
    './assets/images/pic.jpg',
    './assets/images/pic2.jpg',
    './assets/images/pic3.jpg',
  ]

  selectIndex = 0;

  // ngOnInit(): void {
  //   this.images = this.images.map((image) => this.convertBase64ToImage(image));
  // }

  // convertBase64ToImage(base64: string): string {
  //   return `data:image/png;base64,${base64}`;
  // }

  showPrev(i: number) {
    if (this.selectIndex > 0) {
      this.selectIndex = i - 1;
    }
  }

  showNext(i: number) {
    if (this.selectIndex < this.images?.length - 1) {
      this.selectIndex = i + 1;
    }
  }
}
