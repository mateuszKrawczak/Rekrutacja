import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() currentPage: number;
  @Output() pageChange = new EventEmitter<number>();

  constructor() {}

  previousPage() {
    this.pageChange.emit(this.currentPage - 1);
  }

  nextPage() {
    this.pageChange.emit(this.currentPage + 1);
  }
}
