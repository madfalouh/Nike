import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function ImageComponent({ src, blur }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (src) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.src = src;
    }
  }, [src]);

  return (
    <div className="img" style={{
      position: 'relative', 
      overflow: "hidden",  
      width: "85%",
    }}>
      <Blurhash
        hash={blur}
        className="img"
        width="100%"
        height="100%"
        style={{
          opacity: isLoaded ? 0 : 1 ,
         transition: 'opacity 0.5s ease-in-out'
        }}
      />
      <img
        src={src}
        className="img"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: isLoaded ? 1 : 0 ,
         transition: 'opacity 0.5s ease-in-out' 

        }}
      />
    </div>
  );
}

export default ImageComponent;
