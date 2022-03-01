import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../Carousel/carousel.scss';
import { useNavigate } from "react-router-dom";

export default function CarouselComponent() {
  const navigate = useNavigate();
    return (
      <div className="carousel">
        <div className="carousel-wrapper">
          <Carousel infiniteLoop autoPlay showThumbs={false}>
            <div className="imagen">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fermento-2022.appspot.com/o/carousel%2Fqueso.jpg?alt=media&token=e9ccdde5-0aaf-46d2-bbf7-63f73abe355c"
                width="100%"
                height="300px"
                alt=""
              />
              <div className="centrado" onClick={() => navigate(`/category/3`)}>Quesos</div>
            </div>
            <div className="imagen">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fermento-2022.appspot.com/o/carousel%2Fcervezas.jpg?alt=media&token=b7603842-b836-4f4e-b268-bd048e249f6e"
                width="100%"
                height="300px"
                alt=""
              />
              <div className="centrado" onClick={() => navigate(`/category/2`)}>Cervezas</div>
            </div>
            <div className="imagen">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fermento-2022.appspot.com/o/carousel%2Fkefir.jpg?alt=media&token=cbd4bc0c-53b8-48ac-8d62-d68fe5c4e0ac"
                width="100%"
                height="300px"
                alt=""
              />
              <div className="centrado" onClick={() => navigate(`/category/1`)}>Probióticos</div>
            </div>
          </Carousel>
        </div>
      </div>
    );
}