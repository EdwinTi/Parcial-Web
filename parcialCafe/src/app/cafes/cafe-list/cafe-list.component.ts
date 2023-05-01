import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';
@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  cantidadBlend: number = 0;
  cantidadOriginal: number = 0;

  constructor(private cafeService: CafeService) { }


  getCafe(): void {
    this.cafeService.getCafes().subscribe((cafe) => {
      this.cafes = cafe;

      this.cantidadBlend = 0;
      this.cantidadOriginal = 0;

      this.cafes.forEach(cafe => {
        if (cafe.tipo === "Blend") {
          this.cantidadBlend++;
        } else if (cafe.tipo === "Café de Origen") {
          this.cantidadOriginal++;
        }
      });
    });
  }

  ngOnInit() {
    this.getCafe();
  }

}
