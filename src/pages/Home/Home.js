import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PageHome } from './styled';

export default class Home extends React.Component{

    render(){
        return(
            <PageHome>
                HOME
                <br/><br/>
                <Link to="/sobre" className="button">Ir para Sobre</Link>
            </PageHome>
        );
    }

}