import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ProductService } from 'src/app/sevices/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html'
})
export class ProductDeleteComponent {
  productDeleteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productDeleteForm = this.fb.group({
      id: ['', Validators.required]
    });
  }

  // Ürünü silme işlemi
  deleteProduct() {
    const id = Number(this.productDeleteForm.value.id);
    if (!id) {
      alert("Lütfen geçerli bir ürün ID girin.");
      return;
    }

    // Silme onayı alıyoruz
    const confirmDelete = confirm("Bu ürünü silmek istediğinizden emin misiniz?");
    if (!confirmDelete) return;

    // Silme işlemi servisi çağırıyoruz
    this.productService.productDeleteS(id).subscribe({
      next: () => {
        alert('Ürün başarıyla silindi.');
        this.productDeleteForm.reset();

        // Silme işlemi sonrası ana sayfaya yönlendiriyoruz
        this.router.navigate(['/']); // Ana sayfaya yönlendirme
      },
      error: () => {
        alert('Silme işlemi başarısız oldu.');
      }
    });
  }
}
