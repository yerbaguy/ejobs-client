import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../info.service';
import { RootObject, SubCategory } from '../../RootObject';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 // public catsubcat:ICatSubCat[] = [];
  public rootObject:RootObject[] = [];
  public subCategories:SubCategory[] = [];
 // public subCategories:ICatSubCat[] = [];
 
  // public catsub:ICatSubCat;
   public categories_id:number;
   public categoriesName:string;
   public catId:number;
   public subCatName:string;

  name = 'Angular';
  id: number = 40;
  row: number = this.id / 4;
  row1 = Array(this.row).fill(1);
  
  id1 = Array(4).fill(0).map((_, index) => index + 1);
  row2 = Array(40).fill(1).map((_, index) => index + 1);


  departments = [

    { "id":1, "name": "lajksdf"},
    { "id":2, "name": "laksjdflk"},
    { "id":3, "name": "lkasdflkjas"},
    { "id":4, "name": "lkajsdflkjas"},
    { "id":5, "name": "lajsdflkjasdflj"},


  ]

  matrix = []

  constructor(private router: Router, private info: InfoService) {

    console.log("row1" + this.row1);
    console.log("id1" + this.id1);
    console.log("row2" + this.row2);

    var chunk_size = 4;
    var arr = this.row2;
    var groups = arr.map(function (e, i) {
      return i % chunk_size === 0 ? arr.slice(i, i + chunk_size) : null;
    })
      .filter(function (e) { return e; });
    this.matrix = groups;

   }

  ngOnInit() {

    this.catSubCat();
    this.subCat();
  }

  onSelect(department) {

    this.router.navigate(['/contractors', department.id])
   

  }

  

  catSubCat() {

    this.info.getCategories().subscribe (

        rootObject => {

                let sub = rootObject.slice();
                

                console.log(sub);


                     
               this.subCategories = rootObject[0].subCategories
               this.subCatName = this.subCategories[0].subCatName

               console.log(this.subCategories);
               console.log(this.subCatName);

         // mainsubcats = catsubcat;

                //  this.subCatName = catsubcat[0].subCatName

                //  console.log(this.subCatName);


                 
          


         // for (let i=0; catsubcat.length <= 5; i++) {
           for (let i in rootObject) {
         // this.categoriesName = catsubcat[0].categoriesName

          this.categoriesName = rootObject[i].categoriesName
          this.categories_id = rootObject[i].categories_id;
          this.catId = this.categories_id;

             console.log(this.categoriesName);
           }
         // this.categoriesName = catsubcat[i].categoriesName

          }

          

         // console.log(catsubcat);

         // console.log(this.categoriesName);
       // }
    )
  }

  onSelectCatSubCat(item) {

        console.log(item.categories_id)

   this.router.navigate(['/contractors', item.categories_id]);

  }

  subCat() {

    this.info.getCategories().subscribe(

        subCategories => {

                    

           //  this.subCatName = subCategories[0].subCatName

             console.log(this.subCatName);

        }
    )
  }

}
