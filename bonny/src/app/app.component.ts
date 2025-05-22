import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Canzoni } from './model/song.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SongListComponent } from './song-list/song-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SongListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Canzoni(Canzoni: any) {
    throw new Error('Method not implemented.');
  }
  title = 'bonny';


  vettCanzoni : Canzoni[] = [];
  http: HttpClient;
  loading: boolean = false;
  o!: Observable<Canzoni[]>;

  constructor(http: HttpClient) {
    this.http = http;
    this.loading = true;
    this.o = this.http.get<Canzoni[]>('https://my-json-server.typicode.com/malizia-g/hotel/short-songlist');
    this.o.subscribe(data => this.getData(data));
  }
  getData = (d: Canzoni[]) => {
    this.vettCanzoni = d;
    console.log(this.vettCanzoni)
    this.loading = false;
  }
}
