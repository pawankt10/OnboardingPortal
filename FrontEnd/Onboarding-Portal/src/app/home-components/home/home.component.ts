import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchOnboardeeService } from '../../service/fetch-onboardee.service';
import { DeleteOnboardeeService } from '../../service/home/delete-onboardee.service';
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
  searchString: string
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

  search() {
    console.log(this.searchString);
    this.fetchList.searchDemandList(this.searchString).subscribe((data) => {
      console.log(data);
      let arr = [data];
      this.onboardeeList = arr;
    })
  }
  viewDetails() {
    this.router.navigate([`/view/${this.myDetails}`])
  }

  editDetails() {
    this.router.navigate([`edit/${this.myDetails}`])
  }

  fetchCountAtLocation(location: String) {
    let smallCaseLocation: String;

    this.fetchList.fetchCount(location).subscribe(
      data => {
        smallCaseLocation = location.toLowerCase();
        this[smallCaseLocation.valueOf()] = data;
        console.log(data);
      },
      error => console.log(error)
    );
  }

  fetchLoginDetails(key) {
    this.fetchList.fetchLoginDetails(key).subscribe(
      data => this.loginDetail = data,
      error => console.log(error)
    );
  }

  fetchOnboardeeDetailsList() {
    this.fetchList.fetchOnboardeeList().subscribe(
      data => {
        console.log(data);
        this.onboardeeList = data
      },
      error => console.log(error));
  }

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get(`id`);

    this.fetchOnboardeeDetailsList();

    this.fetchCountAtLocation("Mumbai");
    this.fetchCountAtLocation("Hyderabad");
    this.fetchCountAtLocation("Chennai");
    this.fetchCountAtLocation("Bangalore");
    this.fetchCountAtLocation("Delhi");

    this.fetchLoginDetails(this.key);
  }
}
