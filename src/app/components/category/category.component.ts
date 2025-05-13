import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/sevices/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  
  constructor(private categoryService:CategoryService) {
  
    
  }

categorys:Category[]=[];
currentCategory:Category;



  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){

    this.categoryService.getCategories().subscribe(response=>{


      this.categorys=response.data;  

     
    })

  }

  setCurrentCategory(category:Category){

this.currentCategory=category;

  }

  listGroupCategory(category:Category){

    if(category==this.currentCategory){

        return "list-group-item active"

    }
    else{
      return "list-group-item"
    }

  }

}
