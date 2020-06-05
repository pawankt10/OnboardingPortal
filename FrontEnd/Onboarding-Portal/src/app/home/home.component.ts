import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchOnboardeeService } from '../service/fetch-onboardee.service';
import { DeleteOnboardeeService } from '../service/home/delete-onboardee.service';
import { Key } from 'protractor';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private fetchList: FetchOnboardeeService,
    private deleteRecord: DeleteOnboardeeService,
    private route: ActivatedRoute
  ) { }

  onboardeeList: Object
  searchString: String
  key: any
  myDetails: number
  delhi: any
  mumbai: any
  hyderabad: any
  chennai: any
  bangalore: any
  loginDetail: any

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
    this.key = this.route.snapshot.paramMap.get(`id`);

    this.fetchList.fetchOnboardeeList().subscribe(
      data => {
        console.log(data);
        this.onboardeeList = data
      },
      error => console.log(error));

    this.fetchList.fetchCount("Mumbai").subscribe(
      data => {
        this.mumbai = data;
        console.log(data);
      },
      error => console.log(error)
    );
    this.fetchList.fetchCount("Hyderabad").subscribe(
      data => this.hyderabad = data,
      error => console.log(error)
    );
    this.fetchList.fetchCount("Delhi").subscribe(
      data => this.delhi = data,
      error => console.log(error)
    );
    this.fetchList.fetchCount("Chennai").subscribe(
      data => this.chennai = data,
      error => console.log(error)
    );
    this.fetchList.fetchCount("Bangalore").subscribe(
      data => this.bangalore = data,
      error => console.log(error)
    );

    this.fetchList.fetchLoginDetails(this.key).subscribe(
      data => this.loginDetail = data,
      error => console.log(error)
    );
  }
}
