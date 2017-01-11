System.register(["angular2/core", "./weather-item.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_item_component_1;
    var WeatherListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_component_1_1) {
                weather_item_component_1 = weather_item_component_1_1;
            }],
        execute: function() {
            WeatherListComponent = (function () {
                function WeatherListComponent() {
                }
                WeatherListComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-list',
                        template: "\n\t\t<section class=\"weather-list\">\n\t\t\t<weather-item></weather-item>\n\t\t</section>\n\t",
                        directives: [weather_item_component_1.WeatherItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WeatherListComponent);
                return WeatherListComponent;
            }());
            exports_1("WeatherListComponent", WeatherListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvd2VhdGhlci93ZWF0aGVyL3dlYXRoZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVpEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxpR0FJVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztxQkFDbEMsQ0FBQzs7d0NBQUE7Z0JBSUYsMkJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVEQUVDLENBQUEiLCJmaWxlIjoid2VhdGhlci93ZWF0aGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7V2VhdGhlckl0ZW1Db21wb25lbnR9IGZyb20gXCIuL3dlYXRoZXItaXRlbS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnd2VhdGhlci1saXN0JyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJ3ZWF0aGVyLWxpc3RcIj5cclxuXHRcdFx0PHdlYXRoZXItaXRlbT48L3dlYXRoZXItaXRlbT5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHRgLFxyXG5cdGRpcmVjdGl2ZXM6IFtXZWF0aGVySXRlbUNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyTGlzdENvbXBvbmVudCB7XHJcblxyXG59Il19
