import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintComponent } from '../pages/complaint/complaint.component';
const routes: Routes=[
  {path:"Complaint", component:ComplaintComponent}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
    
  
})
export class AppRoutingModule { }
