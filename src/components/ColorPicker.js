import React from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ color, onChange, label }) => (
  <div style={{ marginBottom: '20px' }}>
    <label>{label}</label>
    <SketchPicker 
      color={color}
      onChangeComplete={(newColor) => onChange(newColor.hex)}
    />
  </div>
);

export default ColorPicker;
