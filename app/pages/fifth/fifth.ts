import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'build/pages/fifth/fifth.html',
})
export class FifthPage {
	items: any={type: "Loading..."};

	constructor(public http: Http, private navCtrl: NavController) {
		this.navCtrl = navCtrl;
			
		this.http.get("assets/configFile.json")
		.map((res) => res.json())
		.subscribe(res => {
			this.items = res.exit;
    	})
	}

}
