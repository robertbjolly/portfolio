
import pythonDjango from './images/pythonDjango.png';
import sql from './images/sql.png';
import react from './images/react.png';
import javascript from './images/javascript.png';
import htmlcss from './images/htmlcss.png';

const SkillsBar = () => {
	return (
		<div className="skillsLogos" style={{color:'black'}}>
			<img src={pythonDjango} alt="pythonDjango" />
			<img src={sql} alt="sql" />
			<img src={react} alt="react" />
			<img src={javascript} alt="javascript" />
			<img src={htmlcss} alt="htmlcss" />		
		</div>
	)
}

export default SkillsBar