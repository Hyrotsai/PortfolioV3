import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetlifyService {

  constructor(private httpClient: HttpClient) { }

  getMyDeply() {
    const tokenNetlify = "EeUtrBeeV4tXeu-jyIV5awoKBPqy5Nv3CK_mII4YBXg"
    const URL = 'https://api.netlify.com/api/v1/sites'
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenNetlify}`
      })
    }

    return this.httpClient.get(URL, headers)
  }
}

