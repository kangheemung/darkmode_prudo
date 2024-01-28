import React,{useState} from 'react'

function ColorSwitcher() {
    const [bgColor, setBgColor] = useState('');
    function handleColorChange(event) {

        setBgColor(event.target.value);
      }
    return (
   <div style={{ backgroundColor: bgColor, width: '100px', height: '100px' }}>
        <select onChange={handleColorChange}>

            <option value="">Select a color</option>

            <option value="red">Red</option>

            <option value="blue">Blue</option>

            <option value="green">Green</option>

            <option value="yellow">Yellow</option>

        </select>
    </div>
  )
}

export default ColorSwitcher
