// import cx from 'classnames';
// import { Component } from "react";
import React, { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(100);
  const [isClicked, setIsClicked] = useState(false);

  const handleCount = () => {
    if (!isClicked) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div>
        <button
          className={`like-button ${isClicked ? "liked" : ""}`}
          onClick={handleCount}
        >
          Like | <span className="likes-counter">{count}</span>
        </button>
      </div>
      <style>{`
                    .like-button {
                        font-size: 1.5rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
    </>
  );
};

export default LikeButton;
