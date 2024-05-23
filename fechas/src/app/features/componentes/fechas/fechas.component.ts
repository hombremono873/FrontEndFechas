import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { Fechas } from '../../../core/entidades/Fechas';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FechasService } from '../../servicios/fechas.service';
import { VerificarfechaComponent } from '../verificarfecha/verificarfecha.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-fechas',
  standalone: true,
  imports: [ReferenciasMaterialModule, NgxDatatableModule, FormsModule, MatDialogModule],
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.css']
})
export class FechasComponent {
  [x: string]: any;
  public fechas: Fechas[] = [];
  public columnas = [
    { name: "ID", prop: "id" },
    { name: "Nombre", prop: "nombre" },
    { name: "Día", prop: "dia" },
    { name: "Mes", prop: "mes" },
    { name: "Pascua", prop: "diaspascua" },
    { name: "IdTipo", prop: "idtipo" }
  ];
  public modoColumna = ColumnMode;
  public tipofecha = SelectionType;
  public fechaverificar: string = "";

  constructor(private fechaServicio: FechasService, private fechaDialogo: MatDialog) {
    this.listar();
  }

  public listar() {
    this.fechaServicio.listar().subscribe({
      next: (response: any) => {
        this.fechas = [];
        response.forEach((item: any) => {
          this.fechas.push({
            id: item.id,
            nombre: item.nombre,
            dia: item.dia,
            mes: item.mes,
            diaspascua: item.diasPascua ?? 0,
            idtipo: item.tipo.id ?? 0
          });
        });
      },
      error: (err: any) => {
        window.alert(err.message);
      }
    });
  }

  public agregar() {
    // Implementar lógica para agregar
  }

  public modificar() {
    // Implementar lógica para modificar
  }

  public eliminar() {
    // Implementar lógica para eliminar
  }

  public verificarEliminar() {
    // Implementar lógica para verificar y eliminar
  }

  public abrirModalVerificarFecha(): void {
    const dialogRef = this.fechaDialogo.open(VerificarfechaComponent, {
      width: '500px',
      height: '300px',
      data: { encabezado: 'Verificar Fecha', fecha: '' }
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.fechaverificar = result;
        this.verificarFecha(this.fechaverificar);
      }
    });
  }

  public verificarFecha(fecha: string): void {
    const [anio, mes, dia] = fecha.split('/').map(Number);
    this.fechaServicio.verificarFechaFestiva(anio, mes, dia).subscribe((resultado: string) => {
      this.fechaverificar = resultado;
      console.log('Resultado de la verificación:', this.fechaverificar);
    }, (error: any) => {
      console.error('Error al verificar la fecha:', error);
    });
  } 
}