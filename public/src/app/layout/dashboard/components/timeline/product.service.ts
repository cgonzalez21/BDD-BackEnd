import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Product } from "./product.model";

@Injectable({ providedIn: "root" })
export class ProductService {
  private products: Product[] = [];
  private prodUpdated = new Subject<{ products: Product[]; maxProducts: number }>();

  constructor(private http: HttpClient, private router: Router) { }

  getProducts() {
    return this.http.get("http://localhost:3000/api/product");
  }

  getPostUpdateListener() {
    return this.prodUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{
      _id: string;
      name: string;
      imagePath: string;
      cost: string;
    }>("http://localhost:3000/api/product/" + id);
  }



}
