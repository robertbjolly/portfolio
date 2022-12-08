import Navbar from './Navbar';
import * as emailjs from 'emailjs-com';
import {useState} from 'react';


const Contact = ({scrollToContact}) => {
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = (e) => {
		let templateParams = {
			subject: subject,
			from_email: email,
			message: message
		}

		emailjs.send('service_a3i4owc', 'template_px71c1k', templateParams, 'user_RpZp6HWIutQWgH0dTPxHT')
		  .then(function(response) {
		    console.log('SUCCESS!', response.status, response.text);
		    }, function(error) {
		       console.log('FAILED...', error);
		});
	};

	const handleChange = (e, type) => {
		if (type === 'email') {
			setEmail(e.target.value)
		} else if (type === 'subject') {
			setSubject(e.target.value)
		} else if (type === 'message') {
			setMessage(e.target.value)
		}
	};

	return (
		<div style={{paddingTop:'20px'}} ref={scrollToContact}>
			<div className="container">
				<div>
					<div style={{textAlign:'center', margin:'20px'}}>
						<h1>Contact Me</h1>
					</div>
					<form onSubmit={(e) => handleSubmit(e)} >
					  <div className="form-group">
					    <label htmlFor="exampleFormControlInput1">Email Address</label>
					    <input 
					    	type="email" 
					    	className="form-control" 
					    	id="exampleFormControlInput1" 
					    	placeholder="Email"
					    	onChange={(e) => handleChange(e,'email')}
					    	required
					    />
					  </div>
					  <div className="form-group">
					    <label htmlFor="formGroupExampleInput">Subject</label>
					    <input 
					    	type="text" 
					    	className="form-control" 
					    	id="formGroupExampleInput" 
					    	placeholder="Subject"
					    	onChange={(e) => handleChange(e,'subject')}
					    	required
					    />
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleFormControlTextarea1">Message</label>
					    <textarea 
					    	className="form-control" 
					    	id="exampleFormControlTextarea1" 
					    	rows="4"
					    	placeholder="Hello Robert Jolly, my name is ..."
					    	onChange={(e) => handleChange(e,'message')}
					    	required
					    	>
					    </textarea>
					  </div>
					  <button 
					  	type="submit" 
					  	className="btn btn-primary"
					  	style={{margin: '10px'}}
					  	>Send Email
					  </button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact