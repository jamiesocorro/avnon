import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'avnon';

  openModal = signal<boolean>(false);
  titleHeader = signal<string>('');
  content = signal<string>('');
  image = signal<any>(null);

  onTextChange(e: any) {
    this.titleHeader.set(e.target.value);
  }

  onDescriptionChange(e: any) {
    this.content.set(e.target.innerHTML);
  }

  onOpenModal() {
    this.openModal.set(true);
  }

  onCloseModal() {
    this.openModal.set(false);
  }

  onPublishMarkdown() {
    this.onOpenModal();
  }
}
