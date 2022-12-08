import Survive from './projects/Survive.js';
import Yahtzee from './projects/Yahtzee.js';
import FantasyFootball from './projects/FantasyFootball.js';
import Portfolio from './projects/Portfolio.js';
import yahtzeeImg from './images/yahtzee.png';
import fantasyImg from './images/fantasy.png';
import portfolioImg from './images/portfolio.png';


const Projects = ({scrollToProjects, scrollToSurvive, scrollToFantasy, scrollToYahtzee, scrollToPortfolio}) => {
	return (
		<div className="container" style={{marginTop:'30px'}}>
			<div className="projectsContainer" style={{textAlign:'center'}} ref={scrollToProjects}>
				<h1 style={{margin:'20px' }}>Projects</h1>
				<div style={{textAlign:'center'}}>
					<Survive scrollToSurvive={scrollToSurvive}/>
					<FantasyFootball fantasyImg={fantasyImg} scrollToFantasy={scrollToFantasy}/>
					<Yahtzee yahtzeeImg={yahtzeeImg} scrollToYahtzee={scrollToYahtzee}/>
					<Portfolio portfolioImg={portfolioImg} scrollToPortfolio={scrollToPortfolio}/>
				</div>
			</div>
		</div>
	)
}

export default Projects