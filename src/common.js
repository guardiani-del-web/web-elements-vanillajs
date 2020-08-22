import React from "react";

export const useEventListener = (target, type, listener) => {
  console.log(target,type,listener)
  document.addEventListener(type, listener);
};
