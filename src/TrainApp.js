import React, { useEffect, useRef } from "react";

const TrainApp = () => {
  const textInputRef = useRef("abrakadabra");

  const handleButton = () => textInputRef.current.focus();

  useEffect(() => textInputRef.current.focus(), []);

  console.log(textInputRef.current);
  
  return (
    <div>
      <input type="text" ref={textInputRef} />

      <button onClick={handleButton}>Focus</button>
    </div>
  );
};

export default TrainApp;
