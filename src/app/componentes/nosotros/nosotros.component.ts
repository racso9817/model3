import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.sass']
})
export class NosotrosComponent implements OnInit {

  serviciosList = [
    {
    title: "Tiroides",
    desc: "Tratamiento de hipotiroidismo, hipertiroidismo, nódulos e incluso cáncer de tiroides. Además en nuestro instituto somos pioneros en la realización de biopsia de tiroides con citología in situ.",
    image: "assets/backgrounds/card1.jpg"
  },
  {
    title: "Tiroides",
    desc: "Tratamiento de hipotiroidismo, hipertiroidismo, nódulos e incluso cáncer de tiroides. Además en nuestro instituto somos pioneros en la realización de biopsia de tiroides con citología in situ.",
    image: "assets/backgrounds/card1.jpg",
  },
  {
    title: "Tiroides",
    desc: "Tratamiento de hipotiroidismo, hipertiroidismo, nódulos e incluso cáncer de tiroides. Además en nuestro instituto somos pioneros en la realización de biopsia de tiroides con citología in situ.",
    image: "assets/backgrounds/card1.jpg",
  },
  {
    title: "Tiroides",
    desc: "Tratamiento de hipotiroidismo, hipertiroidismo, nódulos e incluso cáncer de tiroides. Además en nuestro instituto somos pioneros en la realización de biopsia de tiroides con citología in situ.",
    image: "assets/backgrounds/card1.jpg",
  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
