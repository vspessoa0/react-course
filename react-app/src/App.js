import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <img src="/logo192.png" width="40px" />
      </nav>
      <h1>Fun facts about React</h1>
    </header>
  )
}

const List = () => {
  return (
    <ul>
      <li>Was first released in 2013</li>
      <li>Was orginally created by Jordan Walke</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  )
}

const Footer = () => {
  return (
    <footer>
      <small>© 2023 Pessoa development. All rights reserverd.</small>
    </footer>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <List />
      <Footer />
    </div>
  )
}

export default App