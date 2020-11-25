import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { AuthModule } from '../auth/auth.module';
import { CityGuideComponent } from './components/city-guide/city-guide.component';
import { ClientBrandComponent } from './components/client-brand/client-brand.component';
import { BookRoomComponent } from './components/book-room/book-room.component';
import { StoryBlogComponent } from './components/story-blog/story-blog.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { CategoryComponent } from './components/category/category.component';
import { MobilePromoComponent } from './components/mobile-promo/mobile-promo.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, SearchFormComponent, CityGuideComponent, ClientBrandComponent, BookRoomComponent, StoryBlogComponent, TestimonialComponent, CategoryComponent, MobilePromoComponent],
  imports: [
    SharedModule,
    AuthModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
