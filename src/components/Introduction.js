import picOfMe from './images/picOfMe.png';
import background from './images/background.png';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import resume from './files/RobertJollyResume.pdf';
import { SiLinkedin } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';


const Introduction = ({handleScroll}) => {
	return (
		<div className="imgContainer">
		  <img src={background} style={{width:'100%', height:'550px'}} alt="introductionBackground"/>
		  <div className="centered">
				<div className="card" style={{width:'18rem'}}>
				  <img className="card-img-top" src={picOfMe} alt="robertJollyPic"/>
				  <div className="card-body">
				    <h5 className="card-title">Robert Jolly</h5>
				    <p className="card-text">Software Developer</p>
				    <div className="socialLinks">
				    	<a 
			    			target="_blank" 
			    			rel="noopener noreferrer"
			    			href="https://www.linkedin.com/in/robert-jolly-a1524989/"
				    		>
				    		<SiLinkedin 
				    			size='30' 
				    			style={{cursor:'pointer', marginTop:'15px', marginRight:'15px', color:'lightgrey'}}
				    		/>
				    	</a>
				    	<a 
			    			target="_blank" 
			    			rel="noopener noreferrer"
				    		href="https://github.com/robertbjolly"
				    		>
				    		<FaGithub 
				    			size='30' 
				    			style={{cursor:'pointer', marginTop:'15px', marginLeft:'15px', color:'lightgrey'}}/>
				    	</a>
				    </div>
				  </div>
				</div>
		  </div>
		</div>
	)
}

export default Introduction