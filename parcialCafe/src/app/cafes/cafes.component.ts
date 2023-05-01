import { Component, OnInit } from '@angular/core';
import {Cafe} from './cafe'
import { CafeService } from './cafe.service';
@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {


  constructor(private cafeService: CafeService) { }
  private cafe: Array<Cafe> = [];


  getCafes() {
    this.cafeService.getCafes().subscribe(cafes => {
      this.cafe = cafes;
      console.log("llegue: " + this.cafe);
    });
  }

  ngOnInit() {
    this.getCafes
  }

}
