import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { Product } from 'src/app/app.component';
import { JsonDatabaseService } from 'src/app/services/json-database.service';
import { ChartType } from 'chart.js';

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
  holeProductsList:Product[] = [];
  products: Product[] = [];
  
  chartTypes:ChartType[] = [
    'bar',
    'doughnut',
    'pie',
    'polarArea',
    'radar'
  ];
  char_index:number = 0;

  @Input() cat_id:number = 1;

  constructor(private db:JsonDatabaseService) { 
  }

  ngOnInit(): void {  
   this.getData();
  }

async getData(){
  await this.db.GetAllProducts().subscribe(
      (data)=>{
        this.holeProductsList = data; 
        this.prepareData();
      },
      (err)=>console.log(err)
    )
}

prepareData(){
  this.products = this.holeProductsList.filter(prod => prod.CategorieId == this.cat_id)
  this.data = this.toLabels(this.products);
  this.getAvailable_SoldProducts();
  this.drawChart();
}
generateLightColorHex() {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  return color;
}
getAvailable_SoldProducts(){
  this.soldProducts = [];
  this.availableProducts = [];
  this.colors=[]
  this.products.forEach((product: Product) => {
    this.availableProducts.push(product.numberOfAvailableItems);
    this.soldProducts.push(product.numberOfSoldItems);
    this.colors.push(this.generateLightColorHex())
    //this.colors.push("#"+Math.floor(Math.random()*16777215).toString(16))
  });
}

toLabels(before:any){
  return before.map((ele:any)=>ele["Name"])
}
charTypeFunc(){
  return this.chartTypes[this.char_index];
}
changeId(index:number){
  this.char_index = index;
  this.soldChart.destroy();
  this.availableChart.destroy();
  if(index != 4)
    this.drawChart();
  else
    this.drawRadar();
}
drawChart(){
  console.log(this.charTypeFunc());
    this.soldChart = new Chart("ctx2", {
        type: this.charTypeFunc(),
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
        }, 
        plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sold Products Chart'
      }
    }
        }
    });
    this.availableChart = new Chart("ctx3", {
        type: this.charTypeFunc(),
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
        },
         plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Available Products'
      }
    }
        }
    });
    
  }



drawRadar(){
  this.soldChart = new Chart("ctx2", {
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
      responsive:true, plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sold VS Available Products'
      }
    }
    }
});
}
}


