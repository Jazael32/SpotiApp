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
      Authorization: 'Bearer BQDsnv4VoyRPguXCZhb_3EM5yxb3O_TKLSMBs7isqdwY2FJ4h4An-2SC3p72hlk4-XjDBohIMsqWWFqZFtw'
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
