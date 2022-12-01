import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  constructor(private http: HttpClient) {}
  url =''


  landingUrl = 'https://anime-facts-rest-api.herokuapp.com/api/v1';
  getApiData() {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        const formatted = [];
        for (const i in res) {
          formatted.push({ ...res[i], id: i });
        }
        return formatted;
      })
    );
  }

  addData(data: any) {
    return this.http.post(this.url, { ...data });
  }

  updateData(id: string, data: any) {
    console.log(id);
    return this.http.put(
      '',
      { ...data }
    );
  }

  removeData(id: string) {
    return this.http.delete(
     ''
    );
  }

  getAnimeData() {
    return this.http.get(this.landingUrl);
  };

  postApiData(data: any) {
    return this.http.post('http://localhost:4100', data);
  }
}
