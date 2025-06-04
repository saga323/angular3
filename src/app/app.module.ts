import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataBindingComponent } from './component/demo/data-binding/data-binding.component';
import { InputOutputComponent } from './component/demo/input-output/input-output.component';
import { ParintComponent } from './component/demo/input-output/parint/parint.component';
import { ChailComponent } from './component/demo/input-output/chail/chail.component';
import { PipesComponent } from './components/demo/pipes/pipes.component';
import { Trimpipe } from '../pipes/trim.pipe';
import { ReactivFormComponent } from './components/demo/reactiv-form/reactiv-form.component';
import { CustomPipePipe } from './components/demo/pipes/custom-pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { TestServicesComponent } from './components/demo/test-services/test-services.component';
import { UsersComponent } from './components/demo/users/users.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    DataBindingComponent,
    InputOutputComponent,
    ParintComponent,
    ChailComponent,
    PipesComponent,
    Trimpipe,
    ReactivFormComponent,
    CustomPipePipe,
    TestServicesComponent,
    UsersComponent,
    PostFormComponent,
     CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
        CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
