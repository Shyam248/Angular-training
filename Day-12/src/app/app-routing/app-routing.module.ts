import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintComponent } from '../pages/complaint/complaint.component';
import { DetailsComponent } from '../pages/product/details/details.component';
const routes: Routes=[
  {path:"Complaint", component:ComplaintComponent},
  {path:"details/:id", component:DetailsComponent}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
    
})
export class AppRoutingModule { }
