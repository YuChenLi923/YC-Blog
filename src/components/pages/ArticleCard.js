import React, {Component} from 'react';
import { Link } from 'react-router';
import '../../assets/scss/components/ArticleCard.scss';
import {is, fromJS} from 'immutable';
class ArticleCard extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
    }
    render() {
        let { title, time, type, description, id } = this.props;
        return (
          <div className = "articleCard">
            <div className = "header clear-float">
              <h className = "title" title={ title }>{title}</h>
              <div className="subtitle clear-float" >
                <p className="time">{time}</p>
                {/* <p className="view">{view}</p> */}
              </div>
            </div>
            <p className="desc">
              {description}
            </p>
            <Link to = {{pathname: 'article', query: {id}}} className = "read">
              继续阅读
            </Link>
            <ul className="tags">
              <li>{type}</li>
            </ul>
          </div>
        );
    }
}
module.exports = ArticleCard;
