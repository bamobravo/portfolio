import React from 'react';
import portfolio from '../portfolio';
import {LandingHeader,Footer,LandingBody} from './util';
class Landing extends React.Component {

    constructor(props){
        super(props);
        this.state={
            name:"Osuntoki Seun Bamidele",
            message:`Fullstack Engineer,Software Architect and Data Scientist.`,
            myPortfolio:portfolio
        };
    }
    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    render(){
        return (
            <div className='container-fluid p-0'>
                <LandingHeader myName={this.state.name} message={this.state.message}/>
                <div class='row'>
                    <div class='col-sm-3'></div>
                    <div class='col-sm-6'>
                        <div class='btn-group'>

                        </div>
                    </div>
                    <div class='col-sm-3'></div>
                </div>
                <div class='row work-section'>
                <div class='col-md-2'></div>
                <div class = 'col-md-8' >
                    <LandingBody portfolios={this.state.myPortfolio}/>
                 </div>
                <div class = 'col-md-2' > </div>
                </div>
                
                <Footer name={this.state.name}/>
            </div>
            )
    }
}

export default Landing;