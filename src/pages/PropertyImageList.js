import * as React from 'react';
import HouseOne from "../common/assets/img/house-1.jpeg";
import HouseTwo from "../common/assets/img/house-2.jpeg";
import HouseThree from "../common/assets/img/house-3.jpeg";
import HouseFour from "../common/assets/img/house-4.jpeg";
import HouseFiv from "../common/assets/img/house-5.jpeg";
import HouseSix from "../common/assets/img/house-6.jpeg";

import gallary1 from "../common/assets/img/gal-1.jpeg";
import gallary2 from "../common/assets/img/gal-2.jpeg";
import gallary3 from "../common/assets/img/gal-3.jpeg";
import gallary4 from "../common/assets/img/gal-4.jpeg";
import gallary5 from "../common/assets/img/gal-5.jpeg";
import Checkout from './Reservation/Checkout';

export default function PropertyImageList() {
  return (
    <>

      <section class="gallery">
            <figure class="gallery__item gallery__item--1"><img src={HouseThree} alt="Gallery image 1" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--2"><img src={gallary1} alt="Gallery image 2" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--3"><img src={gallary2} alt="Gallery image 3" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--4"><img src={gallary3} alt="Gallery image 4" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--5"><img src={gallary4} alt="Gallery image 5" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--6"><img src={gallary5} alt="Gallery image 6" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--7"><img src={gallary2} alt="Gallery image 7" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--8"><img src={gallary4} alt="Gallery image 8" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--9"><img src={gallary2} alt="Gallery image 9" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--10"><img src={gallary5} alt="Gallery image 10" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--11"><img src={gallary2} alt="Gallery image 11" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--12"><img src={HouseThree} alt="Gallery image 12" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--13"><img src={gallary5} alt="Gallery image 13" class="gallery__img"></img></figure>
            <figure class="gallery__item gallery__item--14"><img src={gallary2} alt="Gallery image 14" class="gallery__img"></img></figure>
        </section>


    <Checkout />

    </>

  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];

