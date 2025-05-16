import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/sevices/product.service';
import { StockMovementService } from 'src/app/sevices/stock-movement.service';

@Component({
  selector: 'app-stock-movements-component',
  templateUrl: './stock-movements-component.component.html',
  styleUrls: ['./stock-movements-component.component.css'],
})
export class StockMovementsComponentComponent implements OnInit {
  stockMovements: any[] = []; // Tüm stok hareketleri
  products:Product[]=[];
selectedStockMovement: any = {
  ProductId: null,
  Quantity: null,
  Type: '',
  Description: '',
  Date: '',
  ProductName: ''
};
  constructor(private stockMovementService: StockMovementService,private productService:ProductService) {}

  ngOnInit(): void {
    this.getAllStockMovements();
    this.getallProdct();
  }
  getallProdct(){

      this.productService.getallProducts().subscribe(response=>{

        this.products=response.data;
      })


  }

  // Tüm stok hareketlerini getir
  getAllStockMovements(): void {
    this.stockMovementService.getall().subscribe({
      next: (response) => {
        this.stockMovements = response;
      },
      error: (err) => {
        console.error('Stok hareketleri alınırken hata oluştu:', err);
      },
    });
  }

  // Bir stok hareketini düzenlemek için seç
  selectStockMovement(stockMovement: any): void {
    this.selectedStockMovement = { ...stockMovement }; 
   Date: new Date().toISOString().slice(0, 10) // Bugünün tarihi
  }

  updateStockMovement(): void {
    if (!this.selectedStockMovement || !this.selectedStockMovement.ProductId) {
    console.error('Güncellenen stok hareketi eksik.');
    return;
  }

  this.stockMovementService.update(this.selectedStockMovement).subscribe({
    next: () => {
      console.log('Stok hareketi güncellendi.');
      this.getAllStockMovements(); // Listeyi yenile
      this.selectedStockMovement = { ProductId: null, Quantity: null, Type: null, Description: '', Date: new Date().toISOString().slice(0, 10) };
    },
    error: (err) => {
      console.error('Güncelleme hatası:', err);
    }
  });
  }

  selectProductForStockUpdate(product: any): void {
   this.selectedStockMovement = {
    ProductId: product.id,
    Quantity: null,
    Type: 'giriş',
    Description: '',
    Date: new Date().toISOString().slice(0, 10),
    ProductName: product.name // burası yeni
  };
  };


  onProductSelect(productId: number): void {
  // Ürün listesinden, seçilen ID'ye göre ürünü buluyoruz
  const selectedProduct = this.products.find(product => product.id === productId);

  if (selectedProduct) {
    this.selectedStockMovement.ProductName = selectedProduct.name;  // Ürün adını ekliyoruz
  } else {
    this.selectedStockMovement.ProductName = '';  // Eğer ürün bulunmazsa ad boş kalsın
  }
}
}

