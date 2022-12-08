import { FiMonitor } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';


const FantasyFootball = ({fantasyImg, scrollToFantasy}) => {
	return (
		<div className="project" ref={scrollToFantasy}>
			<div className="card">
				<a
					href="https://jollyfantasyfootball.herokuapp.com/" 
			    target="_blank" 
			    className="btn btn-primary" 
			    style={{backgroundColor:'transparent', border:'transparent'}}
			    rel="noopener noreferrer"
					><img src={fantasyImg} alt="FantasyImg"></img>
				</a> 				
			  <div className="card-body">
			    <h5 className="card-title">Fantasy Football</h5>
			    <p className="card-text">
			    	This is the first website I ever created using Django. The goal of the project is to have users 
			   		create an account on my website and have the ability to create a fantasy football league where they 
			   		would perform a live draft with their fellow fantasy football competitors.  
			    </p>
			    <h5 className="card-title">Project Difficulties</h5>
			    <p className="card-text">
			    	As my first ever Django project, I had no experience with working with HTML, CSS, or a database. The 
			    	learning curve for this project with no prior experience was very challenging. The biggest 
			    	challenge for me was understanding how to organize and coordinate multiple tables within a database  
			    	to make my project as efficient and organized as possible. 
			    </p>
			    <h5 className="card-title">How I Overcame Difficulties</h5>
			    <p className="card-text">
						Day by day I learned SQL and the basics of HTML and CSS and was able to create my first ever website. 
						I experienced a steep learning curve when it came to learning about a database and being able to implement 
						on the backend of a website.
			    </p>		    
			    <div className="projectButtonLinks">
			    	<a 
			    		href="https://github.com/robertbjolly/fantasyfootball" 
			    		className="btn btn-primary"
			    		target="_blank" 
			    		rel="noopener noreferrer"
			    		><span style={{paddingRight:'5px'}}>Source Code</span><FaGithub style={{marginBottom:'2px'}}/>
			    	</a>
			    </div>
			  </div>
			</div>			
		</div>
	)
}

export default FantasyFootball