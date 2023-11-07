import React, { useRef, useState, useEffect } from 'react';
import './Carousel.css'; // Ensure your CSS is configured properly

const Carousel = ({ children }) => {
  const carouselRef = useRef(null);
  const totalItems = React.Children.count(children);
  const itemWidth = 200; // Set the width of your items
  const [offset, setOffset] = useState(0);

  // Create an array of items to display, duplicating the start and end for the loop
  const items = [
    ...React.Children.toArray(children).slice(-1),
    ...React.Children.toArray(children),
    ...React.Children.toArray(children).slice(0, 1),
  ];

  const updatePosition = (position) => {
    carouselRef.current.style.transition = 'none'; // Disable the transition
    carouselRef.current.style.transform = `translateX(-${position}px)`; // Move to the new position
  };

  // Update the position without animation when we reach the clone
  useEffect(() => {
    if (offset === 0) {
      const newPosition = itemWidth * totalItems;
      updatePosition(newPosition);
      setOffset(newPosition);
    } else if (offset === itemWidth * (totalItems + 1)) {
      updatePosition(itemWidth);
      setOffset(itemWidth);
    }
  }, [offset, totalItems]);

  // Auto-scroll the carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => prevOffset + itemWidth);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // When the transition ends, check if we need to "jump" to the clone's position
  const handleTransitionEnd = () => {
    if (offset === 0) {
      carouselRef.current.style.transition = 'none'; // Disable the transition
      const newPosition = itemWidth * totalItems;
      updatePosition(newPosition);
      setOffset(newPosition);
    } else if (offset === itemWidth * (totalItems + 1)) {
      carouselRef.current.style.transition = 'none'; // Disable the transition
      updatePosition(itemWidth);
      setOffset(itemWidth);
    }
  };

  // Move the carousel to the next item
  const nextItem = () => {
    if (offset < itemWidth * (totalItems + 1)) {
      carouselRef.current.style.transition = 'transform 0.5s ease'; // Enable the transition
      setOffset((prevOffset) => prevOffset + itemWidth);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-inner"
        ref={carouselRef}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {items.map((child, index) => (
          <div key={index} className="carousel-item" style={{ width: `${itemWidth}px` }}>
            {child}
          </div>
        ))}
      </div>
      <button onClick={nextItem}>Next</button>
    </div>
  );
};

export default Carousel;
