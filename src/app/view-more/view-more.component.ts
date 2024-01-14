import { Component } from '@angular/core';
import { CentersService } from '../centers.service';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrl: './view-more.component.css'
})
export class ViewMoreComponent {
  constructor(private centerservice:CentersService){}
  noOfCenters=this.centerservice.noOfCenters;

}
