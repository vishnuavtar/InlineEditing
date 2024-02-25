import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { City } from '../city';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cas-cade-drop',
  templateUrl: './cas-cade-drop.component.html',
  styleUrls: ['./cas-cade-drop.component.css']
})
export class CasCadeDropComponent implements OnInit{

  countries!: Country[];
  cities!: City[];

  constructor(private dropdownService: ProductService) { }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.dropdownService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
  }

  onCountryChange(countryId: string) {
    this.dropdownService.getCitiesByCountry(countryId).subscribe(cities => {
      this.cities = cities;
    });
  }

}
