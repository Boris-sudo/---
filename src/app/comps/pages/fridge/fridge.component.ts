import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [],
  templateUrl: './fridge.component.html',
  styleUrl: './fridge.component.css'
})
export class FridgeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  }
}
