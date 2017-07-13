import { Component } from '@angular/core';

@Component ({
    selector: 'app-header',
    template: `<nav class="navbar navbar-default">
        <div class="navbar-header">
            <a href="#" class="navbar-brand">{{cmpHeading}}</a>
        </div>
    </nav>`
})

export class HeaderComponent {
    cmpHeading:string = "My Shopping Cart App";
}