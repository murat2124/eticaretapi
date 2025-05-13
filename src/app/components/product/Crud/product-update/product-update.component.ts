import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/sevices/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  productUpForm: FormGroup;
products:Product[]=[]


  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private productSerive:ProductService,private toastrService:ToastrService
    
  ) {}
  ngOnInit(): void {
    this.createProductUpForm();
    this.getProducts();
  }

  createProductUpForm() {
    const today = formatDate(new Date(), 'yyyy-MM-DD', 'en');
    this.productUpForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      createdDate: [today, Validators.required],
      categoryId: ['', Validators.required],
    });
  }
  onSubmit() {
  if (this.productUpForm.valid) {
    console.log("Form Data:", this.productUpForm.value);
    // Buraya veri gönderme işlemi eklersin
  } else {
    this.productUpForm.markAllAsTouched(); // Hatalı alanları göster
    console.warn("Form is invalid!");
  }
 
}

 getProducts(){

      this.productSerive.getallProducts().subscribe(respnse=>{


        this.products=respnse.data;
        this.toastrService.info("kayıtlar geldi")


      })

    
  }
}
