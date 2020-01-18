import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PageSobre } from './styled';

export default class Sobre extends React.Component{

    render(){
        return(
            <PageSobre>
                SOBRE
                <br/><br/>
                <Link to="/" className="button">Ir para Home</Link>
            </PageSobre>
        );
    }

}