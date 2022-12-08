import { FaGithub } from 'react-icons/fa';

const Portfolio = ({portfolioImg, scrollToPortfolio}) => {
	return (
		<div className="project" ref={scrollToPortfolio}>
			<div className="card" >
				<img src={portfolioImg} alt="YahtzeeImg"></img>
			  <div className="card-body">
			    <h5 className="card-title">My Portfolio</h5>
			    <p className="card-text">
			    	I wanted to create a portfolio so I can showcase my projects. Developing this project also gives myself and
						others the option to see how my coding has improved from project to project.
			    </p>
			    <div className="projectButtonLinks">			    	
			    	<a 
			    		href="!#" 
			    		target="_blank" 
			    		rel="noopener noreferrer"
			    		className="btn btn-primary"
			    	>
			    	<span style={{paddingRight:'5px'}}>Source Code</span><FaGithub style={{marginBottom:'2px'}}/>
			    	</a>
			    </div>
			  </div>
			</div>			
		</div>
	)
};

export default Portfolio