import React, { Component } from 'react';
import NewsItem from './NewsItem';

const NewsList = (props) => {
	return <div>
		<ul>
			{this.props.newsItems.map((newsItem) =>  {
				return <NewsItem newsItem = {newsItem}/>
			})}
		</ul>
	</div>
}



export default NewsList;