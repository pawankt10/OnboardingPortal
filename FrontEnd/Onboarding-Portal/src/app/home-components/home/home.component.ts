import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchOnboardeeService } from '../../service/fetch-onboardee.service';
import { DeleteOnboardeeService } from '../../service/home/delete-onboardee.service';
import { AgGridAngular } from 'ag-grid-angular';

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
  rowData: any
  selectedNodes: any
  selectedData: any
  details: any

  handleAdd() {
    this.ngOnInit();
    this.router.navigate(['onboardee'])
  }

  deleteOnboardee() {
    this.deleteRecord.deleteOnboardee(this.handleSelection().onboardeeKey)
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
    this.router.navigate([`/view/${this.handleSelection().onboardeeKey}`])
  }

  editDetails() {
    this.router.navigate([`edit/${this.handleSelection().onboardeeKey}`])
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
        this.onboardeeList = data;
        this.rowData = this.onboardeeList;
      },
      error => console.log(error));
  }

  handleSelection() {
    this.selectedNodes = this.agGrid.api.getSelectedNodes();
    this.selectedData = this.selectedNodes.map(node => node.data);
    return this.selectedData;
  }

  @ViewChild('agGrid') agGrid: AgGridAngular;

  columnDefs = [
    { headerName: 'Onboardee ID', field: 'onboardeeID', sortable: true, filter: true, checkboxSelection: true, width: 120 },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'E-mail address', field: 'emailId', sortable: true, filter: true },
    // {headerName: "Key", field: "my_unique_id"},
    { headerName: 'Onboarding Check', field: 'onboardingStatus', sortable: true, filter: true, width: 168 }
  ];

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
