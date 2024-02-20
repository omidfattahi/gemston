import React from "react";

// this component use for input
// value is for input value
// onchange is use for do avtion base on input vhange
// type is the type of input
// layout_class is for define layout for input and label
// input_class is for deine style for input
// label is the name of label
// id is definr id for input
// step is use for input type range to define in one move how much we change range input value
// min is for input to define minimum value of input
// max is for input to define maximum value of input
// multiple is use for input type image to select multiple image

function Main_input_part(p: {
  value?: any;
  onchange?: any;
  type: string;
  layout_class?: string;
  input_class?: string;
  label?: any;
  id?: string;
  step?: number;
  min?: number;
  max?: number;
  multiple?: boolean;
}) {
  return (
    <div className={p.layout_class}>
      <label htmlFor={p.id}>{p.label}</label>
      <input
        id={p.id}
        value={p.value}
        onChange={p.onchange}
        className={p.input_class}
        type={p.type}
        step={p.step}
        max={p.max}
        min={p.min}
        multiple={p.multiple}
      />
    </div>
  );
}

export default Main_input_part;
