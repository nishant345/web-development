import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Link,  BrowserRouter as Router, } from 'react-router-dom';
import './About.css';

const About = (props) => {
	return <div>
		<Col  md={12} xsHidden smHidden>
			<Image src="res/mountain.jpg" className="header-image"/>
		</Col>
		<Grid>
			<Col 
			xs={12} 
			sm={8} 
			smOffset={2} 
			className="margin-down">
				<Image src="res/victor.jpg" className="about-profile-pic" rounded/>
				<h3>Victor The Blister </h3>
				<p>Brown is such a nice color. How do you make a round circle with a square knife? 
				That's your challenge for the day. I spend a lot of time walking around in the woods 
				and talking to trees, and squirrels, and little rabbits and stuff. A beautiful little 
				sunset. Don't hurry. Take your time and enjoy. Everyone wants to enjoy the good parts 
				- but you have to build the framework first.</p>
				<p>Maybe there's a happy little waterfall happening over here. In this world, 
				everything can be happy. Didn't you know you had that much power? You can move 
				mountains. You can do anything. Just go out and talk to a tree. Make friends with it.</p>
				<p>With practice comes confidence. We spend so much of our life looking - but never 
				seeing. You have to make these big decisions. We wash our brush with odorless thinner. 
				This is unplanned it really just happens. Making all those little fluffies that live in t
				he clouds.</p>
				<p>Let's make some happy little clouds in our world. Let's put some happy little bushes on
				the other side now. It's hard to see things when you're too close. Take a step back and look. 
				For the lack of a better word I call them hangy downs. All you need to paint is a few tools, 
				a little instruction, and a vision in your mind.</p>
				<p>You're the greatest thing that has ever been or ever will be. You're special. You're so 
				very special. That's a son of a gun of a cloud. No pressure. Just relax and watch it happen. 
				Tree trunks grow however makes them happy. Let your imagination be your guide. 
				You can work and carry-on and put lots of little happy things in here.</p>
			</Col>
			<Col xs={12}
			 sm={8}
			 smOffset={2}>
				<Image src="res/nishant.jpg" className="about-profile-pic" rounded/>
				<h3>Nishant The Byzant </h3>
				<p>Brown is such a nice color. How do you make a round circle with a square knife? 
				That's your challenge for the day. I spend a lot of time walking around in the woods 
				and talking to trees, and squirrels, and little rabbits and stuff. A beautiful little 
				sunset. Don't hurry. Take your time and enjoy. Everyone wants to enjoy the good parts 
				- but you have to build the framework first.</p>
				<p>Maybe there's a happy little waterfall happening over here. In this world, 
				everything can be happy. Didn't you know you had that much power? You can move 
				mountains. You can do anything. Just go out and talk to a tree. Make friends with it.</p>
				<p>With practice comes confidence. We spend so much of our life looking - but never 
				seeing. You have to make these big decisions. We wash our brush with odorless thinner. 
				This is unplanned it really just happens. Making all those little fluffies that live in t
				he clouds.</p>
				<p>Let's make some happy little clouds in our world. Let's put some happy little bushes on
				the other side now. It's hard to see things when you're too close. Take a step back and look. 
				For the lack of a better word I call them hangy downs. All you need to paint is a few tools, 
				a little instruction, and a vision in your mind.</p>
				<p>You're the greatest thing that has ever been or ever will be. You're special. You're so 
				very special. That's a son of a gun of a cloud. No pressure. Just relax and watch it happen. 
				Tree trunks grow however makes them happy. Let your imagination be your guide. 
				You can work and carry-on and put lots of little happy things in here.</p>
			</Col>
		</Grid>
	</div>
}

export default About;