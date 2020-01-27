import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	displayedColumns: string[] = ['placa','ponto','tempo'];

  title = 'mobi7-frontend';
  dados = [
	{placa: 'ASD 3D40', ponto: '1', tempo: '10'},
	{placa: 'QWE 3D40', ponto: '2', tempo: '11'},
	{placa: 'ZXC 3D40', ponto: '3', tempo: '12'}];
	
	selected = 'option2';
}
