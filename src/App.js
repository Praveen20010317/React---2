import React, {useState} from 'react';
import './App.css';
import DropDown from './DropDown';
import OutsideClickHandler from 'react-outside-click-handler';

function App() {
    
const [option] = useState ([
    { label: 'Lime', value: 'lime' },
    { label: 'Lavender', value: 'lavender' },
    { label: 'Crimson', value: 'crimson' },
    { label: 'Darkblue', value: 'darkblue' },
    { label: 'Teal', value: 'teal' },
    { label: 'Rebecca Purple', value: 'rebeccapurple' },
    { label: 'Ghost White',value: 'ghostwhite' },
    { label: 'Aqua Marine', value: 'aquamarine' },
    { label: 'Alice Blue', value: 'aliceblue' }
]);
const [show, setShow] = useState(false);
const [color, setCol] = useState('lime');
function showDropDown() {
    if(show == true) {
        setShow(false);
    }else {
        setShow(true)
    } 
}
function disable() {
    setShow(false); 
}
function setColor(col) {
    setCol(col);
}
    return ( 
        <div>
            <h1>Colour Changer</h1>
            <div className="App" data-testid="block" id="block">
                <div data-testid="dropdownWrapper" id="dropdownWrapper">
                    <OutsideClickHandler onOutsideClick={() => {disable()}}>
                        <div data-testid="dropdownContainer" id="dropdownContainer" className="dropbtn" onClick={showDropDown}> DropDown</div>
                            <div  id="option-bg" style = {{display: show ? 'block' : 'none' }} >
                                    {option.map((opt) =>(
                                        <div data-testid="block" id="myDropdown" className="dropdown-content">
                                        <button id={opt.value} onClick={() =>setColor(opt.value)}>{opt.label}</button>
                                    </div>
                                    ))}
                            </div>
                    </OutsideClickHandler>
                </div>
            </div>
            <div id="box" style = {{backgroundColor: color}}></div>
        </div>
    );
}

export default App;