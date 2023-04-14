import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {cryptlib } from 'cryptlib';

import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");


@Component({
  selector: 'app-canvas-draw',
  templateUrl: './canvas-draw.component.html',
  styleUrls: ['./canvas-draw.component.scss']
})
export class CanvasDrawComponent implements OnInit , AfterViewInit {

  // @ViewChild('canvas') canvas : ElementRef;
  // @ViewChild('setColor') setColor : ElementRef;
  // @ViewChild('selWidth') selWidth : ElementRef;

  //  isDrawing = false;
  //  x = 0;
  //  y = 0;
  //  offsetX;
  //  offsetY;
  // context: any;

  constructor() {
    // const msg = 'LhCxwtcWp+9Qs3ew2+lSpi0LjSUjyTZclTVCp+U3JwA='
    // const key ='123456789123456789123456789876#@'

  // const iv = '',
  // cryptLib.ra
//  const iv = cryptlib.generateRandomIV(16)
//   const   key1 = cryptlib.getHashSha256(key, 32) //32 bytes = 256 bits
//    const  originalText = cryptlib.decrypt(msg, key1, iv);

  //  console.log(originalText);

  //  const hmacDigest = Base64.stringify(hmacSHA512(msg , key));


  //  console.log("hmacDigest ==>",hmacDigest);
  //  console.log(SHA256(msg));

  //  console.log(CryptoJS.HmacSHA1(msg, key));





// Encrypt
// var ciphertext = CryptoJS.AES.encrypt(msg, key).toString();

// Decrypt
// var bytes  = CryptoJS.SHA256(msg);
// var originalText = bytes.toString(CryptoJS.enc.Utf8);

// console.log(bytes); // 'my message'




   }
  ngAfterViewInit(): void {

    // this.context = this.canvas.nativeElement.getContext('2d');
    // document.addEventListener("DOMContentLoaded", this.startup);

  }

  ngOnInit(): void {

  }



  // startup() {

  //   this.canvas.nativeElement.addEventListener('touchstart', this.handleStart);
  //   this.canvas.nativeElement.addEventListener('touchend', this.handleEnd);
  //   this.canvas.nativeElement.addEventListener('touchcancel', this.handleCancel);
  //   this.canvas.nativeElement.addEventListener('touchmove', this.handleMove);

  //   this.canvas.nativeElement.addEventListener('mousedown', (e) => {
  //     this.x = e.offsetX;
  //     this.y = e.offsetY;
  //     this.isDrawing = true;
  //   });

  //   this.canvas.nativeElement.addEventListener('mousemove', (e) => {
  //     if (this.isDrawing) {
  //       this.drawLine(this.context, this.x, this.y, e.offsetX, e.offsetY);
  //       this.x = e.offsetX;
  //       this.y = e.offsetY;
  //     }
  //   });

  //   this.canvas.nativeElement.addEventListener('mouseup', (e) => {
  //     if (this.isDrawing) {
  //       this.drawLine(this.context, this.x, this.y, e.offsetX, e.offsetY);
  //       this.x = 0;
  //       this.y = 0;
  //       this.isDrawing = false;
  //     }
  //   });
  // }



  //  ongoingTouches = [];

  // handleStart(evt) {
  //   evt.preventDefault();
  //   const touches = evt.changedTouches;
  //   this.offsetX = this.canvas.nativeElement.getBoundingClientRect().left;
  //   this.offsetY = this.canvas.nativeElement.getBoundingClientRect().top;
  //   for (let i = 0; i < touches.length; i++) {
  //     this.ongoingTouches.push(this.copyTouch(touches[i]));
  //   }
  // }

  //  handleMove(evt) {
  //   evt.preventDefault();
  //   const touches = evt.changedTouches;
  //   for (let i = 0; i < touches.length; i++) {
  //     const color = this.setColor.nativeElement.value;
  //     const idx = this.ongoingTouchIndexById(touches[i].identifier);
  //     if (idx >= 0) {
  //       this.context.beginPath();
  //       this.context.moveTo(this.ongoingTouches[idx].clientX - this.offsetX, this.ongoingTouches[idx].clientY - this.offsetY);
  //       this.context.lineTo(touches[i].clientX - this.offsetX, touches[i].clientY - this.offsetY);
  //       this.context.lineWidth = this.selWidth.nativeElement.value;
  //       this.context.strokeStyle = color;
  //       this.context.lineJoin = "round";
  //       this.context.closePath();
  //       this.context.stroke();
  //       this.ongoingTouches.splice(idx, 1, this.copyTouch(touches[i]));  // swap in the new touch record
  //     }
  //   }
  // }

  //  handleEnd(evt) {
  //   evt.preventDefault();
  //   const touches = evt.changedTouches;
  //   for (let i = 0; i < touches.length; i++) {
  //     const color = this.setColor.nativeElement.value;
  //     let idx = this.ongoingTouchIndexById(touches[i].identifier);
  //     if (idx >= 0) {
  //       this.context.lineWidth = this.setColor.nativeElement.value;
  //       this.context.fillStyle = color;
  //       this.ongoingTouches.splice(idx, 1);  // remove it; we're done
  //     }
  //   }
  // }

  //  handleCancel(evt) {
  //   evt.preventDefault();
  //   const touches = evt.changedTouches;
  //   for (let i = 0; i < touches.length; i++) {
  //     let idx = this.ongoingTouchIndexById(touches[i].identifier);
  //     this.ongoingTouches.splice(idx, 1);  // remove it; we're done
  //   }
  // }

  //  copyTouch({ identifier, clientX, clientY }) {
  //   return { identifier, clientX, clientY };
  // }

  //  ongoingTouchIndexById(idToFind) {
  //   for (let i = 0; i < this.ongoingTouches.length; i++) {
  //     const id = this.ongoingTouches[i].identifier;
  //     if (id === idToFind) {
  //       return i;
  //     }
  //   }
  //   return -1;    // not found
  // }

  //  drawLine(context, x1, y1, x2, y2) {
  //   context.beginPath();
  //   context.strokeStyle = this.setColor.nativeElement.value;
  //   context.lineWidth = this.selWidth.nativeElement.value;
  //   context.lineJoin = "round";
  //   context.moveTo(x1, y1);
  //   context.lineTo(x2, y2);
  //   context.closePath();
  //   context.stroke();
  // }

  //  clearArea() {
  //     this.context.setTransform(1, 0, 0, 1, 0, 0);
  //     this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  // }



}
