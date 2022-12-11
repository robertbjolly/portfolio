import 'bootstrap';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import resume from './files/RobertJollyResume.pdf';

const Navbar = ({handleScroll, setPage}) => {

	return (
		<div className="containerNavbar" >
			<nav className="navbar navbar-expand-md bg-dark navbar-dark justify-content-center " style={{padding:'10px'}} >
				<span style={{color:'white', paddingRight:'5px'}}> <span style={{fontWeight:'bold'}}>Robert</span>Jolly</span>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
			    <ul className="navbar-nav">
			      <li className="nav-item" >
			      	<span 
			      		className="nav-link" 
			      		onClick={(e) => handleScroll(e, 'contact')}>Contact</span>
			      </li>
				    <li className="nav-item dropdown">
				      <a 
				      	className="nav-link dropdown-toggle" 
				      	id="navbardrop" 
				      	href="!#" 
				      	data-toggle="dropdown"
				      	style={{cursor:'default'}}
				      >
				        Projects
				      </a>
				      <div className="dropdown-menu">
				      	<span className="dropdown-item" onClick={(e) => handleScroll(e, 'survive')}>Survive</span>
				      	<span className="dropdown-item" onClick={(e) => handleScroll(e, 'fantasy')}>Fantasy Football</span>
				      	<span className="dropdown-item" onClick={(e) => handleScroll(e, 'yahtzee')}>JollyYahtzee</span>
				      	<span className="dropdown-item" onClick={(e) => handleScroll(e, 'portfolio')}>Portfolio</span>
				      </div>
				    </li>
			    </ul>
			  </div>
			</nav>		
		</div>
	)
}

export default Navbar