import {Component} from 'angular2/core';
import {SidebarComponent} from "./sidebar.component";
import {WeatherListComponent} from "./weather/weather-list.component";
import {WeatherSearchComponent} from "./weather/weather-search.component";

@Component({
    selector: 'my-app',
    template: `
	<div class="row">
		<header>
			<h1>Angular 2 Weather</h1>
		</header>
	</div>
	<div class="row">
		<div class="col-md-3">
			<my-sidebar></my-sidebar>
		</div>
		<div class="col-md-6">
			<my-weather-search></my-weather-search>
		</div>
		<div class="col-md-3">
			<weather-list></weather-list>
		</div>
	</div>	
    `,
	directives: [WeatherListComponent, WeatherSearchComponent, SidebarComponent],
	styleUrls: ['src/css/app.css']
	
})

export class AppComponent {
	
}