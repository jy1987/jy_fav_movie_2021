import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";


const Header = styled.header`
    color : white;
    position : fixed;
    top:0;
    left:0;
    width : 100%;
    height: 50px;
    display:flex;
    align-items: center;
    background-color: #212121;
    box-shadow: 5px 0px 10px 5px #212121;
    `;

const List= styled.ul`
    display: flex;
    list-style : none;
    
  
    `;
const SLink = styled(Link)`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const Li = styled.li`
    width: 100px;
    text-align : center;
    border-bottom: 3px solid ${props=> props.current ? "yellow" : "transparent"};
    transition: border-bottom .5s linear;
    `;


export default withRouter(({location:{pathname}}) => (
    <Header>
        {console.log({location:{pathname}})}
      
    <List>
        <Li current={pathname==="/"}>
            <SLink to="/">Moviessss</SLink>
        </Li>
        <Li current={pathname==="/tv"}>
            <SLink to="/tv">TV</SLink>
        </Li>
        <Li current={pathname==="/search"}>
            <SLink to="/search">Search</SLink>
        </Li>
    </List>
</Header>
  
));



