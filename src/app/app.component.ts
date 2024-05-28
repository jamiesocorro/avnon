import { Component, input, model, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'avnon';

  openModal = signal<boolean>(false);

  titleHeader = signal<string>('');
  description = signal<string>('');

  onTextChange(e: any) {
    this.titleHeader.set(e.target.value);
  }

  onDescriptionChange(e: any) {
    this.description.set(e.target.textContent);
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
