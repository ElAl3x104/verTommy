import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Canzoni } from '../model/song.model';
import { DettagliAlbumComponent } from '../dettagli-album/dettagli-album.component';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [JsonPipe, DettagliAlbumComponent],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
@Input() data! : Canzoni[];

dettagli! : Canzoni;
mostraDettagli(canzoni: Canzoni ): boolean{ 
  this.dettagli = canzoni;
  console.log(canzoni.data_uscita, canzoni.durata)
  return false;
}

}
