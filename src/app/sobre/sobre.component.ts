import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent {
  img = 'assets/Leo.jpeg'; 
  turma = 'ADS';
  turno = 'Manhã';
  unidade = 'Unidade Bosucesso';
  alunoNome = 'Leonardo Inacio Brito de Oliveira';
}



