import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    // preloadingStrategy: PreloadAllModules // with lazy loading
    // enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
