import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ships: any = []
  adding = true

  id = new FormControl('')
  name = new FormControl('')
  price = new FormControl('')
  length = new FormControl('')
  person = new FormControl('')
  trailer = new FormControl('')

  onClose() {
    this.adding = true
  }

  onSave() {

    console.log('mentés');

    let ship = {
      id: this.id.value,
      name: this.name.value,
      length: this.length.value,
      price: this.price.value,
      person: this.person.value,
      trailer: this.trailer.value
    }

    if (this.adding) {
      this.storeShip(ship)
    } else {
      this.updateShip(ship)
      this.adding = true
    }

  }

  startAdd() {
    console.log('hozzáadás')
    this.adding = true
  }

  startEdit(ship: any) {
    console.log('szerkesztés');

    this.adding = false //modal edits

    this.id.setValue(ship.id)
    this.name.setValue(ship.name)
    this.length.setValue(ship.length)
    this.price.setValue(ship.price)
    this.person.setValue(ship.person)
    this.trailer.setValue(ship.trailer)
  }

  // CREATE
  storeShip(ship: any) {
    this.api.storeShip(ship).subscribe({
      next: (data: any) => console.log(data)
    })
  }
  // READ
  fetchShips() {
    this.api.fetchShips().subscribe({
      next: (data: any) => {
        data.forEach((record: any) => {
          record.trailer == 0 ? record.trailer = "nem" : record.trailer = "igen"
        });

        this.ships = data
      },
      error: (e: any) => console.log(e)
    })
  }
  // UPDATE
  updateShip(ship:any) {
    this.api.updateShip(ship).subscribe({
      next: (data: any) => {
        console.log(data);

      },
      error: (e: any) => console.error(e)
    })
  }
  // DELETE
  deleteShip(id: number) {
    this.api.deleteShip(id).subscribe({
      next: (data: any) => {
        console.log("törölve", data)
      },
      error: (e: any) => console.error(e)
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

interface Ship {
  id: number,
  name: string,
  price: number,
  length: number,
  person: number,
  trailer: boolean
}