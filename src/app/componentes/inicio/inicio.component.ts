import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  tooltipMsg = "Atención solo fines de semana"
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  servicios = [{
    name: "Tiroides",
    image: "https://jimdo-storage.freetls.fastly.net/image/268007748/c6cbf5e9-a095-4daa-83ae-5d974f8f96d7.png?quality=80,90&auto=webp&disable=upscale&width=2560&height=2560&trim=879,0,879,0",
    desc: "Tratamiento de hipotiroidismo, hipertiroidismo, nódulos e incluso cáncer de tiroides. Además en nuestro instituto somos pioneros en la realización de biopsia de tiroides con citología in situ, y el tratamiento de los nódulos de tiroides sin cirugía con la innovadora ablación con radiofrecuencia."
  },
  {
    name: "Sobrepeso",
    image: "https://jimdo-storage.freetls.fastly.net/image/268010991/3145bd1b-16e0-4566-bc3c-b795f66599c2.png?quality=80,90&auto=webp&disable=upscale&width=2560&height=2560&trim=879,0,879,0",
    desc: "Diagnostico y tratamiento de las alteraciones hormonales asociadas al exceso de adiposidad. Nuestros especialistas le ayudarán a bajar de peso desde la planificación nutricional y tratamiento de desordenes hormonales hasta la cirugía bariátrica."
  },
  {
    name: "Diabetes",
    image: "assets/servicios/diabetes.webp",
    desc: "El tratamiento integral de la diabetes es el objetivo de nuestros especialistas, tener todos los aspectos controlados ayudará a prevenir de forma efectiva las complicaciones asociadas."
  },
  {
    name: "Alteraciones Hormonales",
    image: "assets/servicios/hormo.webp",
    desc: "El manejo de enfermedades como síndrome de ovario poliquístico, adenomas de hipófisis, hiperprolactinemia, acromegalia, deficiencia de hormona de crecimiento, enfermedad de Cushing,"
  },
  {
    name:"Neuro Psicología",
    image: "assets/servicios/neuro.webp",
    desc: "En la medicina moderna el tratamiento integral de una persona y sus dolencias incluye no sólo la enfermedades somáticas sino también la salud mental y emocional."
  },
  {
    name: "Cardiología",
    image: "assets/servicios/cardio.webp",
    desc: "Tanto la diabetes como las enfermedades isquémicas del corazón son las principales causas de muerte en Ecuador, en nuestro instituto el trabajo coordinado de un equipo multidisciplinario en pro de su salud le ayudará a prevenir complicaciones."
  }]


  // Objeto para carrusel

  docList = [
    {
      name: 'Pizza',
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
    },
    {
      name: 'Hamburguesa',
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
    },
    {
      name: 'Hot Dog',
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
    },
    {
      name: 'Empanada',
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
    },
  ];

  //pagination variables
  page = 1;
  pageSize = 2;
  foodListLength = this.docList.length;

  responsiveOptions:any;


  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
   }

  ngOnInit(): void {
  }

}
