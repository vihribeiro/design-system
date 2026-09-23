import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiToastContainer } from 'ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiToastContainer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
