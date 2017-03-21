import React from 'react';
import SearchContainer from './search_container';
import UserDropdownContainer from './user_dropdown_container';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let username;
    if (this.props.user) {
      username = this.props.user.username;
    }
    return (
      <header className='header'>
        <div id="general-header" className="header-wrapper">
          <div className="header-content">
            <div className='brand'>
              <img
                className='brand-icon'
                src="http://res.cloudinary.com/couchsmurfing/image/upload/v1489604248/logo_atjhje.jpg"
                />
              <div className="brand-name">CouchSmurfing</div>
            </div>

            <SearchContainer text="Explore Cities" />
            <div>
              <UserDropdownContainer />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
