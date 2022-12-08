import { FiMonitor } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Yahtzee = ({yahtzeeImg, scrollToYahtzee}) => {
	return (
		<div className="project" ref={scrollToYahtzee}>
			<div className="card" >
				<a
					href="https://robertbjolly.github.io/scoresheet-yahtzee/" 
			    target="_blank" 
			    className="btn btn-primary" 
			    style={{backgroundColor:'transparent', border:'transparent', outline:'transparent'}}
			    rel="noopener noreferrer"
					><img src={yahtzeeImg} alt="YahtzeeImg"></img>
				</a> 		
			  <div className="card-body">
			    <h5 className="card-title">JollyYahtzee Scoresheet</h5>
			    <p className="card-text">
			    	I have always had a desire to create a Yahtzee Scoresheet ever since I began coding so this was the perfect 
			    	project for me to get started with React. The goal of this project was to get familiar with React and have 
			    	another tool to use when creating my future websites.  
			    </p>
			    <h5 className="card-title">Project Difficulties</h5>
			    <p className="card-text">
			    	As my first ever React project, some difficulties I ran into were hooks and states. The biggest difficulty 
			    	I ran into was using HTML and CSS to make my website look presentable on mobile. 
			    </p>

			    <h5 className="card-title">How I Overcame Difficulties</h5>
			    <p className="card-text">
						On this project I focused on learning and understanding display and position properties and how a 
						users screen width and height would effect my websites containers. With this project I really 
						focused on making sure my front-end skills were improving. 
			    </p>


			    <div className="projectButtonLinks">
			    	<a 
			    		href="https://robertbjolly.github.io/scoresheet-yahtzee/" 
			    		target="_blank" 
			    		className="btn btn-primary" 
			    		rel="noopener noreferrer"
			    		><span style={{paddingRight:'5px'}}>Live Preview</span><FiMonitor style={{marginBottom:'2px'}}/>
			    	</a>
			    	<a 
			    		href="#!" 
			    		className="btn btn-primary"
			    		><span style={{paddingRight:'5px'}}>Source Code</span><FaGithub style={{marginBottom:'2px'}}/>
			    	</a>
			    </div>
			  </div>
			</div>			
		</div>
	)
}

export default Yahtzee