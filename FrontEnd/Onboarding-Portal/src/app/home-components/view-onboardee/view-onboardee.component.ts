import { Component, OnInit } from '@angular/core';
import { FetchOnboardeeService } from '../../service/fetch-onboardee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-onboardee',
  templateUrl: './view-onboardee.component.html',
  styleUrls: ['./view-onboardee.component.css']
})
export class ViewOnboardeeComponent implements OnInit {

  constructor(
    private fetch: FetchOnboardeeService,
    private route: ActivatedRoute
  ) { }

  onboardee: any
  key: any

  fetchDetails() {
    this.fetch.fetchOnboardee(this.key).subscribe(
      data => {
        console.log(data);
        this.onboardee = data
        console.log(this.onboardee);
      },
      error => console.log(error));
  }

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get(`id`);
    this.fetchDetails();
  }

}
