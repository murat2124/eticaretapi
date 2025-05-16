import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/sevices/product.service';
import { StockMovementService } from 'src/app/sevices/stock-movement.service';

@Component({
  selector: 'app-stock-movements-component',
  templateUrl: './stock-movements-component.component.html',
  styleUrls: ['./stock-movements-component.component.css'],
})
export class StockMovementsComponentComponent implements OnInit {
  stockMovements: any[] = [];
  products: Product[] = [];

  selectedStockMovement: any = {
   
    ProductId: null,
    Quantity: null,
    Type: '',
    Date: '',
    ProductName: '',
  };

  oldStockQuantity: number | null = null;
  selectedProduct: Product | null = null;

    // Admin ve Silme şifreleri
  /*adminPassword: string = '1111';
  deletePassword: string = '1111';
  newAdminPassword: string = '';  // Yeni admin şifresi
  isAdmin: boolean = false;*/

  constructor(
    private stockMovementService: StockMovementService,
    private productService: ProductService,
    private router: Router,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllStockMovements();
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getallProducts().subscribe((response) => {
      this.products = response.data;
    });
  }
  deleteStockMovoment(id:number){
  this.stockMovementService.deleteStockMovementService(id).subscribe(response => {
    if (response.success) {
      // Silme işlemi başarılı ise, stok hareketlerini güncelle
      this.stockMovements = this.stockMovements.filter(item => item.id !== id);
      this.toastrService.success("Veri silme işlemi başarılı. " + response.message);
    } else {
      this.toastrService.error("Silme işlemi başarısız. " + response.message);
    }
  });
          

       

  }

  getAllStockMovements(): void {
    this.stockMovementService.getall().subscribe({
      next: (response) => {
        this.stockMovements = response;
        console.log(response)
      },
      error: (err) => {
        console.error('Stok hareketleri alınırken hata oluştu:', err);
      },
    });
  }

  // Ürün seçildiğinde formu doldur
  selectProductForStockUpdate(product: Product): void {
    this.selectedProduct = product;
    this.oldStockQuantity = product.stock;

    this.selectedStockMovement = {
      ProductId: product.id,
      Quantity: product.stock,
      Type: 'giriş',
      Date: new Date().toISOString().slice(0, 10),
      ProductName: product.name,
    };
  }

  updateStockMovement(): void {
    if (!this.selectedStockMovement?.ProductId) {
      console.error('Stok hareketi eksik.');
      return;
    }

    this.stockMovementService.update(this.selectedStockMovement).subscribe({
      next: () => {
        console.log('Stok hareketi güncellendi.');
        this.getAllStockMovements();

        this.selectedStockMovement = {
          
          ProductId: null,
          Quantity: null,
          Type: '',
          Date: new Date().toISOString().slice(0, 10),
          ProductName: '',
        };

        this.oldStockQuantity = null;
        this.selectedProduct = null;
      },
      error: (err) => {
        console.error('Güncelleme hatası:', err);
      },
    });
  }

  // Sayfayı yenilemek için
  refreshPage(): void {
    this.router
      .navigateByUrl('/stock/movements', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([this.router.url]);
      });
  }

// Admin şifresini değiştirme
  changeAdminPassword(): void {
  /*  if (!this.adminPassword) {
      alert('Lütfen geçerli bir şifre girin.');
      return;
    }
    this.stockMovementService.changePassword(this.adminPassword).subscribe({
      next: () => {
        alert('Admin şifresi başarıyla güncellendi.');
        this.adminPassword = ''; // Şifreyi sıfırlıyoruz
      },
      error: (err) => {
        console.error('Şifre güncellenirken hata oluştu:', err);
        alert('Şifre güncellenemedi. Lütfen tekrar deneyin.');
      },
    });
  }

  // Silme şifresi doğrulama ve stok hareketini silme
  confirmAndDelete(id:number): void {
   
   
    const password = prompt('Silme işlemi için şifreyi girin:');

   /* if (password !== this.deletePassword) {
      alert('Hatalı şifre. Silme işlemi iptal edildi.');
      return;
    }

    try {
      this.stockMovementService.delete(id).subscribe({
        next: () => {
          alert('Stok hareketi silindi.');
          this.getAllStockMovements(); // Listeyi güncelle
        },
        error: (err) => {
          console.error('Silme hatası:', err);
          alert('Silme işlemi başarısız oldu.');
        },
      });
    } catch (e) {
      console.error('Beklenmedik hata:', e);
      alert('Bir hata oluştu.');
    }
      */
  }
}



