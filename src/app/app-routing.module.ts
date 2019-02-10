import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { ContactComponent } from './contact/contact.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { ProJoanComponent } from './pro-joan/pro-joan.component';
import { ProLeoComponent } from './pro-leo/pro-leo.component';
import { ProTommyComponent } from './pro-tommy/pro-tommy.component';



const routes: Routes = [
{ path: "", redirectTo:"home", pathMatch: "full"},
{ path: "home", component: HomeComponent },
{ path: "photographers", component: PhotographersComponent },
{ path: "contact", component: ContactComponent },
{ path: "gallery", component: GalleryComponent },
{ path: "post-create", component: PostCreateComponent},
{ path: "pro-joan", component: ProJoanComponent},
{ path: "pro-leo", component: ProLeoComponent},
{ path: "pro-tommy", component: ProTommyComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  

})
export class AppRoutingModule { }
