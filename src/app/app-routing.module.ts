import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoComponent } from './components/crypto/crypto.component';

const routes: Routes = [
  {path: 'home', component: CryptoComponent},
  {path: '', component: CryptoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
