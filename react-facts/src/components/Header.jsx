import reactLogo from '../assets/react.svg'
function Header () {
    return (
      <header>
        <img 
          src={reactLogo} 
          alt="react-logo" 
          width="40px" />
  
          <nav>
            <ul className='flex '>
              <li className='nav-item'>Pricing</li>
              <li className='nav-item'>About</li>
              <li className='nav-item'>Careers</li>
            </ul>
          </nav>
      </header>
    )
}

export default Header