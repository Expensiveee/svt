import * as S from "./styles";
import { useState, useEffect } from "react";
import Link from "next/link";

const useDebouncedRippleCleanUp = (rippleCount, cleanUpFunction) => {
    useEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, 300 * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, cleanUpFunction]);
};

export function Ripple() {
  const [rippleArray, setRippleArray] = useState([]);

  useDebouncedRippleCleanUp(rippleArray.length, () => {
    setRippleArray([]);
  });

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <S.Ripple onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, i) => {
          return (
            <span
              key={i}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </S.Ripple>
  );
}

export const Button = (props) => {
  const theme = themes.find(({ name }) => name === props.theme);

  if (props.href) {
    return (
      <Link passHref href={props.href}>
        <a target={"_blank"}>
          <S.ButtonContent {...theme} {...props}>
            <Ripple />
            {props.children}
          </S.ButtonContent>
        </a>
      </Link>
    );
  } else {
    return (
      <S.ButtonContent {...theme} {...props}>
        <Ripple />
        {props.value}
      </S.ButtonContent>
    );
  }
};

const themes = [
  { name: "primary", bgColor: "#ff7f00", color: "white" },
  { name: "secondary", bgColor: "rgba(0, 0, 0, 0.1)", color: "white" },
];

export default Button;
