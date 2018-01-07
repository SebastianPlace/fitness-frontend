import * as React from 'react';
import styled from 'styled-components'

const NavBar = styled.div`
  display: 'flex';
  font-size: 1.5em;
  padding: 2em;
`

export default props => {
  const cssClasses = `Card ${props.className}`;
  return (
    <div className={cssClasses}>
      {props.children}
    </div>
  );
};
