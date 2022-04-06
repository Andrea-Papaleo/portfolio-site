import React, { useContext } from "react";
import { SplashWrapper } from "./SplashElements";
import Logo from "../SVGComponents/Logo";
import AnimatedArrow from "../SVGComponents/AnimatedArrow";
import { colors } from "../../utilities";
import { WindowContext } from "../../contexts";
const Splash = () => {
  const [width, isTop] = useContext(WindowContext);

  return (
    <SplashWrapper>
      <Logo sideLength="40%" strokeColor={colors.kombu_green} />
      {isTop && (
        <AnimatedArrow
          className="splash-arrow"
          sideLength="70px"
          strokeColor={colors.cosmic_latte}
        />
      )}
    </SplashWrapper>
  );
};

export default Splash;
