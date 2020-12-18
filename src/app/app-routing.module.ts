import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeComponent } from './trade/trade.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path:'',redirectTo: 'trade',pathMatch:'full'

  },
  {
    path:'trade',component:TradeComponent
  },
  {
    path:'upload',component:UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
