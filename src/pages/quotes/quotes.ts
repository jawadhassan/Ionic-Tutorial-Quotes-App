import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})

export class QuotesPage implements OnInit{

    quoteGroup : {category:string, quotes:Quote[],icon: string}
  
    constructor(public navParams: NavParams,
      private alertCtrl:AlertController) {
    }
  
    ngOnInit(){
      this.quoteGroup = this.navParams.data;
  
    }

    onAddToFavorite(selectedquote:Quote){
      const alert = this.alertCtrl.create({
        title: 'Add Quote',
        subTitle: 'Are you sure?',
        message: 'Are you sure you want to add quote?',
        buttons:[
          {
            text: 'Yes, go ahead',
            handler: () => {
              console.log("OK");
            }
          },
          {
            text: 'No, I changed my mind',
            role: 'cancel',
            handler: () => {
              console.log("Cancelled");
            }

          }
        ]
      });

      alert.present();
    }
}
