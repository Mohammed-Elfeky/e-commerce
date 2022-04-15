import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/app.component';
import { JsonDatabaseService } from 'src/app/services/json-database.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  touched:boolean=false;
  categories:any;
  constructor(private myService:JsonDatabaseService,private http: HttpClient) { }
  images:any=[];

  ngOnInit(): void {
    this.myService.GetAllCategories().subscribe(
      (data)=>{
        this.categories=data;
      },
      (err)=>console.log(err)
    )
  }



  ProductName:string="";
  price:number=Infinity;
  brand:string="";
  color:string="";
  AvailableItems:number=Infinity;
  CategoryId:number=0;
  priceBeforeSale:number=Infinity;
  Description:string="";
  inSale:string="";

  get ProductNameNotValid(): boolean {
    return (this.ProductName=='' 
            || this.ProductName.length>20)&&this.touched==true;
  }
  get priceNotValid(): boolean {
    return this.price<=0 && this.touched;
  }
  get brandNotValid(): boolean {
    return this.ProductName=='' && this.touched;
  }
  get AvailableItemsNotValid(): boolean {
    return this.AvailableItems <= 0 && this.touched;
  }
  get CategoryIdNotValid(): boolean {
    return this.CategoryId==0 && this.touched;
  }
  get priceBeforeSaleNotValid(): boolean {
    return (this.priceBeforeSale<=0 ||
           this.priceBeforeSale<this.price)&&this.touched;
  }
  get DescriptionNotValid(): boolean {
    return this.Description.length == 0 && this.touched;
  }

  whenSelectFile(e:any){
    this.images=e.target.files;
  }

  whenClick(){
    this.touched=true;


    //if valid 



    //fill product
    let product=new Product();
    product.Name=this.ProductName;
    product.price=this.price;
    product.brand=this.brand;
    product.color=this.color;
    product.numberOfAvailableItems=this.AvailableItems;
    product.CategorieId=this.CategoryId;
    product.priceBeforeSale=this.priceBeforeSale;
    product.Description=this.Description;
    product.inSale=Boolean(this.inSale);
    product.images=Array.from(this.images).map((ele:any)=>`assets/images/${ele.name}`)
      
    //add product to db
    this.myService.AddNewProduct(product).subscribe(
      ()=>console.log("done"),
      (err)=>console.log(err)
    )


    //save Images to server
    const formData = new FormData();
    for(let img of this.images){
      formData.append('commingImages', img);
    }

    this.http.post<any>('http://localhost:3005/upload', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
      );
  }


}
