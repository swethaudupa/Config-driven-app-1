import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SecondPage } from '../second/second';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
        items: any;
 
  constructor(public http: Http, private navCtrl: NavController) {
		this.navCtrl = navCtrl;
 		
    this.http.get("assets/configFile.json")
    .map((res) => res.json())
    .subscribe(res => {
        this.items = res.loginpage;
    })

  }

    navHandler(destination){ this[destination](); }

  	changeToSecondPage(){
		this.navCtrl.push(SecondPage, {});
	}

}
