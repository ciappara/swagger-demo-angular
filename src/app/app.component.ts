import { API_BASE_URL, Client } from '../api/api-client';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ],
  providers: [
    Client,
    { provide: API_BASE_URL, useValue: 'https://localhost:7202' }
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-swagger-demo';
}


// export function apiConfig() {
//     return new Configuration({
//         withCredentials: true,
//         basePath: "https://localhost:7202",
//     });
// }