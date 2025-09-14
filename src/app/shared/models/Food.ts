export class Food {
   

    // Constructor to initialize the Food object with an ID, typescript deoesn't have clue what should be a value of id Wehn we create a new instance of Food
    // So  we create a constructor that takes id as a parameter
    //constructor(id:number) {
       // this.id = id;
//    }

//but there is an easy way to do the same thing in typescript wen can add in exclamation mark after the property name
// This tells typescript that we are sure the value will be assigned later, it mandataory
// if we add ? mark after the property name it means that the property is optional 
// it's possible to set default value for the property
// like this id: number = 0; this way if we create a new instance of Food without providing an id it will default 
// for us we want the id to be mandatory because every food item should have an id
    id!: number;
    name!: string;
    price!: number;
    tags?: string[]; // optional property
    favorite: boolean = false; // optional property
    stars: number = 0; // optional property
    imageUrl!: string; // optional property
    origins!: string[]; // optional property
    cookTime!: string; // optional property
}