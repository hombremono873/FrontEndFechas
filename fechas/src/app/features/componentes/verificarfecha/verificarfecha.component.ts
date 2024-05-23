import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';

export interface DatosFechaVerificar {
  encabezado: string;
  fecha: string;  
}

@Component({
  selector: 'app-verificarfecha',
  standalone:true,
  imports: [ReferenciasMaterialModule, FormsModule],
  templateUrl: './verificarfecha.component.html',
  styleUrls: ['./verificarfecha.component.css'],
})
export class VerificarfechaComponent {
  public fechaEntrada: string = ""; // Declaración de la propiedad fechaEntrada
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public dato: DatosFechaVerificar,
    private dialogRef: MatDialogRef<VerificarfechaComponent>
  ) {}

  public aceptar() {
    // Aquí podrías realizar validaciones adicionales antes de cerrar el modal
    this.dialogRef.close(this.fechaEntrada);  // Devuelve la fecha ingresada
  }

}