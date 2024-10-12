import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private readonly mock_products: ProductModel[] = [
    { name: 'Колбаса', count: 1, time_finish: '20.10.2024', time_start: '11.10.2024' },
    { name: 'Булочка с маком', count: 1, time_finish: '20.10.2024', time_start: '11.10.2024' },
    { name: 'Слойка с сыром и плесенью', count: 1, time_finish: '20.10.2024', time_start: '11.10.2024' },
    { name: 'Молоко Эконива', count: 1, time_finish: '20.10.2024', time_start: '11.10.2024' },
  ]

  constructor() { }

  get_all_products() {
    const resp = JSON.stringify({ result: this.mock_products });
    return of(resp);
  }
}
