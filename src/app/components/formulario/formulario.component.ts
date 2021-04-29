import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() selectedParameters = new EventEmitter<any>();

  categorySelected = 'general';
  countrySelected = 'mx';
  categories: any[] = [
    {value: 'general', name: 'General'},
    { value: 'business', name: 'Business'},
    { value: 'entertainment', name: 'Entertainment'},
    { value: 'health', name: 'Health'},
    { value: 'science', name: 'Science'},
    { value: 'sports', name: 'Sports'},
    { value: 'technology', name: 'Technology'},
  ];

  countries: any[] = [
    { value: 'fr', name: 'French'},
    { value: 'ar', name: 'Argentina'},
    { value: 'br', name: 'Brazil'},
    { value: 'hu', name: 'Hungria'},
    { value: 'mx', name: 'Mexico'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARAMETERS = {
        category : this.categorySelected,
        country : this.countrySelected
    }

    this.selectedParameters.emit(PARAMETERS);
  }

}



