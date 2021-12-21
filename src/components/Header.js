import React from "react";
import { Carousel } from "react-bootstrap";
import Typed from "react-typed";
export const Header = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.multidots.com/wp-content/uploads/2020/01/code-quality-standard.png?quality=90"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>It's me ujjwol</h3>
            <h1>
              <Typed
                className="typed-text"
                strings={["Friend", "Dude", "Guy", "From Earth"]}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
