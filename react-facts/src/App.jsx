import reactLogo from './assets/react.svg'

function Header () {
  return (
    <header>
      <img 
        src={reactLogo} 
        alt="react-logo" 
        width="40px" />

        <nav>
          <ul className='nav'>
            <li className='nav-item'>Pricing</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Careers</li>
          </ul>
        </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main>
    <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>
        <p>© {new Date().getFullYear()} Scrimba Course Development. All rights reserved.</p>
      </small> 
    </footer>
  )
}
const App = () => {
  return (
    <>
    <Header />
    <MainContent />
    <Footer />
    </>
  
  )
}


export default App