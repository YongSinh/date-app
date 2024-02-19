import React, { useState } from 'react';
import anime from 'animejs'; // Import Anime.js library
import { Button } from 'react-bootstrap';
const RunawayButton = () => {
  const [buttonStyle, setButtonStyle] = useState({
    top: "56%",
    left: "47%"
  });

  const animateMove = (prop, pixels) => {
    anime({
      targets: buttonRef.current,
      [prop]: `${pixels}px`,
      easing: "easeOutCirc"
    });
  };

  const getRandomNumber = (num) => {
    return Math.floor(Math.random() * (num + 1));
  };

  const handleMouseOver = () => {
    const top = getRandomNumber(window.innerHeight - buttonRef.current.offsetHeight);
    const left = getRandomNumber(window.innerWidth - buttonRef.current.offsetWidth);
    setButtonStyle({
      top: top,
      left: left
    });
    animateMove("left", left);
    animateMove("top", top);
  };

  const buttonRef = React.createRef();

  return (
    <>
      <Button
      variant="danger"
      ref={buttonRef}
      id="runaway-btn"
      onMouseOver={handleMouseOver}
      onClick={handleMouseOver}
      style={{ position: 'absolute', top: buttonStyle.top, left: buttonStyle.left }}
    >
      No
    </Button>

    </>
  );
};

export default RunawayButton;
