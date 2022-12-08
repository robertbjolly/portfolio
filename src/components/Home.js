import React, {useRef} from 'react';
import Navbar from './Navbar';
import Introduction from './Introduction';
import SkillsBar from './SkillsBar';
import Projects from './Projects';
import Contact from './Contact';

const Home = ({}) => {

  const scrollToProjects = useRef()
  const scrollToSurvive = useRef()
  const scrollToFantasy = useRef()
  const scrollToYahtzee = useRef()
  const scrollToPortfolio = useRef()
  const scrollToContact = useRef()

  const handleScroll = (e, val) => {
    e.preventDefault()
    if (val === 'projects') {
      scrollToProjects.current.scrollIntoView({ behavior: 'smooth' });
    } else if (val === 'survive') {
      scrollToSurvive.current.scrollIntoView({ behavior: 'smooth' });
    } else if (val === 'fantasy') {
      scrollToFantasy.current.scrollIntoView({ behavior: 'smooth' });
    } else if (val === 'yahtzee') {
      scrollToYahtzee.current.scrollIntoView({ behavior: 'smooth' });
    } else if (val === 'portfolio') {
      scrollToPortfolio.current.scrollIntoView({ behavior: 'smooth' });
    } else if (val === 'contact') {
      scrollToContact.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

	return (
		<div>
			<Navbar handleScroll={handleScroll}/>
			<Introduction handleScroll={handleScroll}/>
			<SkillsBar/>
			<Projects 
				scrollToProjects={scrollToProjects}
				scrollToSurvive={scrollToSurvive}
				scrollToFantasy={scrollToFantasy}
				scrollToYahtzee={scrollToYahtzee}
				scrollToPortfolio={scrollToPortfolio}
			/>
      <Contact scrollToContact={scrollToContact}/>
		</div>
			
	)
}

export default Home