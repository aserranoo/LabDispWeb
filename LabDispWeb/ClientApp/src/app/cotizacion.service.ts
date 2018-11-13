import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CotizacionService {

  private endpoint = 'https://labdispmovil.azurewebsites.net/api/Cotizaciones/';
  //private endpoint = 'https://localhost:44355/api/Cotizaciones/';

  constructor(private http: Http) { }

  async getCotizacion(id: number): Promise<any> {
    const response = await this.http.get(this.endpoint+id.toString()).toPromise();
    return response.json();
  }
  async updateCotizacion(cotizacion: number, id: number, cot: any) {
    const request = await this.http.put(this.endpoint + id.toString(),
      {
        CotizacionId: id,
        PrecioCotizacion: cotizacion,
        ProveedorId: cot.proveedorId,
        Fecha: cot.fecha,
        EstatusId: 2
        //cotizaciones: {
        //  CotizacionId: id,
        //  Estatus: null,
        //  EstatusId: null,
        //  Fecha: null,
        //  PrecioCotizacion: cotizacion,
        //  Proveedor: null,
        //  ProveedorId: null,
        //  SolicitudArticulos: null
        //}
    }).toPromise();
  }
}
