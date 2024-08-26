import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-additons',
  templateUrl: './additons.component.html',
  styleUrl: './additons.component.css',
})
export class AdditonsComponent {
  nbr1 = signal(0);
  nbr2 = signal(0);

  resultat = computed(() => this.nbr1() + this.nbr2());
}
