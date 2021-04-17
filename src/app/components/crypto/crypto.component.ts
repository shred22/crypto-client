import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  public isEncrypted = false;
  public isDecrypted = false;
  public textToBeEncrypted: string = '';
  public textToBeDecrypted: string='';
  public encryptedText: string = '';
  public decryptedText: string = '';
  public alertMessage = 'Text Decrypted Successfully .. !!';
  constructor(public http: HttpClient) {
  }


  ngOnInit(): void {
  }

  onEncrypt(event: Event) {
    console.log("enc callsed "+event.target);
    const body=this.textToBeEncrypted;
this.http.post('http://localhost:8080/encrypt', body,  {responseType: 'text'})
.subscribe(
  response=> {
       console.log("POST completed sucessfully. The response received "+response);
       this.encryptedText = response;
   },
   error => {
       console.log("Post failed with the errors : "+ JSON.stringify(error));
   },
   () => {
       console.log("Post Completed");
   });

    if(this.textToBeEncrypted.length !=0) {
      this.isEncrypted = true;
    }
  }

  onDecrypt() {
    console.log("dec callsed");
    const body=this.textToBeDecrypted;
this.http.post('http://localhost:8080/decrypt', body,  {responseType: 'text'})
.subscribe(
  response=> {
       console.log("POST completed sucessfully. The response received "+response);
       this.decryptedText = response;
       console.log("DEc text is "+this.decryptedText);

       if(this.decryptedText.length >  0) {
        console.log("in if ")
        this.isDecrypted = true;
      }
   },
   error => {
       console.log("Post failed with the errors : "+ JSON.stringify(error));
   },
   () => {
       console.log("Post Completed");
   });


  }
}
