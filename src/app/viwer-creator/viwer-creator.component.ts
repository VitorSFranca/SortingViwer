import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-viwer-creator',
  templateUrl: './viwer-creator.component.html',
  styleUrls: ['./viwer-creator.component.scss'],
})
export class ViwerCreatorComponent {
  @Output() addSortingType: EventEmitter<any> = new EventEmitter();

  addSortingTypeEmit(): void {
    this.addSortingType.emit();
  }
}
