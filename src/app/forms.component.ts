import {Component} from '@angular/core';
import {Employee} from "./models/employee.model";
import {FormPoster} from './services/form-poster.service';
import {NgForm} from '@angular/forms'

@Component({
    selector:'form-comp',
    templateUrl:'./forms.component.html'
})

export class FromComponent{
    title="Angular Forms";
    languages=["AngularJs", "NodeJs","ReactJs","MongoDb"]

    model = new Employee("John","methew","methew",1,"a@a.com",true,"male","AngularJs")

    hasCodeLangError=false

    constructor(private _formPoster:FormPoster){}

    firstToUpper(value:string){
        if(value.length>0)
            this.model.firstName = value.charAt(0).toUpperCase()+ value.slice(1)
        else
            this.model.firstName=value
    }

    validateCodelang(event){
        if(this.model.codeLang == "default"){
            this.hasCodeLangError=true
        }else{
            this.hasCodeLangError=false
        }
    }

    submitForm(form:NgForm){
        //console.log(this.model)
        this._formPoster.postEmployeeForm(this.model)
            .subscribe(
                (data) => console.log('success', data),
                (err) => console.log('error',err)
            )
    }
}

/*
ng-untouched  ng-pristine ng-valid
ng-touched    ng-dirty    ng-invalid

*/