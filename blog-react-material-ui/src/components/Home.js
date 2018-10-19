import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Link,  BrowserRouter as Router, } from 'react-router-dom';
import './Home.css';

const Home = (props) => {
	return <Grid>
		<Row className="show-grid text-center">
			<Jumbotron>
				<h1>People and their life</h1>
				<p>Maybe there's a happy little waterfall happening over here. 
				In this world, everything can be happy. Didn't you know you had that much power? 
				You can move mountains. You can do anything. Just go out and talk to a tree. 
				Make friends with it.</p>
				<Router>
					<Link to="/about">
						<Button bsStyle="primary" >Learn More</Button>
					</Link>
				</Router>
			</Jumbotron>
		</Row>
		<Row className="show-grid">
			<Col xs={12} sm={4} className="person-wrapper">
				<Image src="res/girl-1.jpg" circle className="profile-pic" />
				<h3>Julie</h3>
        		<p>That's a crooked tree. We'll send him to Washington. 
        			These little son of a guns hide in your brush and you just have to push them out.</p>
			</Col>
			<Col xs={12} sm={4} className="person-wrapper">
				<Image src="res/man-1.jpg" circle className="profile-pic" />
				<h3>Sam</h3>
        		<p>That's a crooked tree. We'll send him to Washington. 
        			These little son of a guns hide in your brush and you just have to push them out.</p>
			</Col>
			<Col xs={12} sm={4} className="person-wrapper">
				<Image src="res/girl-2.jpg" circle className="profile-pic" />
				<h3>Vanessa</h3>
        		<p>That's a crooked tree. We'll send him to Washington. 
        			These little son of a guns hide in your brush and you just have to push them out.</p>
			</Col>
		</Row>
	</Grid>
}

export default Home;