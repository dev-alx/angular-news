import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';
  newsList: any[]  = [];
  loading = false;

  constructor(private _newsService : NoticiaService){

  }

  buscarNoticias(parameters : any){
    this.loading = true;
    this.newsList = [];
    setTimeout(() => {
      this._newsService.getNoticias(parameters).subscribe(data => {
        console.log(data);
        this.newsList = data.articles;
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
      });
    }, 1000);    
 }
}

