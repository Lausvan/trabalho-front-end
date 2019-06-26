import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss']

})
export class CadastroPacienteComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      idade: [null, Validators.required],
      sexo: [null, Validators.required],
      numeroQuarto: [null, Validators.required]
    });
  }

}
