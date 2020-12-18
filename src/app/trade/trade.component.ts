import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TradeService } from '../trade.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  isShown:boolean=false;
  value:any
  shareObj:any;
  tradeForm:FormGroup;
  constructor(private tr:TradeService, private fb:FormBuilder){
  }
  recieveData(event){
    this.shareObj = event;
    console.log('@output',this.shareObj)
  }
  ngOnInit() {
    this.tradeForm = this.fb.group({
      productName:['', [Validators.required]],
      attributes : this.fb.group({
        Material:['', [Validators.required]],
        // Color:[{value: '', disabled : true}],
        Color:['', [Validators.required]],
        Brand:['', [Validators.required]],
      }),
      image:['', [Validators.required]],
      minOrders:['', [Validators.required]],
      deliveryTime:['', [Validators.required]],
      location:['', [Validators.required]],
      productRating:['', [Validators.required]],
      productPrice:['', [Validators.required]]
    })
    this.getAll();
  }




  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('image', this.tradeForm.get('image').value);
    return input;
  }
  
  posts:any=[]
  getAll(){
    this.tr.getPosts().subscribe(res=>{
    this.posts=res;
    console.log('post',this.posts)
    })
  }
  obj:any=[]
  createTrade(){
    debugger
    const formModel = this.prepareSave();
    this.tr.createPost(this.tradeForm.value).subscribe(post=>{
      this.obj=post;
      console.log('post',this.obj);
      this.getAll();
      this.tradeForm.reset();
    }) 
    
  } 

  deleteTrade(id:number){
    debugger
    this.tr.deletePost(id).subscribe(res=>{
      console.log('del',res);
      this.getAll();
    }) 
  }
}
