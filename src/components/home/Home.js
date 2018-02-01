import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import getCoinList from '../../api/api';
import CryptoList from '../cryptList/CryptoList';
import { fetchAllCoins } from '../../actions/HomeActions';
import './home.css';

const defaultProps = {
  page: 'list',
  addToPortfolio: () => {},
  portfolioList: [],
};

class Home extends Component {
  constructor(props) {
    super(props);


    this.addtoParentPorfolio = this.addtoParentPorfolio.bind(this);
    this.renderPages = this.renderPages.bind(this);
  }
  addtoParentPorfolio = (coin) => {
    this.props.addToPortfolio(coin);
  }
  // render portfolio
  renderPages = () => {
    if (this.props.page === 'portfolio') {
      return (<CryptoList cryptoList={this.props.portfolioList} showCount={10} />);
    }
    return (<CryptoList
      cryptoList={this.props.coins}
      showCount={10}
    />);
  }
  render() {
    return (
      <div className="Home">
        <Row className="list-wrapper">
          <Col xs={12} className="refresh-button">
            <i className="material-icons indigo600">refresh</i>
          </Col>
          {this.renderPages()}
        </Row>
      </div>
    );
  }
}

Home.defaultProps = defaultProps;

Home.propTypes = {
  page: PropTypes.string,
  addToPortfolio: PropTypes.func,
  portfolioList: PropTypes.array,
};


export default Home;
