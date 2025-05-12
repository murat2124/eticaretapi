import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/sevices/product.service';
import { CategoryService } from 'src/app/sevices/category.service'; // CategoryService importu
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  filterText: string = "";
  filterCategoryId: number = 0;
  categories: any[] = []; // Kategoriler için bir değişken

  constructor(
    private productService: ProductService,
    private activatedRouted: ActivatedRoute,
    private categoryService: CategoryService,
    private toastrService:ToastrService 
  ) {}

  ngOnInit(): void {
    this.getCategories(); // Kategorileri al
    this.activatedRouted.params.subscribe((response) => {
      if (response["id"]) {
        this.getByCategoryId(response["id"]);
      } else {
        this.getProduct();
      }
    });
  }

  getProduct() {
    this.productService.getallProducts().subscribe((response) => {
      this.products = response.data;

      this.toastrService.info("verileriniz geldi...")
    });
  }

  getByCategoryId(categoryId: number) {
    this.productService.getByCategoryId(categoryId).subscribe((response) => {
      this.products = response.data;
    });
  }

  getCategories() {
    this.categoryService.getallCategorys().subscribe((response) => {
      this.categories = response.data; // Kategorileri al
    });
  }
}
