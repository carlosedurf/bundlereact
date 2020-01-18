import React, { Component } from 'react';
import { PageHeader } from './styled';
import { Container } from '@material-ui/core';

import Menu from '../Menu';

class Header extends React.Component{

    render(){
        return(
            <PageHeader>
                <Container maxWidth="sim">
                    <div className="top">
                        <div className="logo">
                            [ LOGO ]
                        </div>
                        <div className="menu">
                            <Menu />
                        </div>
                    </div>
                </Container>
            </PageHeader>
        );
    }

}

export default Header;