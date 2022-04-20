import { Component, ComponentFactoryResolver, ComponentRef, 
    OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { ProductSalesComponent } from '../product-sales/product-sales.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  catId:number = 0;
  link:string = `./prodCatSales/${this.catId}`;

  constructor(private resolver: ComponentFactoryResolver) {

   }

  ngOnInit(): void {
  }

  componentCreated = false;
  changeId(id:number){
    if(id === this.catId && this.componentCreated){
      this.destroyComponent()
      this.catId = 0;
      this.componentCreated = false;
    }else{
      this.catId = id;
      this.link = `./prodCatSales/${this.catId}`;
      this.createComponent();
      this.componentCreated = true;
    }
  }


  /// dynamic create destroy component
  @ViewChild('TextContainer', {
        read: ViewContainerRef
    })
    alertContainer!: ViewContainerRef;
    componentRef!: ComponentRef < ProductSalesComponent > ;
    createComponent() {
        // Clear the container.
        this.alertContainer.clear();
        // Create a factory for ProductSalesComponent.
        const factory = this.resolver.resolveComponentFactory(ProductSalesComponent);
        // Create a component using the factory.
        this.componentRef = this.alertContainer.createComponent(factory);
        // Pass the value for @Input properties using a component reference instance method.
        this.componentRef.instance.cat_id = this.catId;
        console.log("productSales component created successfully");
    }
    destroyComponent() {
        // destroy a component using the componentRef.
        this.componentRef.destroy();
        console.log("component" + " " + "destroy successfully");
    }
}
