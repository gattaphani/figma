import { HttpClient } from '@angular/common/http';
import { Component, ElementRef,  ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  imageURL: string;
  uploadForm: FormGroup;

  constructor(public fb: FormBuilder,private http:HttpClient, private sanitize: DomSanitizer) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      image: [''],
      name: ['']
    })
  }

  ngOnInit(): void { }


  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      image: file.name
    });
    this.uploadForm.get('image')

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      console.log('imageURL',this.imageURL)
    }
    reader.readAsDataURL(file)
  }

  // Submit Form
  imagedata:any;
  submit() {
    debugger
    this.imagedata = this.uploadForm.value;
    // const form = new FormData();
    // form.append('image',this.imagedata)
    this.http.post('http://localhost:3000/posts', this.imagedata).subscribe(res=>{
      console.log('imagedata',this.imagedata)
    })
    console.log('imagedata',this.uploadForm.value)
  }
}

