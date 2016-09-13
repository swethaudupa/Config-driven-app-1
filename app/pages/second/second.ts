import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThirdPage } from '../third/third';
import { FourthPage } from '../fourth/fourth';
import { FifthPage } from '../fifth/fifth';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/second/second.html',
})
export class SecondPage {
		items: any;
		exitbutton: any={Buttontext: "exit"};

	constructor(private navCtrl: NavController, public http: Http) {
		this.navCtrl = navCtrl;

		this.http.get("assets/configFile.json")
    	.map((res) => res.json())
    	.subscribe( (res) => {
    		this.items = res.usermanagement.buttons;
    		this.exitbutton = res.usermanagement.exitbutton;
    	})
	}

	navHandler(destination){ this[destination](); }

	changeToThirdPage(){
		this.navCtrl.push(ThirdPage, {});
	}

	changeToFourthPage(){
		this.navCtrl.push(FourthPage, {});
	}

	changeToFifthPage(){
		this.navCtrl.push(FifthPage, {});
	}

}