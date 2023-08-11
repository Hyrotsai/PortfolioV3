import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  name: any
  email: any
  subject: any
  text: any
  sendEmail: boolean = false

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/mwkjglkv',
      { name: this.name, replyto: this.email, subject: this.subject, message: this.text },
      { 'headers': headers }).subscribe(
        () => {
          this.resetForm()
          this.sendEmail = true
          setTimeout(() => {
            this.sendEmail = false
          }, 3000);
        }
      );
  }

  resetForm() {
    this.name = ""
    this.email = ""
    this.subject = ""
    this.text = ""
  }
}
