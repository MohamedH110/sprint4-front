import { Component, OnInit } from '@angular/core';
import { eleve } from '../../model/eleve.model';
import { EleveService } from '../services/eleve.service';


@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrl: './eleves.component.css'
})
export class ElevesComponent implements OnInit{

  eleves : eleve[]; 
   constructor(private eleveService: EleveService) {
    this.eleves = [];
    }
    
  
  
   ngOnInit(): void {
    this.chargereleves();
    }
   
    chargereleves(){
      this.eleveService.listeeleves().subscribe(prods => {
        console.log(prods);
        this.eleves = prods;
        });
    }
  

  



}



 