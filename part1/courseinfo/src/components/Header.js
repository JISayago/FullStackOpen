import React from 'react'

/* */
function Header(props) {
  const name = props.curso.name;
  return (
    <h1>{name}</h1>
  )
}
export default Header;
