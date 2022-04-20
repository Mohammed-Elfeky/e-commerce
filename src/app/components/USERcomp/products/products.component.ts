import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/app.component';
import { JsonDatabaseService } from 'src/app/services/json-database.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categoryId:number = 0;
  products:Product[] = [];
  colors:any[]=[];
  constructor(private myService:JsonDatabaseService,private myRoute:ActivatedRoute) { 
    this.GetProducts();
    this.myRoute.params.subscribe( params => {
      if(params['id'] == 'search'){
        this.FindMatch(params['term'])
      }else{
        this.categoryId = params['id']
      }
    });
  }


  holeProductsList:Product[] = [];
  GetProducts(){
    this.myService.GetAllProducts().subscribe(
        (data)=>{
          this.holeProductsList=data;
          this.filterByCatId();
          // fill colors array
          this.holeProductsList.forEach(item=>{
            if(!this.colors.includes(item.color)){
              this.colors.push(item.color)
            }
          })
          console.log(this.colors)
    },
       (error)=>{console.log(error);}
    );
  }
  filterByCatId(){
    this.products = this.holeProductsList.filter(prod => prod.CategorieId == this.categoryId);
  }
  FindMatch(searchValue:string){
    console.log("search "+searchValue);
    // this.myService.GetProductByName(searchValue).subscribe(
    //    (data)=>{this.products=data;},
    //    (error)=>{console.log(error);}
    //  );
    console.log(`find match`);
    this.products = this.holeProductsList.filter(prod=> 
      prod.Name.toLowerCase().includes(searchValue.toLowerCase())
      )
  }


  getCategoryProducts(){
    this.myService.GetProductsInCatagory(this.categoryId).subscribe(
           (data)=>{this.products=data;},
           (error)=>{console.log(error);}
        )
  }
  getColorFromChild(color:string){
    console.log("event Products "+color);
    // this.myService.GetProductsInCatagoryByColor(this.categoryId,color).subscribe(
    //    (data)=>{this.products=data;},
    //    (error)=>{console.log(error);}
    //  )
    console.log(this.holeProductsList);
    this.products = this.holeProductsList.filter(prod => prod.color == color)
  }
  getPriceFromChild(price:number){
    // this.myService.GetProductsInCatagoryByPrice(this.categoryId,price).subscribe(
    //   (data)=>{this.products=data;},
    //   (error)=>{console.log(error);}
    // )
    this.products = this.holeProductsList.filter(prod => prod.price <= price)

  }
  
  ngOnInit(): void { }

}
