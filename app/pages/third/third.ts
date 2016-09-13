import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FourthPage } from '../fourth/fourth';
import { FifthPage } from '../fifth/fifth';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/third/third.html',
})
export class ThirdPage {
		items: any;
		exitbutton: any={Buttontext: "exit"};

	 constructor(private navCtrl: NavController, public http: Http) {
	  	this.navCtrl = navCtrl;

	  	this.http.get("assets/configFile.json")
    	.map((res) => res.json())
    	.subscribe( (res) => {
    		this.items = res.checktaskstatus.buttons;
    		this.exitbutton = res.checktaskstatus.exitbutton;
    	})

	}

		navHandler(destination){ this[destination](); }

		changeToFourthPage(){
			this.navCtrl.push(FourthPage, {});
		}

		changeToFifthPage(){
			this.navCtrl.push(FifthPage, {});
		}

}
