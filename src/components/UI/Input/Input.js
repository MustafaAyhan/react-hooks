import React, { useEffect } from "react";
import { useImperativeHandle } from "react";
import { useRef } from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useImperativeHandle(ref, () => {
    return {
      focus: () => inputRef.current.focus(),
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        ref={inputRef}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
