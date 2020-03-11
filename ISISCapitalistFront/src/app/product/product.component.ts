import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Product } from '../world';

declare var require;
const ProgressBar = require("progressbar.js");

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  progressbar: any;
  @ViewChild('bar') progressBarItem;
  constructor() { }
  product: Product;
    @Input()
    set prod(value: Product) {
      this.product=value;
    }

  ngOnInit(): void {
    this.progressbar = new ProgressBar.Line(this.progressBarItem.nativeElement, { strokeWidth: 50, color: '#00f00'});
  }

}
