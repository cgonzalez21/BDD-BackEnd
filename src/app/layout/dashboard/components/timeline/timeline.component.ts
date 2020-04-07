import { Component, OnInit } from '@angular/core';
import { Product } from './product.model'
import { Subscription } from "rxjs";
import { Information } from './information.model';
import { ProductService } from './product.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  information: Information[] = [];
  isLoading = false;
  totalProd = 0;
  private postsSub: Subscription;
  public res: any= [{
    name_emp: '',
    name_suc: '',
    dir_suc: '',
    name_alm: '',
    dir_alm: ''
  }];
  selectedValue: string;
  myplaceHolder: string = 'Select one'
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((prodData) => {
      console.log(prodData);
      // this.res = prodData;
      // this.information = this.res;
      // console.log(this.information);
    });
  }

  checkPlaceHolder() {
    if (this.myplaceHolder) {
      this.myplaceHolder = null
      return;
    } else {
      this.myplaceHolder = 'Select one'
      return
    }
  }

}
