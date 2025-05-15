import { Component, OnInit } from '@angular/core';
import { StockMovementService } from 'src/app/sevices/stock-movement.service';

@Component({
  selector: 'app-stock-movements-component',
  templateUrl: './stock-movements-component.component.html',
  styleUrls: ['./stock-movements-component.component.css']
})
export class StockMovementsComponentComponent implements OnInit {

  stockMovements: any[] = [];  // GetAll'den gelen veri
  selectedStockMovement: any = { ProductId: null, Quantity: null, Type: null, Description: '', Date: null };  // Güncellenen veri

  constructor(private stockMovementService: StockMovementService) { }

  ngOnInit(): void {
    this.getAllStockMovements();
  }

  getAllStockMovements(): void {
    this.stockMovementService.getall().subscribe((response) => {
      this.stockMovements = response.data;
    });
  }

  updateStockMovement(): void {
    this.stockMovementService.update(this.selectedStockMovement).subscribe((response) => {
      if (response.success) {
        alert('Stok hareketi güncellendi!');
        this.getAllStockMovements();
      } else {
        alert('Güncelleme başarısız!');
      }
    });
  }
  selectStockMovement(stockMovement: any): void {
  this.selectedStockMovement = { ...stockMovement }; // Bu satırla 'stockMovement'ı seçili hale getiriyorsunuz
  console.log('Seçilen Stok Hareketi:', this.selectedStockMovement);
}
}
