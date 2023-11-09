
import React from "react";

const Link = ({ to, children }) => {
  const preventReload = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", to);
    const navigationEvent = new PopStateEvent("navigate");
    // this PopState event is an event that fires whenever 
    window.dispatchEvent(navigationEvent);
  };
  return (
    <a href={to} onClick={preventReload}>
      {children}
    </a>
  );
};

export default Link;