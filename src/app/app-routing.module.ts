import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageListingComponent } from './manage-listing/manage-listing.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
	{ path: '', component: ListComponent},
	{ path:'manage-list', component:ManageListingComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
