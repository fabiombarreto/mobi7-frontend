import { NgModule, Component } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {
    MatAutocompleteModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [MatAutocompleteModule,MatInputModule],
    exports: [MatAutocompleteModule,MatInputModule]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

	displayedColumns: string[] = ['placa','ponto','tempo'];

  title = 'mobi7-frontend';
  dados = [
	{placa: 'ASD 3D40', ponto: '1', tempo: '10'},
	{placa: 'QWE 3D40', ponto: '2', tempo: '11'},
	{placa: 'ZXC 3D40', ponto: '3', tempo: '12'}];
	
  selected = 'option2';
  data1 = new Date();
  data2 = new Date();

  constructor(private _adapter: DateAdapter<any>) {

    this._adapter.setLocale('pt-br');
  }
}
