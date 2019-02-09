import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { ContactComponent } from './contact/contact.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { SignInComponent } from './sign-in/sign-in.component';



const routes: Routes = [
{ path: "", redirectTo:"home", pathMatch: "full"},
{ path: "home", component: HomeComponent },
{ path: "photographers", component: PhotographersComponent },
{ path: "contact", component: ContactComponent },
{ path: "gallery", component: GalleryComponent },
{ path: "post-create", component: PostCreateComponent},
{ path: "sign-in", component: SignInComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  

})
export class AppRoutingModule { }
