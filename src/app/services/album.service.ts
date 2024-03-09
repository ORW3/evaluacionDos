import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GeneroAlbum } from '../models/genero-album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private generos:GeneroAlbum[] = [];

  constructor(private firestore:AngularFirestore) { 

    this.generos = [
      {
        id: 0,
        descripcion: 'Sin definir'
      },
      {
        id: 1,
        descripcion: 'Música clásica'
      },
      {
        id: 2,
        descripcion: 'Jazz'
      },
      {
        id: 3,
        descripcion: 'Blues'
      },
      {
        id: 4,
        descripcion: 'Salsa'
      },
      {
        id: 5,
        descripcion: 'Flamenco'
      },
      {
        id: 6,
        descripcion: 'Pop'
      },
      {
        id: 7,
        descripcion: 'Rock'
      },
      {
        id: 8,
        descripcion: 'Metal'
      },
      {
        id: 9,
        descripcion: 'Hip Hop'
      }
    ];
  }

  getAlbumes(){
    return this.firestore.collection('albumes').snapshotChanges();
  }

  getGeneros(){
    return this.generos;
  }

  createAlbum(album:Album){
    return this.firestore.collection('albumes').add(Object.assign({},album));
  }

  updateAlbum(album:Album){
    this.firestore.doc('albumes/'+album.id).update(album);

  }

  deleteAlbum(albumId:string){
    this.firestore.doc('albumes/'+albumId).delete();
    
  }
  
}
