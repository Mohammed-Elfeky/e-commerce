import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/app.component';
import { JsonDatabaseService } from 'src/app/services/json-database.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: any;

  constructor(private myService:JsonDatabaseService,private router: Router) { 
    this.products = this.myService.GetAllProducts();
  }

  ngOnInit(): void {

  }
  confirmDelete = false;
  targetProduct = 0;
  async deleteProduct(){
    console.log("delete pressed");
    await this.myService.DeleteProduct(this.targetProduct).subscribe(
      () => {
        console.log(`Product has been Deleted`)
        window.location.reload();
    },
    (err) => console.log(err));
   // this.notifyDelete.emit(this.employee.id);
  }

}
