import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  // Solo un comentario para meter una nueva branch
  loading: boolean;
  artists: any[] = [];

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string) {
    this.loading = true;
    this.spotify.getArtists(termino).subscribe( (response: any) => {
      this.artists = response;
      this.loading = false;
    });
  }

}
