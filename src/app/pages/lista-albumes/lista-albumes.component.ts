import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';
import { GeneroAlbum } from '../../models/genero-album';

@Component({
  selector: 'app-lista-albumes',
  templateUrl: './lista-albumes.component.html',
  styleUrl: './lista-albumes.component.css'
})
export class ListaAlbumesComponent implements OnInit{
    //propiedades
    albumes: Album[] = [];
    album = new Album();
    generos:GeneroAlbum[] = [];
  
    //constructor
    constructor(private albumService:AlbumService){}
  
    ngOnInit(): void {
      this.albumService.getAlbumes().subscribe(data=>{
        this.albumes = data.map(doc=>{
          return{
            ...doc.payload.doc.data() as Album,
            id:doc.payload.doc.id
          };
        })
      });
      this.generos = this.albumService.getGeneros();
    }
  
    insertarAlbum(){
      this.albumService.createAlbum(this.album);
      this.album = new Album();
    }
  
    selectAlbum(albumSeleccionado:Album){
      this.album = albumSeleccionado;
    }
  
    updateAlbum(){
      this.albumService.updateAlbum;
      this.album = new Album();
    }
  
    deleteAlbum(id:string){
      this.albumService.deleteAlbum(id);
      this.album = new Album();
    }
  
  }
  