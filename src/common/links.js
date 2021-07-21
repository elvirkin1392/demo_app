import React from 'react';
import {List as MuiList} from '@material-ui/core';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const SNavLink = styled(NavLink)`
  text-decoration: none;
`;

const Links = ({list}) => {
  return (
    <MuiList>
      {list.map(({title, icon, link, onClick}) => (
        <SNavLink
          key={title}
          exact
          to={link}
          activeClassName={'selectedItem'}
          onClick={onClick}
        >
          <ListItem button key={title}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} style={{color: '#000', textDecoration: 'none'}}/>
          </ListItem>
        
        </SNavLink>
      ))}
    </MuiList>
  );
}

export default Links;