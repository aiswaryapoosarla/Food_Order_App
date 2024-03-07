import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/Tag';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllfoodbytag(tag:string): Foods[]{

    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
    

  }

  getAllTag():Tag[]{
    return [
      {name:'Breakfast',count:5},
      {name:'Dinner',count:2},
      {name:'Snack',count:1},

    ]
  }

  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Dosa',
        price:20,
        favourite:true,
        tags:['Breakfast'],
        imageUrl:'/assets/Dosa.jpg',
        cooktime:'10 min',
        origins:['India'],
      },
      {
        id:2,
        name:'Idly',
        price:15,
        favourite:false,
        tags:['Breakfast'],
        imageUrl:'/assets/Idly.jpg',
        cooktime:'10 min',
        origins:['AndhraPradesh'],
      },
      {
        id:3,
        name:'Pongal',
        price:25,
        favourite:false,
        tags:['Breakfast','Dinner'],
        imageUrl:'/assets/Pongal.jpg',
        cooktime:'30 min',
        origins:['Chennai'],
      },
      {
        id:4,
        name:'Puri',
        price:20,
        favourite:false,
        tags:['Breakfast','Dinner'],
        imageUrl:'/assets/Puri.jpg',
        cooktime:'15 min',
        origins:['Mumbai'],
      },
      {
        id:5,
        name:'Uttappam',
        price:20,
        favourite:false,
        tags:['Breakfast'],
        imageUrl:'/assets/Uttappam.jpg',
        cooktime:'15 min',
        origins:['Chennai'],
      },
      {
        id:6,
        name:'Vada',
        price:20,
        favourite:true,
        tags:['Snack'],
        imageUrl:'/assets/Vada.jpg',
        cooktime:'25 min',
        origins:['Telengana'],
      },
    ]
  }
}
