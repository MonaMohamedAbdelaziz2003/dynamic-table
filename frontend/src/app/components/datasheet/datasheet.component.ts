
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { TableComponent } from '../../shared/table/table.component';
import { ITable } from '../../shared/interfaces/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TABLE_COLUMNS } from '../../shared/config/table-columns.config';

@Component({
  selector: 'app-datasheet',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, TableComponent],
  templateUrl: './datasheet.component.html',
  styleUrls: ['./datasheet.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DatasheetComponent implements OnInit {
  searchControl = new FormControl('');
  tableConfig: ITable = { cols: [], data: [], pageSize: 10, pageIndex: 1, totalItems: 0 };
  tableColumns = TABLE_COLUMNS;
  pageIndex = 1;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.loadDatasheets();
    this.handleSearch();
  }

  loadDatasheets(page = 1, size = 10, search = '') {
    this.service.getDatasheets(page, size, search).subscribe(res => {
      this.tableConfig = {
        ...this.tableColumns,
        data: res.data,
        totalItems: res.total,
        pageIndex: page,
        pageSize: size,
      };
    });
  }

  handleSearch() {
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(search =>
        this.service.getDatasheets(this.pageIndex,
          this.tableConfig.pageSize || 10,
          (search ?? '').toString()
        )
      )
    ).subscribe({
      next: res => {
        this.tableConfig = {
          ...this.tableConfig,
          data: res.data,
          totalItems: res.total,
        };
      },
      error: err => console.error('Search error:', err)
    });
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex + 1;
    const pageSize = event.pageSize;
    this.loadDatasheets(this.pageIndex, pageSize, this.searchControl.value || '');
  }
}
