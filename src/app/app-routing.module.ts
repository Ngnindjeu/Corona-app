import {RouterModule, Routes} from "@angular/router";
import {AllInfosComponent} from "./components/all-infos/all-infos.component";
import {NgModule} from "@angular/core";
import {HistoryComponent} from "./components/history/history.component";
import {HomeComponent} from "./components/home/home.component";

const appRoutes: Routes = [
  {path: '', redirectTo:'/history', pathMatch: 'full'},
  {path: 'all', component: AllInfosComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'history/:country', component: HistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
