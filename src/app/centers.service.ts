import { Injectable } from '@angular/core';
import { Center } from './center';

@Injectable({
  providedIn: 'root'
})
export class CentersService {

  constructor() { }
  centerList: Center[] = [
    {
      name: 'Center 1',
      location: 'Chennai Location A',
      id: 1,
      totalSlots: 20,
      availableSlots: 15,
    },
    {
      name: 'Center 2',
      location: 'Chennai Location B',
      id: 2,
      totalSlots: 20,
      availableSlots: 5,
    },
    {
      name: 'Center 3',
      location: 'Chennai Location C',
      id: 3,
      totalSlots: 20,
      availableSlots: 10,
    },
    {
      name: 'Center 4',
      location: 'Chennai Location A',
      id: 4,
      totalSlots: 20,
      availableSlots: 18,
    },
    {
      name: 'Center 5',
      location: 'Chennai Location B',
      id: 5,
      totalSlots: 20,
      availableSlots: 12,
    },
    {
      name: 'Center 6',
      location: 'Chennai Location C',
      id: 6,
      totalSlots: 20,
      availableSlots: 7,
    },
    {
      name: 'Center 7',
      location: 'Chennai Location A',
      id: 7,
      totalSlots: 20,
      availableSlots: 9,
    },
    {
      name: 'Center 8',
      location: 'Chennai Location B',
      id: 8,
      totalSlots: 20,
      availableSlots: 16,
    },
    {
      name: 'Center 9',
      location: 'Chennai Location C',
      id: 9,
      totalSlots: 20,
      availableSlots: 4,
    },
    {
      name: 'Center 10',
      location: 'Chennai Location A',
      id: 10,
      totalSlots: 20,
      availableSlots: 19,
    },
    {
      name: 'Center 11',
      location: 'Chennai Location B',
      id: 11,
      totalSlots: 20,
      availableSlots: 8,
    },
    {
      name: 'Center 12',
      location: 'Chennai Location C',
      id: 12,
      totalSlots: 20,
      availableSlots: 13,
    },
    {
      name: 'Center 13',
      location: 'Chennai Location A',
      id: 13,
      totalSlots: 20,
      availableSlots: 6,
    },
    {
      name: 'Center 14',
      location: 'Chennai Location B',
      id: 14,
      totalSlots: 20,
      availableSlots: 11,
    },
    {
      name: 'Center 15',
      location: 'Chennai Location C',
      id: 15,
      totalSlots: 20,
      availableSlots: 17,
    },
  ];
  noOfCenters:number=15;
  getCenterbyId(id:number):Center|undefined{
    return this.centerList.find(center=>center.id===id);
  }

}
