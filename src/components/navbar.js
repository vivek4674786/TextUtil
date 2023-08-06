import React from 'react';

export default function navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg ${props.mode === 'light'?'clr_bg_orange_1':'clr_green_1'}`}>
      <div className='w-100 d-flex justify-content-between mr-2'>
        <h2 className='text-light m-2'>TextUtil : )</h2>
        <div className="form-check form-switch">
          <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <p className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.mode}</p>
        </div>
      </div>
    </nav>
  )
}
