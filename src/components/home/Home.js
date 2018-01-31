import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import getCoinList from '../../api/api';
import CryptoList from '../cryptList/CryptoList';
// import CryptoTable from '../cryptoTable/CryptoTable';
import './home.css';

const defaultProps = {
  page: 'list',
  addToPortfolio: () => {},
  portfolioList: [],
};
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: [],
    };

    this.addtoParentPorfolio = this.addtoParentPorfolio.bind(this);
    this.renderPages = this.renderPages.bind(this);
  }
  componentDidMount() {
    getCoinList((err, data) => {
      if (data) {
        this.setState({
          coinList: data,
        });
      }
    });
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
      cryptoList={this.state.coinList}
      showCount={10}
      addToPortfolio={this.addtoParentPorfolio}
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
//
