import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { Category, Product } from 'src/app/app.component';
import { JsonDatabaseService } from 'src/app/services/json-database.service';

@Component({
  selector: 'app-product-sales',
  templateUrl: './product-sales.component.html',
  styleUrls: ['./product-sales.component.css']
})
export class ProductSalesComponent implements OnInit {

  soldChart:any;
  availableChart:any;

  data:any;

  availableProducts:number[]=[];
  soldProducts:number[]=[];
  products: Product[] = [];

  subscription:any;

  @Input() cat_id:number = 1;

  constructor(private db:JsonDatabaseService) { 
    if (this.soldChart)
    this.soldChart.destroy();
    if(this.availableChart)
    this.availableChart.destroy();
  }

  ngOnInit(): void {  
   this.getData();
  }

async getData(){
  this.subscription = await this.db.GetProductsInCatagory(this.cat_id).subscribe(
      (data)=>{
        this.products = data;  
        this.data = this.toLabels(data);
        this.getAvailable_SoldProducts();  
        this.drawChart();
      },
      (err)=>console.log(err)
  );
  // await this.db.GetAllProducts().subscribe(
  //     (data)=>{
  //       this.products = data;  
  //       this.data = this.toLabels(data);
  //       this.getAvailable_SoldProducts();  
  //       this.drawChart();
  //     },
  //     (err)=>console.log(err)
  //   )
}

getAvailable_SoldProducts(){
  this.soldProducts = [];
  this.availableProducts = [];
  this.products.forEach((product: any) => {
    this.availableProducts.push(product.numberOfAvailableItems);
    this.soldProducts.push(product.numberOfSoldItems);
  });
}

toLabels(before:any){
  return before.map((ele:any)=>ele["Name"])
}

drawChart(){
    this.soldChart = new Chart("ctx2", {
        type: 'bar',
        data: {
            labels: this.data,
            datasets: [{
                label: '# of sold Products',
                data: this.soldProducts,
            }]
        },
        options: {
          responsive:true,
          scales: {
            xAxes: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                }
            }
        }
        }
    });
    this.availableChart = new Chart("ctx3", {
        type: 'bar',
        data: {
            labels: this.data,
            datasets: [{
                label: '# of available Products',
                data: this.availableProducts,
            }]
        },
        options: {
          responsive:true,
          scales: {
            xAxes: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                }
            }
        }
        }
    });
    
  }


  //  ngOnDestroy() {
  //       this.subscription.unsubscribe()
  //       this.soldChart.destroy();
  //       this.availableChart.destroy();
  //   }
}
