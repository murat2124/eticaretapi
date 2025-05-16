import { Component, OnInit } from '@angular/core';
import { StockMovementService } from 'src/app/sevices/stock-movement.service';

@Component({
  selector: 'app-stock-movements-component',
  templateUrl: './stock-movements-component.component.html',
  styleUrls: ['./stock-movements-component.component.css'],
})
export class StockMovementsComponentComponent implements OnInit {
  stockMovements: any[] = []; // Tüm stok hareketleri
  selectedStockMovement: any = {
    ProductId: null,
    Quantity: null,
    Type: null,
    Description: '',
    Date: null,
  }; // Seçilen (düzenlenecek) stok hareketi

  constructor(private stockMovementService: StockMovementService) {}

  ngOnInit(): void {
    this.getAllStockMovements();
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
    this.selectedStockMovement = { ...stockMovement }; // Kopyasını al
    console.log('Düzenlenecek stok hareketi:', this.selectedStockMovement);
  }

  updateStockMovement(): void {
    if (!this.selectedStockMovement || !this.selectedStockMovement.ProductId) {
      console.error('Güncellenecek stok hareketi eksik.');
      return;
    }

    this.stockMovementService.update(this.selectedStockMovement).subscribe({
      next: (response) => {
        console.log('Stok hareketi başarıyla güncellendi:', response);
        this.getAllStockMovements(); // Listeyi yenile
      },
      error: (err) => {
        console.error('Stok hareketi güncellenirken hata oluştu:', err);
      },
    });
  }
}
