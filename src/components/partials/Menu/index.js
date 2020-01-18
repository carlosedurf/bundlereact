import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuBody } from './styled';

export default class Menu extends React.Component{

    render(){
        return(
            <MenuBody>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/">Page Comum</Link></li>
                </ul>
            </MenuBody>
        );
    }

}