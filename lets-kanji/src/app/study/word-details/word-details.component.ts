import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css']
})
export class WordDetailsComponent {
  @Input() kanji: any;
  isOpen = false;

  openDialog(kanji: any) {
    this.kanji = kanji;
    this.isOpen = true;
  }

  closeDialog() {
    this.isOpen = false;
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isOpen && event.key === 'Escape') {
      this.closeDialog();
    }
  }

  clickOutside(event: Event) {
    if (this.isOpen && (event.target as HTMLElement).classList.contains('modal')) {
      this.closeDialog();
    }
  }
}
