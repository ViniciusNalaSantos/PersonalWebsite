import './bannerDropDown.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function BannerDropDown() {
  return (
    <DropdownButton id="dropdown-basic-button" title="LÍNGUA" variant="secondary" data-bs-theme="dark">
      <Dropdown.Item href="#/action-1">PORTUGUÊS</Dropdown.Item>      
    </DropdownButton>
  )
}

export default BannerDropDown;