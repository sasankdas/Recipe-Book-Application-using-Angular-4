import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router"
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./core/home/home.component";



const appRoutes : Routes = [
    
    {path : "shopping-list" , component : ShoppingListComponent},
    {path:"recipes", loadChildren:'./recipes/recipes.module#RecipesModule' },
    {path : "" , component : HomeComponent},
    
   ];
@NgModule({
imports : [RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})],
exports : [RouterModule],
})
export class AppRoutingModule{

}