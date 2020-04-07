import { Product } from "./product.model";

  export interface ResponseProduct {
    message: string;
    product: Product;
    maxProducts: number;
  }
  