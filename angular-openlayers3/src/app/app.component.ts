import { Component } from '@angular/core';
import { OnInit} from '@angular/core';

import { CommonService } from './commomservice.service'
declare var ol: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
   	ol: any;
   	ngOnInit(): void {
    	


    }

	constructor( private commonService: CommonService ){
  }
	onClickMe() {

    console.log('You are my hero!');
	 this.commonService.notifyOther({option: 'onSubmit', value: 'From header'});
  }
}
