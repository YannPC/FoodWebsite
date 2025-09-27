export class Food{
    id!:number;
    name!:string;
    price!:number;
    imageUrl!:string;
    tags?:string[];
    favorite:boolean =false;
    stars:number = 0;
    origins!:string[];
    cookTime!:string;

}