import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Button matrial
import { MatButtonModule } from '@angular/material/button';

//Input Matrial module
import { MatInputModule } from '@angular/material/input';

//Menu Matrial module
import { MatMenuModule } from '@angular/material/menu';

//Toolbar Matrial module
import { MatToolbarModule } from '@angular/material/toolbar';

//Icon Matrial module
import { MatIconModule } from '@angular/material/icon';

//Card Matrial module
import { MatCardModule } from '@angular/material/card';

//Form-Field Matrial module
import { MatFormFieldModule } from '@angular/material/form-field';

//DatePicker Matrial module
import { MatDatepickerModule } from '@angular/material/datepicker';

//Radio Matrial module
import { MatRadioModule } from '@angular/material/radio';

//Select Matrial module
import { MatSelectModule } from '@angular/material/select';

//SlideToggle Matrial module
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

//Table Matrial module
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialinreactiveformComponent } from './angularmaterialinreactiveform/angularmaterialinreactiveform.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularmaterialinreactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatOptionModule,
    MatNativeDateModule,
    BrowserModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AngularmaterialinreactiveformComponent],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatOptionModule,
    MatNativeDateModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class AppModule { }
