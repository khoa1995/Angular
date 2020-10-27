import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HomeModule } from './home/home.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { DirectivesModule } from './directives/directives.module';
import { Baitap6Module } from './baitap6/baitap6.module';
//Module:là 1 group các component, thông thường module được đóng gói thành 1 chức năng cụ thể, hoặc 1 page
//vidu: HomepageModule quản lý các component: Header, Footer, Sidebar, Content,....


// @NgModule: khai báo cho angular biết AppModule là 1 module
// nếu không có @ngModule => AppModule chỉ là 1 class thông thường
@NgModule({
  //declarations: là nơi khai báo các component do module quản lý
  // AppComponent đang được quản lý bởi AppModule
  // Một component không thể đứng 1 mình, nó phải được quản lý bởi 1 module
  declarations: [
    //Angular ngoài các module do mình tự tạo, còn các module do angular cung cấp
    // Sử dụng router => RouterModule
    // sử dụng để gọi api => HTTPClientModule
    // imports: nơi khai báo các module muốn sử dụng
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    Baitap2Module,
    FormsModule,
    DirectivesModule,
    Baitap6Module
  ],
  // nơi khai báo các services
  providers: [],
  // chỉ khai báo ở module
  // Chỉ định component sẽ khởi chạy đầu tiên
  bootstrap: [AppComponent]
})
export class AppModule { }
