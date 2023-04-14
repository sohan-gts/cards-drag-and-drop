
import { Component, ElementRef, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';

@Component({
  selector: 'app-float-btn',
  templateUrl: './float-btn.component.html',
  styleUrls: ['./float-btn.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FloatBtnComponent implements OnInit {
  imgBase64: string;
  @ViewChild('ssWrapper') ssWrapper : ElementRef;
  constructor(public captureService: NgxCaptureService) {}

  ngOnInit(): void {}

  capture() {
    this.captureService
      .getImage(document.body, true)
      .pipe(
        tap((img) => {
          this.imgBase64 = img;
          console.log('this.imgBase64 ===>', this.imgBase64);

          this.appendIt();
        })
      )
      .subscribe();
  }

  appendIt() {

    const img = document.createElement(`img`);
    img.classList.add('ss-img')
    img.src = this.imgBase64;
    this.ssWrapper.nativeElement.appendChild(img)
  }
}
