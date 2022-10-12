import { useState } from "react";
import "./Switch.css";
import styled from "styled-components";

const Switch = () => {
  const [isGps, setIsGps] = useState(false);
  const onClickToggle = () => {
    setIsGps(!isGps);
  };

  return 
  <div>
  </div>;
};

export default Switch;
