import React from "react";
import "./Slider.css";

const slidesInfoBackEnd = [
  {
    src: "https://cdn.pixabay.com/photo/2012/03/01/00/54/money-19818_960_720.jpg",
    alt: "Project 1",
    desc: "Facturación - Django",
    name: "https://facturacion-django-kev.herokuapp.com/api/docs",
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 2",
    desc: "Libreria - Flask",
    name: "https://libreria-flask-kevin.herokuapp.com/",
  },
  {
    src: "https://cdn.pixabay.com/photo/2014/12/21/23/41/market-575842_960_720.png",
    alt: "Project 3",
    desc: "Minimarket - Express",
    name: "https://minimarket-express-kev.herokuapp.com/docs/",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/07/14/20/54/cat-1517642_960_720.jpg",
    alt: "Project 3",
    desc: "Veterinaria - Django",
    name: "https://veterinaria-django-kev.herokuapp.com/",
  },
];

const slidesBackEnd = slidesInfoBackEnd.map((slide) => (
  <div className="slide-container">
    <a href={slide.name} target="_blank" rel="noreferrer">
      <img src={slide.src} alt={slide.alt} />
    </a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

const slidesInfoFrontEnd = [
  {
    src: "https://cdn.pixabay.com/photo/2013/05/28/18/23/dentist-114266_960_720.jpg",
    alt: "Project 1",
    desc: "Dental App",
    name: "https://react-dental-app.herokuapp.com/",
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 2",
    desc: "Manage",
    name: "https://kevleop.github.io/Trabajos-TECSUP/semana3/challenges/reto3%20-%20responsive%20landing%20page/index.html#",
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 3",
    desc: "Movies",
    name: "https://kevleop.github.io/Trabajos-TECSUP/semana7/dia2/02-peliculas.html",
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 3",
    desc: "Community Design",
    name: "https://kevleop.github.io/Trabajos-TECSUP/semana3/challenges/reto2-landingpage%20-%20practica/index.html",
  },
];

const slidesFrontEnd = slidesInfoFrontEnd.map((slide) => (
  <div className="slide-container">
    <a href={slide.name} target="_blank" rel="noreferrer">
      <img src={slide.src} alt={slide.alt} />
    </a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export { slidesBackEnd, slidesFrontEnd };
