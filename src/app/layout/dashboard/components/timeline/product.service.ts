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
  cedula: string = "1234-567-89";
  constructor(private http: HttpClient, private router: Router) { }

  getProducts() {
    const cedula = '12344-567-89';
    return this.http.get("http://localhost:3000/api/getClient/"+ cedula);
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
    }>("http://localhost:3000/api/getProducts/" + id);
  }



}
