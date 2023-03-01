import { useState } from "react";

const Button = ({onClick, selected}) => {
  
  return (
    <nav>
      <ul className="nav-list">
        <li><button className={selected === 'Users' ? 'nav-button selected' : 'nav-button'} onClick={onClick}>Users</button></li>
        <li><button className={selected === 'Posts' ? 'nav-button selected' : 'nav-button'} onClick={onClick}>Posts</button></li>
        <li><button className={selected === 'Comments' ? 'nav-button selected' : 'nav-button'} onClick={onClick}>Comments</button></li>
      </ul>
    </nav>
  )
}

export default Button
