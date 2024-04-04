import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/contries.service';
import { switchMap } from 'rxjs';

@Component({
	selector: 'app-country-page',
	templateUrl: './country-page.component.html',
	styles: ``,
})
export class CountryPageComponent implements OnInit {
	constructor(private activatedRoute: ActivatedRoute, private router: Router, private countriesService: CountriesService) {}

	ngOnInit(): void {
		this.activatedRoute.params.pipe(switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id))).subscribe((country) => {
			if (!country) {
				return this.router.navigateByUrl('');
			}
			console.log('tenemos un pais');
			return;
		});
	}
}
