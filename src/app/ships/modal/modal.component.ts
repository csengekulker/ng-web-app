import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShipsComponent } from '../ships.component';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {



  constructor(private api: ApiService) { }

  onClick(event:any) {

  }

  ngOnInit(): void { 
    
  }

}

