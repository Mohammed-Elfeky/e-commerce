import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/app.component';
import { JsonDatabaseService } from 'src/app/services/json-database.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[] | undefined;
  holeProducts: Product[] = [];

  constructor(private myService:JsonDatabaseService) { 
    this.myService.GetAllProducts().subscribe(
        (data)=>{
          this.holeProducts = data;
          this.products = data;
          console.log(this.products);
        },
       (error)=>{console.log(error);}
    );
  }

  ngOnInit(): void {

  }
  confirmDelete = false;
  targetProduct = 0;
  deleteProduct(){
    console.log("delete pressed");
    this.myService.DeleteProduct(this.targetProduct).subscribe(
    () => {
        console.log(`Product has been Deleted`)
        window.location.reload();
    },
    (err) => console.log(err));
  }

  searchValue:string = "";
  FindMatch(){
    console.log("search "+this.searchValue);
    this.products = this.holeProducts.filter(prod=> 
      prod.Name.toLowerCase().includes(this.searchValue.toLowerCase()));
  }
  
  // ngOnChange(changes: SimpleChanges){
  //   if(!changes['product'].firstChange){
  //     console.log("products list updated");
  //   }
  // }
}
