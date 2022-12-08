
import { FaGithub } from 'react-icons/fa';


const Survive = ({scrollToSurvive}) => {
	return (
		<div className="project" ref={scrollToSurvive}>
			<div className="card" >
				<iframe src="https://www.youtube.com/embed/pge9-hCoP9o" title="Survive Video"></iframe>
			  <div className="card-body">
			    <h5 className="card-title">Survive</h5>
			    <p className="card-text">
			    	Survive is my first ever coding project, where I used the Python library called Pygame. At the start of the project I was 
			    	familiar with the basics of Python and wanted put the skills I learned to the test. The objective of this project was to create 
			    	a video game similar to the classic Zelda, that a user would play for a minimum of ten minutes. 
			    </p>
			    <h5 className="card-title">Project Difficulties</h5>
			    <p className="card-text">
			    	This was my first ever programming project, so it was the first taste of creating a large project over several months. The biggest 
			    	challenge was learning the tricks and problem solving challenges to achieve what I desired in the game. I began to realize how coding 
			    	takes creativity to solve certain problems. 
			    </p>

			    <h5 className="card-title">How I Overcame Difficulties</h5>
			    <p className="card-text">
						I was able to take away many problem solving techniques while developing this game. It taught me a lot, especially when it comes to 
						Object-Oriented Programming.  
			    </p>
			    <div className="projectButtonLinks">			    	
			    	<a 
			    		href="https://github.com/robertbjolly/pygame-survive" 
			    		target="_blank" 
			    		rel="noopener noreferrer"
			    		className="btn btn-primary"
			    	><span style={{paddingRight:'5px'}}>Source Code</span><FaGithub style={{marginBottom:'2px'}}/>
			    	</a>
			    </div>
			  </div>
			</div>			
		</div>
	)
}

export default Survive



