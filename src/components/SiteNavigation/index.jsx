import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../Container'

export const SiteNavigationBase = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem;
  
  ul {
    list-style: none;
    margin: 0 0 0 -1.5rem;
    padding: 0;

    li{
      display: inline-block;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      a {
        display: inline-block;
        padding: 0;
        color: black;
        text-decoration: none;
        border-bottom: 2px solid #aaa;

        &:hover {
          border-color: rebeccapurple;
        }
      }
    }
  }
`;

function SitesNavigation() {
  return(
      <SiteNavigationBase as="nav">
        <ul>
          <li>
            <NavLink to="/">Hjem</NavLink>
          </li>
          <li>
            <NavLink to="/om-mig">Om mig</NavLink>
          </li>
          <li>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </li>
          <li>
            <NavLink to="/blogg">Blogg</NavLink>
          </li>
        </ul>
      </SiteNavigationBase>
  )
}

export default SitesNavigation;