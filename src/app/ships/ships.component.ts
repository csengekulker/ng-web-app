import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ships:any = []

  fetchShips() {
    this.api.fetchShips().subscribe({
      next: (data:any) => {
        // this.ships = data
        console.log(data);
        
      },
      error: (erro:any) => {
        console.log(erro);
      }
    })
  }

  storeShip() {

    let ship:any = []

    this.api.storeShip(ship).subscribe({
      next: (data:any) => {

      },
      error: (erro: any) => {
        console.error(erro);
      }
    })
  }

  updateShip() {

    let ship:any = []

    this.api.updateShip(ship).subscribe({
      next: (data:any) => {

      },
      error: (erro: any) => {
        console.error(erro);
      }
    })
  }

  deleteShip(id:number) {
    this.api.deleteShip(id).subscribe({
      next: (data:any) => {

      },
      error: (erro: any) => {
        console.error(erro);
      }
    })
  }

  ngOnInit(): void { 
    this.fetchShips()
  }

  
  // ships = [
  //   {
  //     name: "túra csónak",
  //     length: 420,
  //     price: 185000,
  //     person: 2,
  //     trailer: "nem"
  //   },
  //   {
  //     name: "kajütös hajó",
  //     length: 520,
  //     price: 999000,
  //     person: 2,
  //     trailer: "nem"
  //   },
  //   {
  //     name: "motoros hajó",
  //     length: 610,
  //     price: 1950000,
  //     person: 2,
  //     trailer: "nem"
  //   },
  //   {
  //     name: "motorcsónak",
  //     length: 620,
  //     price: 3100000,
  //     person: 7,
  //     trailer: "nem"
  //   },
  //   {
  //     name: "horgászcsónak",
  //     length: 620,
  //     price: 9596000,
  //     person: 2,
  //     trailer: "igen"
  //   },
  //   {
  //     name: "motoros hajó",
  //     length: 630,
  //     price: 6250000,
  //     person: 3,
  //     trailer: "nem"
  //   }
  // ]

}

