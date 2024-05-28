import { Component, Input, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-link-attachments',
  standalone: true,
  imports: [],
  templateUrl: './link-attachments.component.html',
  styleUrl: './link-attachments.component.scss',
})
export class LinkAttachmentsComponent {
  @Input() image?: Signal<any>;

  onImageUpload(e: any) {
    console.log(e);
  }
}
