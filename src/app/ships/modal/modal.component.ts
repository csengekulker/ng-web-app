import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShipsComponent } from '../ships.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalAdds=true

  model!:Ship

  constructor() { }

  ngOnInit(): void { 
    this.model.id
  }

}

type Ship = {
  id: number,
  name: string,
  price: number,
  length: number,
  person: number, 
  trailer: boolean
}