import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [


  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent }, 
  { path: 'contractors/:id', component: ContractorsComponent  },
  { path: 'orders/:id', component: OrdersComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContractorsComponent, OrdersComponent]
