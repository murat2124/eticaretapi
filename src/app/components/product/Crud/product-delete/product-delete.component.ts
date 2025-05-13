import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  
  // Reactive form
  productDeleteForm: FormGroup;

  // Constructor
  constructor(private fb: FormBuilder) {
    // Form oluşturuluyor
    this.productDeleteForm = this.fb.group({
      id: ['', Validators.required] // ID alanı zorunlu
    });
  }

  // Silme işlemi için form submit
  onDeleteSubmit(): void {
    if (this.productDeleteForm.valid) {
      const productId = this.productDeleteForm.get('id')?.value;
      // Burada silme işlemini gerçekleştirecek bir servis veya API çağrısı yapmalısınız.
      console.log(`Product with ID ${productId} will be deleted.`);

      // Örnek olarak başarılı bir silme işlemi için kullanıcıya bilgi verelim
      alert(`Product with ID ${productId} has been deleted successfully!`);
      
      // Formu sıfırlayabiliriz
      this.productDeleteForm.reset();
    }
  }
}
