import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-page-header',
  template: `
    <style>
      .page-header {
        padding: 1rem;
        display: flex;
        align-items: center;
        background-color: #1976d2;
        color: white;
        font-weight: 600;
      }
    </style>
    <div class="page-header">page-header works!</div>
  `,
  styles: [],
})
export class PageHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
