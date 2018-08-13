import { PokedexService } from './services/pokedex.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component'
import {HeaderComponent} from './components/header/header.component';
import {ArticleComponent} from './components/article/article.component'


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    PesquisaComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
