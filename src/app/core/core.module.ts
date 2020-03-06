import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { CoreServiceModule } from './service.module';
import { ResponseInterceptor } from './response.interceptor';
import { BasicAuthRequestInterceptor } from './basic-auth-request.interceptor';
import { PreloadSelectedModulesList } from './selected-modules-list.preloader';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
    CoreServiceModule,
  ],
  providers: [
    PreloadSelectedModulesList,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthRequestInterceptor,
      multi: true
    }
  ],
  declarations: [],
  exports: []
})
export class CoreModule { }
