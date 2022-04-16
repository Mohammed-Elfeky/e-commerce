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
  doughnut:any;
  polarArea:any;
  radar:any;


  colors:any;
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
        this.drawdoughnut();
        this.drawPolarArea();
        this.drawRadar()
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
  this.colors=[]
  this.products.forEach((product: any) => {
    this.availableProducts.push(product.numberOfAvailableItems);
    this.soldProducts.push(product.numberOfSoldItems);
    this.colors.push("#"+Math.floor(Math.random()*16777215).toString(16))
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
                backgroundColor:this.colors
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
                backgroundColor:this.colors
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


drawdoughnut(){
  this.doughnut = new Chart("ctx4", {
    type: 'doughnut',
    data: {
        labels: this.data,
        datasets: [{
            label: '# of sold Products',
            data: this.soldProducts,
            backgroundColor:this.colors
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


drawPolarArea(){
  this.doughnut = new Chart("ctx5", {
    type: 'polarArea',
    data: {
        labels: this.data,
        datasets: [{
            label: '# of sold Products',
            data: this.soldProducts,
            backgroundColor:this.colors
        }]
    },
    options: {
      responsive:true,
      scales: {
        xAxes: {
            ticks: {
                // autoSkip: false,
                // maxRotation: 90,
                // minRotation: 90
            }
        }
    }
    }
});
}


drawRadar(){
  this.radar = new Chart("ctx6", {
    type: 'radar',
    data: {
        labels: this.data,
        datasets: [{
            label: '# of sold Products',
            data: this.soldProducts,
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        },
        {
            label: '# of available Products',
            data: this.availableProducts,
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }
      ]
    },
    options: {
      responsive:true,
      scales: {
        xAxes: {
            ticks: {
                // autoSkip: false,
                // maxRotation: 90,
                // minRotation: 90
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
