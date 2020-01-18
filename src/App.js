import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

// FILE CONFIG
import Config from './Config';

// style
import './app.css';

// Coponents
import { MainContainer } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

// PAGES
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';

class App extends React.Component{

    render(){
        return(
            <BrowserRouter basename={Config.BASE_URl}>
                <MainContainer>
                    <Header />
                    <Container maxWidth="sim">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/sobre" component={Sobre} />
                    </Container>
                    <Footer />
                </MainContainer>
            </BrowserRouter>
        );
    }

}

export default App;