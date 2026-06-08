import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DeleteComponent } from './components/delete/delete.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { UpdateComponent } from './components/update/update.component';
import { CreateComponent } from './components/create/create.component';


const routes: Routes = [
    {path: '', redirectTo: 'fetch', pathMatch: 'full'},
    {path: 'create', component: CreateComponent},
    {path: 'update', component: UpdateComponent},
    {path: 'fetch', component: FetchComponent},
    {path: 'delete', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
