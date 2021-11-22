import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-manage-listing',
  templateUrl: './manage-listing.component.html',
  styleUrls: ['./manage-listing.component.css']
})
export class ManageListingComponent implements OnInit {
 data:any;
 data1 : any = []; 
 constructor() { }

  ngOnInit(){
   // let data = localStorage.getItem("datas");
    // this.data1.push(data)
   // console.log("AAAA");
   // console.log(data);
    //console.log(data);
    //console.log(data.propertyType);
     this.data = JSON.parse(localStorage.getItem('myLSkey') || '{}');
    
  console.log(this.data);
  console.log(this.data.listingPrice);
  }
  

}

