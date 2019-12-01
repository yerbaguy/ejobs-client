import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
//import { ICatSubCat } from '../../CatSubCat';
import { Categories } from '../../Categories';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public categories:Categories[] = [];
  // public subCategories:ICatSubCat[] = [];
  
  // public catsub:ICatSubCat;
   public categoriesId:number;
   public id:number;
   public categoriesName:string;
   public subCatName:string;

  constructor(private info: InfoService, private router: Router) { }

  ngOnInit() {

    this.catSubCat()
  }

  catSubCat() {

    this.info.getCategories().subscribe (

        categories => {

          this.categories = categories;
          this.categoriesName = categories[0].categoriesName
          this.categoriesId = categories[0].categories_id

         // this.subCatName = catsubcat[0].subCatName;

          console.log(this.categories);
          console.log("subCatName" + this.subCatName);


         // for (let i=0; catsubcat.length <= 5; i++) {
           for (let i in categories) {
         // this.categoriesName = catsubcat[0].categoriesName

          this.categoriesName = categories[i].categoriesName

             console.log(this.categoriesName);
           }
         // this.categoriesName = catsubcat[i].categoriesName

          }

         // console.log(catsubcat);

         // console.log(this.categoriesName);
       // }
    )
  }

  onSelectCat(item) {


   this.router.navigate(['/contractors', item.categories_id])

  }

}
