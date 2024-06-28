export class Books{
    name!:string;
    id!:string;
    Owner!:string[];
    Address!:string;
    price!:number;
    availability!:string;
    shippingtime!:string;
    favorite:boolean = false;
    star :number = 0;
    tags?:string[];
    imageUrl!:string;
    aboutTheBook!:string;
    aboutTheOwner!:string;
    reviews!:string;
    
    

}