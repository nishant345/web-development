import React from 'react';

const Forms = props => {
	return <div>
		<form onSubmit={props.weatherInfo}>
			<input type="text" name="city" placeholder="city..."/>
			<input type="text" name="country" placeholder="country..."/>
			<button>Get Weather</button>
		</form>
	</div>
}

export default Forms;