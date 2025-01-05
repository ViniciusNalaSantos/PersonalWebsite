import './bannerDropDown.css';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


function BannerDropDown() {
  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the Menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a className='banner-dropdown-link'
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        PORTUGUÊS
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">PORTUGUÊS</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default BannerDropDown;