import { Component ,OnInit} from '@angular/core';
import { CentersService } from '../centers.service';
import { Center } from '../center';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrl: './centers.component.css'
})
export class CentersComponent implements OnInit {
  constructor(private centerService:CentersService,private http:HttpClient){}
  centerList:Center[]=[];
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/centers')
    .subscribe(data => {
      this.centerList = data;
      console.log(this.centerList);
    });
    
}



  // centerList:Center[]=[
  //   {
  //     name: 'Center 1',
  //     location: 'Chennai Location A',
  //     id: 1,
  //     totalSlots: 20,
  //     availableSlots: 15,
  //   },
  //   {
  //     name: 'Center 2',
  //     location: 'Chennai Location B',
  //     id: 2,
  //     totalSlots: 20,
  //     availableSlots: 5,
  //   },
  //   {
  //     name: 'Center 3',
  //     location: 'Chennai Location C',
  //     id: 3,
  //     totalSlots: 20,
  //     availableSlots: 10,
  //   },
  //   {
  //     name: 'Center 4',
  //     location: 'Chennai Location A',
  //     id: 4,
  //     totalSlots: 20,
  //     availableSlots: 18,
  //   },
  //   {
  //     name: 'Center 5',
  //     location: 'Chennai Location B',
  //     id: 5,
  //     totalSlots: 20,
  //     availableSlots: 12,
  //   },
  //   {
  //     name: 'Center 6',
  //     location: 'Chennai Location C',
  //     id: 6,
  //     totalSlots: 20,
  //     availableSlots: 7,
  //   },
  //   {
  //     name: 'Center 7',
  //     location: 'Chennai Location A',
  //     id: 7,
  //     totalSlots: 20,
  //     availableSlots: 9,
  //   },
  //   {
  //     name: 'Center 8',
  //     location: 'Chennai Location B',
  //     id: 8,
  //     totalSlots: 20,
  //     availableSlots: 16,
  //   },
  //   {
  //     name: 'Center 9',
  //     location: 'Chennai Location C',
  //     id: 9,
  //     totalSlots: 20,
  //     availableSlots: 4,
  //   },
  //   {
  //     name: 'Center 10',
  //     location: 'Chennai Location A',
  //     id: 10,
  //     totalSlots: 20,
  //     availableSlots: 0,
  //   },
  //   {
  //     name: 'Center 11',
  //     location: 'Chennai Location B',
  //     id: 11,
  //     totalSlots: 20,
  //     availableSlots: 8,
  //   },
  //   {
  //     name: 'Center 12',
  //     location: 'Chennai Location C',
  //     id: 12,
  //     totalSlots: 20,
  //     availableSlots: 13,
  //   },
  //   {
  //     name: 'Center 13',
  //     location: 'Chennai Location A',
  //     id: 13,
  //     totalSlots: 20,
  //     availableSlots: 6,
  //   },
  //   {
  //     name: 'Center 14',
  //     location: 'Chennai Location F',
  //     id: 14,
  //     totalSlots: 20,
  //     availableSlots: 11,
  //   },
  //   {
  //     name: 'Center 15',
  //     location: 'Chennai Location C',
  //     id: 15,
  //     totalSlots: 20,
  //     availableSlots: 17,
  //   },
  // ];
  centerList1=this.centerList;
  filterRes(f:string){
    if(!f){
      this.centerList1=this.centerList;
    }else{
      this.centerList1=this.centerList.filter((center)=>{
        return center.location.toLowerCase().includes(f.toLowerCase())
      })
    }
    console.log(this.centerList1);
  }
}
