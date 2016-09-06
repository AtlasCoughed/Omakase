import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navLink: '/',
            navMessage: 'Search for Food'
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <NavBar navLink={this.state.navLink} navMessage={this.state.navMessage}/>
                <div className="main-container">
                    <div className="about-content">
                        <div className="definition-container">
                            <h1> o·ma·ka·se </h1>
                            <p> /ōməˈkäsā, ōˈmäkəsā/ </p>
                            <p><i> noun </i></p>
                            <p className="definition"> respectfully leaving another to decide what is best </p>
                        </div>
                        <div className="creators">
                            <div className="creator">
                                <img className="creator-image" src="../images/daria.png"/>
                                <p> Daria Burinskaya </p>
                            </div>
                            <div className="creator">
                                <img className="creator-image" src="../images/jonathan.png"/>
                                <p> Jonathan Mitchell </p>
                            </div>
                            <div className="creator">
                                <img className="creator-image" src="../images/carling.jpg"/>
                                <p> Carling Sugarman </p>
                            </div>
                            <div className="creator">
                                <img className="creator-image" src="../images/michael.png"/>
                                <p> Michael Tran </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;
