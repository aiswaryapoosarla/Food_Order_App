export class Foods{
    id!:number;
    name!:string;
    price!:number;
    favourite:boolean=false;
    tags?:string[];
    imageUrl!:string;
    cooktime!:string;
    origins!:string[];
}