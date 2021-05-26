import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataCommunicationService } from '../services/data-communication.service';
import { ShoppingHttpService } from '../services/shopping-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any;
  constructor(
    private shoppingHttpService: ShoppingHttpService,
    private dataCommService: DataCommunicationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.shoppingHttpService.getAllProduct().subscribe(d => {
      this.products = d;
    })
  }

  details(prod: any) {
    this.dataCommService.detailData.next(prod);
    this.router.navigate(['/detail']);
  }

}
