import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Category, Product } from 'src/app/app.component';
import { JsonDatabaseService } from 'src/app/services/json-database.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  chart:any;

  data:any;

  products: Product[] = [];
  categories: Category[] = [];

  categorySales:number[] = [];

  constructor(private db:JsonDatabaseService) { }

  ngOnInit(): void {  
   this.getData();
  }

async getData(){
  await this.db.GetAllProducts().subscribe(
      (data)=>{
        this.products = data; 
      },
      (err)=>console.log(err)
    )
  await this.db.GetAllCategories().subscribe(
      (data)=>{
        this.categories = data;
        this.data = this.toLabels(data);
        this.calcCategorySales();
        this.drawChart();
      },
      (err)=>console.log(err)
    )
}

calcCategorySales(){
  // intialize Category Sales
    this.categories.forEach(cat => {
      this.categorySales[cat.id-1] = 0;
    });

    //calculate category sales
    this.products.forEach(prod => {
      //add each product sales to its category index
      this.categorySales[prod.CategorieId-1] += Number(prod.numberOfSoldItems*prod.price);
      //console.log(prod.numberOfSoldItems+" "+prod.id);
    });
}

toLabels(before:any){
  return before.map((ele:any)=>ele["Name"])
}

drawChart(){
    this.chart = new Chart("ctx1", {
        type: 'doughnut',
        data: {
            labels: this.data,
            datasets: [{
                label: '# of sold items in Category',
                data: this.categorySales,
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)'
    ],
    hoverOffset: 4
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

}
