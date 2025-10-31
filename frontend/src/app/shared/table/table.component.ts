
import {
  Component, Input, OnInit, OnChanges, SimpleChanges,
  ViewEncapsulation, Output, EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ITable } from '../interfaces/table';

@Component({
  selector: 'app-shared-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit, OnChanges {
  @Input() config!: ITable;
  @Output() pageChange = new EventEmitter<PageEvent>();

  dataSource = new MatTableDataSource<any>([]);
  visibleColumns: string[] = [];
  showColumnSelector = false;

  ngOnInit() {
    this._initTable();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes", changes)
    if (changes['config'] && this.config) {
      this._initTable();

    }

  }

  private _initTable() {
    this.config = this.config || { cols: [], data: [], pageSize: 10, pageIndex: 1, totalItems: 0 };
    this.config.cols = this.config.cols || [];
    this.config.data = this.config.data || [];

    if (!this.visibleColumns.length) {
      this.visibleColumns = this.config.cols.slice(0, 5).map(c => c.label);
    }
    this.dataSource = new MatTableDataSource(this.config.data);
  }

  toggleColumn(col: string) {
    if (this.visibleColumns.includes(col)) {
      this.visibleColumns = this.visibleColumns.filter(c => c !== col);
    } else {
      this.visibleColumns.push(col);
    }
  }

  onPageChange(event: PageEvent) {
    this.pageChange.emit(event);
  }
}
