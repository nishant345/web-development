import React, { Component } from 'react';
import { Grid, Row, Col, Image} from 'react-bootstrap';
import Request  from 'superagent';
import _ from 'lodash';
import './News.css';
import NewsItem from './NewsItem';
const API_KEY = '';

export default class News extends Component {
  state = {
    articles: undefined
  }
  componentWillMount = () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API_KEY}`
    Request.get(url).then((response) => {
      this.setState({
        articles: response.body.articles 
      });
    });
  }
  render() {
    var newsItems = _.map(this.state.articles, (article) =>{
      return <li>
        <div className="items-section">
          <Col xs={12} sm={4} className="sidebar-section">
              <Image src={article.urlToImage} />
          </Col>
          <Col xs={12} sm={8} className="main-section">
            <p><b>{article.title}</b></p>
            <p>{article.author}</p>
            <p>{article.description}</p>
            <p><a href={article.url}> More Details</a></p>
          </Col>
        </div>
      </li>
    });
    return (
      <div>
        <Grid>
          <Row>
            <h1>NEWS</h1>
            <ul>{newsItems}</ul>
          </Row>
        </Grid>
      </div>
    )
  }
}
