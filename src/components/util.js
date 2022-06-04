// some basic reusable component will be defined here
import React from 'react';
const LandingHeader = (props) =>{
    return(
        <div>
            <header className='landing-header'>     
                <div className='overlay-container'>
                
                </div>
            </header>
            <InfoBoard className='info-board' message={props.message} myName={props.myName}/>
            <h3>Reach Out</h3>
            <div className='btn-group '>
                <a href = "https://linkedin.com/in/seun-osuntoki" className = 'btn btn-default action-btn' > <i className='fab fa-linkedin'></i> </a>
                <a href = "mailto:bamobravo@gmail.com" className = 'btn btn-default action-btn' > <i className='fa fa-envelope'></i> </a>
                <a href = "https://twitter.com/bamobravo" className = 'btn btn-default action-btn' > <i className='fab fa-twitter'></i> </a>
            </div>
        </div>
    );
};

const InfoBoard = (props)=> {
    return (
        <div className='info-board row p-3'>
        <div className='col-sm-3'>
        </div>
        <div className='col-sm-6 greeters shadow p-4'>
            <div className='text-center welcome-message'><span className='hi'>Hi!,</span> I am </div>
            <div className='name-section'>
                {props.myName}
            </div>
            <div className='info-section'>
                {props.message}
                <div className='mt-3'>
                    <span className='skill fab fa-js'></span>
                    <span className='skill fab fa-html5'></span>
                    <span className='skill fab fa-php'></span>
                    <span className='skill fab fa-java'></span>
                    <span className='skill fab fa-react'></span>
                    <span className='skill fab fa-css3'></span>
                    <i className=' skill fab fa-python'></i>
                </div>
            </div>
        </div>
        <div className='col-sm-3 p-5 position-relative row'>
            <div className='header-link col-sm-12'>

            </div>
        </div>
        </div>
    )
};

// const Link =(props)=>{
//     return (
//         props.internal?(<div></div>):(<a className={props.className} href={props.target_link}><i className={"fab "+props.target_icon}></i> {props.link_title}</a>)
//     );
// }

const Footer=(props) =>{
    return (
        <footer className='footer mt-4 pt-3 pb-3'>
            <div>
                &copy;  {props.name} 
            </div>
        </footer>
    )
};
const PortFolios = (props)=>{
    const listItems = props
    .portfolios
    .map((item) =><PortfolioItem portfolio = {
        item
    }
    className = 'portfolio'  key={item.title}/>);
    return <ul className={props.className}>{listItems}</ul>;
}

const PortfolioItem = (props)=>{
    return(
        <div className="row work-item mb-4" >
            <div className='col-sm-7 p-0 portfolio-bg' style={{backgroundImage:`url(${props.portfolio.image})`,backgroundSize:'contain'}}>
                {/* <div className='image-container'>
                    <img src={props.portfolio.image}  alt="project-icon" />
                </div> */}
            </div>
            <div className='col-sm-5 portfolio-text'>
                 <h3 className='portfolio-name mt-3 mb-3'>{props.portfolio.title}</h3>
                 <h5 className='portfolio-desc p-3'>{props.portfolio.description}</h5>
                 <a href={props.portfolio.url} className='btn btn-visit btn-success'>See Project</a>
            </div>
        </div>
    );
}
const LandingBody = (props)=>{
    
return (<div className="my-works">
<h3 className="heading-title mt-5 mb-5">
            Featured Works
</h3>
<PortFolios className="porfolios" portfolios={props.portfolios}/>
</div>
);
}

export  {Footer, LandingHeader,LandingBody};