import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchOnboardeeService } from '../service/fetch-onboardee.service';
import { DeleteOnboardeeService } from '../service/home/delete-onboardee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private fetchList: FetchOnboardeeService,
    private deleteRecord: DeleteOnboardeeService
  ) { }

  onboardeeList: Object
  myDetails: number

  handleAdd() {
    this.ngOnInit();
    this.router.navigate(['onboardee'])
  }

  deleteOnboardee() {
    console.log(this.myDetails);
    this.deleteRecord.deleteOnboardee(this.myDetails)
      .subscribe(
        () => {
          this.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }

  viewDetails() {
    this.router.navigate([`/view/${this.myDetails}`])
  }

  editDetails() {
    this.router.navigate([`edit/${this.myDetails}`])
  }

  ngOnInit(): void {
    this.fetchList.fetchOnboardeeList().subscribe(
      data => {
        console.log(data);
        this.onboardeeList = data
      },
      error => console.log(error))
  }

}
