import React from "react";
// import { Button } from '@chakra-ui/react'

export const Button = ({ colorScheme, variant, size }) => {
  return (
    <button className={`btn ${colorScheme || "red"} ${variant || "ghost"} size`}>
      Button
    </button>
  );
};
