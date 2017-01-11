System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.shoppingListItems = [
                        { name: "Milk" },
                        { name: "Bread" },
                        { name: "Sugar" }
                    ];
                    this.selectedItem = { name: "" };
                }
                ShoppingListComponent.prototype.onItemClicked = function (shoppingListItem) {
                    this.selectedItem = shoppingListItem;
                };
                ShoppingListComponent.prototype.onAddItem = function (shoppingListItem) {
                    this.shoppingListItems.push({ name: shoppingListItem.value });
                };
                ShoppingListComponent.prototype.onDeleteItem = function () {
                    this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n\t\t<ul>\n\t\t\t<li *ngFor=\"#shoppingListItem of shoppingListItems\" \n\t\t\t(click)=\"onItemClicked(shoppingListItem)\"\n\t\t\t\n\t\t\t>{{ shoppingListItem.name }}</li>\n\t\t</ul>\n\t\t<hr>\n\t\t<input type=\"text\" [(ngModel)]=\"selectedItem.name\" #shoppingListItem>\n\t\t<button (click)=\"onDeleteItem()\">Delete Item</button><br>\n\t\t<input type=\"text\" #shoppingListItem>\n\t\t<button (click)=\"onAddItem(shoppingListItem)\">Add Item</button><br>\n\t\t\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7b0JBQ1Esc0JBQWlCLEdBQUc7d0JBQzFCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQzt3QkFDZCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7d0JBQ2YsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO3FCQUVmLENBQUM7b0JBQ0ssaUJBQVksR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFhbEMsQ0FBQztnQkFYQSw2Q0FBYSxHQUFiLFVBQWMsZ0JBQWdCO29CQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO2dCQUN0QyxDQUFDO2dCQUVELHlDQUFTLEdBQVQsVUFBVSxnQkFBZ0I7b0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFFRCw0Q0FBWSxHQUFaO29CQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BGLENBQUM7Z0JBckNGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSxxZEFhVDtxQkFDRCxDQUFDOzt5Q0FBQTtnQkFzQkYsNEJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHlEQW9CQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QnLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8dWw+XHJcblx0XHRcdDxsaSAqbmdGb3I9XCIjc2hvcHBpbmdMaXN0SXRlbSBvZiBzaG9wcGluZ0xpc3RJdGVtc1wiIFxyXG5cdFx0XHQoY2xpY2spPVwib25JdGVtQ2xpY2tlZChzaG9wcGluZ0xpc3RJdGVtKVwiXHJcblx0XHRcdFxyXG5cdFx0XHQ+e3sgc2hvcHBpbmdMaXN0SXRlbS5uYW1lIH19PC9saT5cclxuXHRcdDwvdWw+XHJcblx0XHQ8aHI+XHJcblx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkSXRlbS5uYW1lXCIgI3Nob3BwaW5nTGlzdEl0ZW0+XHJcblx0XHQ8YnV0dG9uIChjbGljayk9XCJvbkRlbGV0ZUl0ZW0oKVwiPkRlbGV0ZSBJdGVtPC9idXR0b24+PGJyPlxyXG5cdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3Nob3BwaW5nTGlzdEl0ZW0+XHJcblx0XHQ8YnV0dG9uIChjbGljayk9XCJvbkFkZEl0ZW0oc2hvcHBpbmdMaXN0SXRlbSlcIj5BZGQgSXRlbTwvYnV0dG9uPjxicj5cclxuXHRcdFxyXG5cdGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnQge1xyXG5cdHB1YmxpYyBzaG9wcGluZ0xpc3RJdGVtcyA9IFtcclxuXHRcdHtuYW1lOiBcIk1pbGtcIn0sXHJcblx0XHR7bmFtZTogXCJCcmVhZFwifSxcclxuXHRcdHtuYW1lOiBcIlN1Z2FyXCJ9XHJcblx0XHJcblx0XTtcclxuXHRwdWJsaWMgc2VsZWN0ZWRJdGVtID0ge25hbWU6IFwiXCJ9O1xyXG5cdFxyXG5cdG9uSXRlbUNsaWNrZWQoc2hvcHBpbmdMaXN0SXRlbSl7XHJcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IHNob3BwaW5nTGlzdEl0ZW07XHJcblx0fVxyXG5cdFxyXG5cdG9uQWRkSXRlbShzaG9wcGluZ0xpc3RJdGVtKXtcclxuXHRcdHRoaXMuc2hvcHBpbmdMaXN0SXRlbXMucHVzaCh7bmFtZTogc2hvcHBpbmdMaXN0SXRlbS52YWx1ZX0pO1xyXG5cdH1cclxuXHRcclxuXHRvbkRlbGV0ZUl0ZW0oKXtcclxuXHRcdHRoaXMuc2hvcHBpbmdMaXN0SXRlbXMuc3BsaWNlKHRoaXMuc2hvcHBpbmdMaXN0SXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkSXRlbSksMSk7XHJcblx0fVxyXG59Il19
