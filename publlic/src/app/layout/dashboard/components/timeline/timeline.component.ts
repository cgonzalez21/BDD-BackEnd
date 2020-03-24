import { Component, OnInit } from '@angular/core';
import { Product } from './product.model'
import { Subscription } from "rxjs";
import { ProductService } from './product.service'
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  products: Product[] = [];
  isLoading = false;
  totalProd = 0;
  private postsSub: Subscription;
  public res: any = {
    message: '',
    product: '',
    maxProducts: 0
  }
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((prodData) => {
      this.res = prodData;
      this.products = this.res.product;
      console.log(this.products);
    });
  }

}
