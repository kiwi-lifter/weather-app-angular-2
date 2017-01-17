import {Component} from 'angular2/core';
import {SidebarComponent} from "./sidebar.component";
import {WeatherListComponent} from "./weather/weather-list.component";
import {WeatherSearchComponent} from "./weather/weather-search.component";

@Component({
    selector: 'my-app',
    template: `
		<header>
			<h1>Angular 2 Weather</h1>
		</header>
		<my-sidebar></my-sidebar>
		<my-weather-search></my-weather-search>
		<weather-list></weather-list>
    `,
	directives: [WeatherListComponent, WeatherSearchComponent, SidebarComponent],
	styleUrls: ['src/css/app.css']
	
})

export class AppComponent {
	
}