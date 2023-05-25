import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
const ImageCarousel = (props) => {
  const imageGallery = props.imageGallery || [];
  console.log(imageGallery);

  const [imageIdx, setImageIdx] = useState(0);
  console.log(imageGallery);
  const rightClick = () => {
    let nextImageidx;
    if (imageIdx == imageGallery.length - 1) {
      nextImageidx = 0;
    } else {
      nextImageidx = imageIdx + 1;
    }

    setImageIdx(nextImageidx);
  };

  const leftClick = () => {
    let nextImageidx;
    if (imageIdx == 0) {
      nextImageidx = imageGallery.length - 1;
    } else {
      nextImageidx = imageIdx - 1;
    }

    setImageIdx(nextImageidx);
  };

  return (
    <div>
      <div className="row-container">
        <button className="carousel-button" onClick={leftClick}>
          <AiFillCaretLeft className="carousel-button-icon" />
        </button>
        <img src={imageGallery[imageIdx].src} className="image"></img>
        <button className="carousel-button">
          <AiFillCaretRight
            onClick={rightClick}
            className="carousel-button-icon"
          />
        </button>
      </div>
    <p style={{textAlign:'right'}}>{imageGallery[imageIdx].caption}</p>
      <div className="bullet-container">
        {imageGallery.map((image, idx) => {
          return (
            <RxDotFilled
              className={idx == imageIdx ? "dot-icon-selected" : "dot-icon"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
