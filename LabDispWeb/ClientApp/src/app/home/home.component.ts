import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CotizacionService } from '../cotizacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  id: number;
  private sub: any;
  articulos: {
    solicitudArticulos: any[];
  };
  nuevoPrecio: any;
  constructor(private route: ActivatedRoute, private cotizacionService: CotizacionService) { }

  async ngOnInit() {
    this.sub = this.route.params.subscribe(async params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.articulos = await this.cotizacionService.getCotizacion(this.id);
      // In a real app: dispatch action to load the details here.
    });
  }
  public async enviarActualizacion(){
    await this.cotizacionService.updateCotizacion(this.nuevoPrecio, this.id, this.articulos);
  }
  
}
