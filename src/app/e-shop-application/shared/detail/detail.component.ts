import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataCommunicationService } from '../../services/data-communication.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  product: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataCommService: DataCommunicationService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.product = params;
      console.log(params)
    });

    this.dataCommService.detailData.subscribe(data => {
      this.product = data;
    })

  }

}
