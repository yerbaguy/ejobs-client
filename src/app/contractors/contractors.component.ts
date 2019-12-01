import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InfoService } from '../info.service';
//import { ICatSubCat } from '../../CatSubCat';
import { RootObject } from '../../RootObject';
import { max } from 'rxjs/operators';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css']
})
export class ContractorsComponent implements OnInit {

  public rootObject:RootObject[] = [];
 // public subCategories:ICatSubCat[] = [];
 
 // public catsub:ICatSubCat;
  public categoriesId:number;
  public id:number;
  public categoriesName:string;
  public subCatName:string;


  config: any;
  collection = { count: 60, data: [] };

  departments = [

    { "id":1, "name": "lajksdf"},
    { "id":2, "name": "laksjdflk"},
    { "id":3, "name": "lkasdflkjas"},
    { "id":4, "name": "lkajsdflkjas"},
    { "id":5, "name": "lajsdflkjasdflj"},


  ]


  public departmentId;
  constructor(private route: ActivatedRoute, private info: InfoService) {

    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
   }

  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;


    this.catSubCat();
    this.subCat();

  }



  catSubCat() {

    this.info.getCategories().subscribe (

        rootObject => {

          this.rootObject = rootObject;
          this.subCatName = rootObject[0][0].subCategories.subCatName
         // this.subCatName = catsubcat[0].subCatName;

          console.log(this.rootObject);
          console.log("subCatName" + this.subCatName);


         // for (let i=0; catsubcat.length <= 5; i++) {
           for (let i in rootObject) {
         // this.categoriesName = catsubcat[0].categoriesName

          this.categoriesName = rootObject[i].categoriesName

             console.log(this.categoriesName);
           }
         // this.categoriesName = catsubcat[i].categoriesName

          }

         // console.log(catsubcat);

         // console.log(this.categoriesName);
       // }
    )
  }


  subCat() {

    this.info.getCategories().subscribe(

      subCategories => {

            this.subCatName = subCategories[0][0].subCatName


            console.log(this.subCatName);
      }


    )
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
