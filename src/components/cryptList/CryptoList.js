import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import CryptoCard from '../cryptoCard/CryptoCard';

const defaultProps = {
  showCount: 10,
  cryptoList: [],
  addToPortfolio: () => {},
};

class CryptoList extends Component {
  constructor(props) {
    super(props);

    this.renderCryptoList = this.renderCryptoList.bind(this);
    this.addToParent = this.addToParent.bind(this);
  }
  addToParent(coin) {
    this.props.addToPortfolio(coin);
  }
  renderCryptoList = () => {
    const currenciesToRender = [];
    const baseUrl = 'https://www.cryptocompare.com';
    this.props.cryptoList.slice(0, this.props.showCount).map((coin) => {
      currenciesToRender.push(<Col lg={4} md={4} sm={6} xs={12} key={coin.rank}>
        <CryptoCard
          title={coin.name}
          subtitle={coin.symbol}
          price={coin.price_usd}
          rank={coin.rank}
          changeHour={coin.percent_change_1h}
          changeDay={coin.percent_change_24h}
          changeWeek={coin.percent_change_7d}
          onCardClick={() => { this.addToParent(coin); }}
        //   image={baseUrl + coin.ImageUrl}
        />
      </Col>);
    });

    return (
      <Row>
        {currenciesToRender}
      </Row>
    );
  }
  render() {
    return (
      <Row className="crypto-list">
        {this.renderCryptoList()}
      </Row>
    );
  }
}
CryptoList.defaultProps = defaultProps;

CryptoList.propTypes = {
  showCount: PropTypes.number,
  cryptoList: PropTypes.array,
  addToPortfolio: PropTypes.func,
};

export default CryptoList;
