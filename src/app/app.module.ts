import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import {AppComponent} from './app.component';
import { FromComponent } from './forms.component';
import { FormPoster } from "./services/form-poster.service";

@NgModule({
    //Modules will come here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    //Components & pipe come here
    declarations:[
        AppComponent,
        FromComponent
    ],
    //First Component come here
    bootstrap:[
        AppComponent
    ],
    providers:[
        FormPoster
    ]
})

export class AppModule{

}