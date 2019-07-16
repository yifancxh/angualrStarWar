import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { PeopleComponent } from './people/people.component';
import { FilmsComponent } from './films/films.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
   
  },
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'people',
    component: PeopleComponent,
  },
  {
    path: 'planets',
    component: PlanetsComponent,
  },
  {
    path: 'species',
    component: SpeciesComponent,
  },
  {
    path: 'starships',
    component: StarshipsComponent,
  },
  {
    path: 'vehicles',
    component: VehiclesComponent,
  }
];
// const routes: Routes = [
//   {path:"",component: CategoryComponent}
// ];

// const routesFilms: Routes = [
//   {path:"",component: FilmsComponent}
// ];

// const routesPeople: Routes = [
//   {path:"people",component: PeopleComponent}
// ];

// const routesPlanets: Routes = [
//   {path:"",component: PlanetsComponent}
// ];

// const routesSpecies: Routes = [
//   {path:"",component: SpeciesComponent}
// ];

// const routesStarships: Routes = [
//   {path:"",component: StarshipsComponent}
// ];

// const routesVehicle: Routes = [
//   {path:"",component: VehiclesComponent}
// ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })

// @NgModule({
//   imports: [RouterModule.forRoot(routesFilms)],
//   exports: [RouterModule]
// })

// @NgModule({
//   imports: [RouterModule.forRoot(routesPeople)],
//   exports: [RouterModule]
// })

export class AppRoutingModule { }
