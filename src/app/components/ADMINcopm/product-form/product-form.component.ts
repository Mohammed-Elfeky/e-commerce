import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Product } from 'src/app/app.component';
import { JsonDatabaseService } from 'src/app/services/json-database.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  constructor(
    private myService:JsonDatabaseService,
    private http: HttpClient,
    myRoute:ActivatedRoute,
    private router: Router
    ) { 
      this.productId = myRoute.snapshot.params["id"];
  }

  ngOnInit(): void {

    //get select box data
    this.myService.GetAllCategories().subscribe(
      (data)=>{
        this.categories=data;
      },
      (err)=>console.log(err)
    )
    //get product data
    //and fill inputs
    if(this.productId){
      this.myService.GetProductDetails(this.productId).subscribe(
        (data:any)=>{
          this.ProductName=data[0].Name;
          this.price=data[0].price;
          this.brand=data[0].brand;
          this.color=data[0].color;
          this.AvailableItems=data[0].numberOfAvailableItems;
          this.CategoryId=data[0].CategorieId;
          this.priceBeforeSale=data[0].priceBeforeSale;
          this.Description=data[0].Description;
          this.inSale=data[0].inSale;
          this.images=data[0].images;
        },
        (err)=>console.log(err)
      )
    }

  }

  productId:any;
  touched:boolean=false;
  categories:any;
  images:any=[];
  
  //#region inputs
  ProductName:string='';
  price:number=0;
  brand:string="";
  color:string="";
  AvailableItems:number=0;
  CategoryId:number=0;
  priceBeforeSale:number=0;
  Description:string="";
  inSale:string="*";
  //#endregion

  //#region validation props
  get ProductNameNotValid(): boolean {
    return (this.ProductName=='' 
            || this.ProductName.length>20)&&this.touched==true;
  }
  get priceNotValid(): boolean {
    return this.price<=0 && this.touched;
  }
  get brandNotValid(): boolean {
    return this.brand=='' && this.touched;
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

  get inSaleNotValid(): boolean {
    return this.inSale == "*" && this.touched;
  }

  get imageNotValid(): boolean {
    return this.images.length==0 && this.touched;
  }
//#endregion
  


whenSelectFile(e:any){
    this.images=e.target.files;
  }

whenClick(){

  this.touched=true;



  if(this.productId){

    if(this.theFormIsValid()){
      this.createProductAndSendToDB()
      this.router.navigate(['/Admin/products']);
    }

  }else{

    if(this.theFormIsValid()&&(!this.imageNotValid)){
      this.createProductAndSendToDB()
      this.storeImagesOnSERVER()
      this.router.navigate(['/Admin/products']);
    }

  }


}


  theFormIsValid(){
    return !this.ProductNameNotValid &&
           !this.priceNotValid &&
           !this.brandNotValid &&
           !this.AvailableItemsNotValid &&
           !this.CategoryIdNotValid &&
           !this.priceBeforeSaleNotValid &&
           !this.DescriptionNotValid &&
           !this.inSaleNotValid
           ;
  }

  createProductAndSendToDB(){

    let product=new Product();
    product.Name=this.ProductName;
    product.price=this.price;
    product.brand=this.brand;
    product.color=this.color;
    product.numberOfAvailableItems=this.AvailableItems;
    product.CategorieId=this.CategoryId;
    product.priceBeforeSale=this.priceBeforeSale;
    product.Description=this.Description;
    product.inSale=JSON.parse(this.inSale);

    if(this.productId){
      product.images=this.images;
      this.myService.UpdateProductByID(this.productId,product).subscribe(
        ()=>console.log("updated"),
        (err)=>console.log(err)
      )
    }else{
      product.images=Array.from(this.images).map((ele:any)=>`assets/images/${ele.name}`)
      this.myService.AddNewProduct(product).subscribe(
        ()=>console.log("done"),
        (err)=>console.log(err)
      )
    }

  }

  storeImagesOnSERVER(){
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
