function Header() {
    return <nav className="#26a69a teal lighten-1">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">React Movies</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a 
            href="https://yulya163.github.io/movies-project/"
            target="blank" 
            rel="noreferrer"
          >Repo</a>
        </li>        
      </ul>
    </div>
  </nav>
}

export {Header};