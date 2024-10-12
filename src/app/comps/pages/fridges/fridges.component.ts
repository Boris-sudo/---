import { Component } from '@angular/core';
import { FridgeElementComponent } from '../../_models/fridge-element/fridge-element.component';
import { FridgeModel } from '../../../models/fridge.model';
import { ApiService } from '../../../services/api.service';
import { FilterByStatePipe } from '../../../pipes/filter-by-state.pipe';
import { DeleteFridgeMenuComponent } from '../../_models/delete-fridge-menu/delete-fridge-menu.component';

@Component({
  selector: 'app-fridge-page',
  standalone: true,
  imports: [
    FridgeElementComponent,
    FridgeElementComponent,
    FilterByStatePipe,
    DeleteFridgeMenuComponent
  ],
  templateUrl: './fridges.component.html',
  styleUrl: './fridges.component.css'
})
export class FridgesComponent {
  fridges: FridgeModel[] = [];
  sort_mode: string = '';

  constructor(
    private api: ApiService,
  ) {
    this.api.get_all_fridges().subscribe(resp => {
      this.fridges = resp;
    }, error => { console.log(error); })
  }
}
