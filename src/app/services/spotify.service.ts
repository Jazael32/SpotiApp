import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio Listo');
  }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDyDlOR3OCsOcPH_TnStNG-fvDZj55gCrFV8Eeg1STKYSBmr6DJ4mvvZVaCUsL0d_vhr8GsJaNzUG_5o2o'
    });

    return this.http.get(URL, {headers});
   }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20').pipe(
      map( (data: any) => data.albums.items));
  }

  getArtists(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map( (data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe(
      map( (data: any) => data.tracks));
  }
}
