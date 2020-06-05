import { Component, OnInit } from '@angular/core';
import { FetchOnboardeeService } from '../service/fetch-onboardee.service';

@Component({
  selector: 'app-show-demands',
  templateUrl: './show-demands.component.html',
  styleUrls: ['./show-demands.component.css']
})
export class ShowDemandsComponent implements OnInit {

  demandList: any;

  constructor(
    private fetch: FetchOnboardeeService
  ) { }

  ngOnInit(): void {
    this.fetch.fetchDemandList().subscribe(
      data => {
        this.demandList = data;
      },
      error => console.log(error)
    );
  }

}
