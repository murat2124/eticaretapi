import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/sevices/category.service';
import { Category } from 'src/app/Models/category';
import { ProductService } from 'src/app/sevices/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService:ProductService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getCategories(); // Kategorileri al
  }

  // Formu oluşturma
  createForm() {
    this.productAddForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      createdDate: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  // Kategorileri API'den almak
  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data; // Kategoriler verisi
      },
      error: (err) => {
        console.error('Kategoriler alınamadı', err);
      },
    });
  }

  // Formu submit etme
  onSubmit() {
    if (this.productAddForm.valid) {
      const productModel = this.productAddForm.value;
      console.log('Form verisi  ');
      // Ürün ekleme işlemini burada gerçekleştirebilirsiniz.
    } else {
      console.warn('Form geçerli değil.');
    }
  }

productAdd() {
  let productModel = Object.assign({}, this.productAddForm.value);
  console.log("Gönderilen Ürün Verisi:", productModel);

  this.productService.productAddS(productModel).subscribe(
    (response) => {
      console.log("Ürün başarıyla eklendi:", response);
    },
    (err: HttpErrorResponse) => {
      console.error('Hata oluştu:', err);
    }
  );
}

}
