import React, { Component } from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import _ from 'lodash';

export default class Table extends Component {
	render(props) {
		var productItems = _.map(this.props.productList.filter(
	      (product) => {
	        return product.title.toLowerCase().indexOf(this.props.search) !== -1;
	      }
	    ), (product) => {
	      return <tr key={product.id}>
	        <td>{product.title}</td>
	        <td>{product.price}</td>
	        <td>{product.inventory}</td>
	      </tr>
	    });
		return(
		<div>
			<table className="table table-bordered">
			    <thead>
		      		<tr>
		        		<th>Product</th>
		        		<th>Price</th>
		        		<th>Inventory</th>
		      		</tr>
			    </thead>
			    <tbody>{productItems}</tbody>
			</table>
		</div>
	)
	}
}
