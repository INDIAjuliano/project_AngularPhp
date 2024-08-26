// import { Component, computed, signal } from '@angular/core';
import {
  Component,
  computed,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  nouvelElement = signal(''); // signal encapsulating a string
  maListe = signal<string[]>([]); // typage de signale en tableau de string
  nombreElements = computed(() => this.maListe().length);

  ajouterElement() {
    // ********update********* // qui retourne un tableau
    this.maListe.update((ancienneListe: string[]) => [
      ...ancienneListe,
      this.nouvelElement(),
    ]);
    this.nouvelElement.set('');

    // *****Using `mutate` to push the new element into the array directly****
    // this.maListe.mutate((listeActuelle: string[]) => {
    //   listeActuelle.push(this.nouvelElement());
    // });
  }

  tropDelements = effect(() => {
    if (this.maListe().length > 3) {
      alert("Attention vous avez beaucoup d'éléments!!");
    }
  });
}
