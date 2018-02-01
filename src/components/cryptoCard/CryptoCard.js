import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardHeader } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { indigo800 } from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';
import { Row, Col } from 'react-flexbox-grid';
import './styles.css';


const defaultProps = {
  title: 'Dummy',
  subtitle: 'Dummy Subtitle',
  price: '100',
  changeHour: '0',
  changeWeek: '0',
  changeDay: '0',
  onCardClick: () => {},
};

class CryptoCard extends Component {
  render() {
    return (
      <Card className="crypto-card">
        <CardHeader avatar="https://www.cryptocompare.com/media/19633/btc.png" title={this.props.title} subtitle={this.props.subtitle} />
        {/* <CardTitle title={this.props.title} subtitle={this.props.subtitle} avatar="" /> */}
        <CardText className="card-body">
          <Row className="head" between="xs">
            <Chip backgroundColor={indigo800} labelColor="#fff">{this.props.price}<i className="material-icons">monetization_on</i></Chip>
            <FloatingActionButton mini backgroundColor={indigo800} onClick={() => { this.props.onCardClick(); }}>
              <ContentAdd />
            </FloatingActionButton>
          </Row>
          <Row className="body">
            <Col><span className="changeTitle">Hourly</span><span className={`${(parseInt(this.props.changeHour) > 0 ? 'positive ' : 'negative')}`}>{this.props.changeHour}%</span></Col>
            <Col><span className="changeTitle">Daily</span><span className={`${(parseInt(this.props.changeDay) > 0 ? 'positive ' : 'negative')}`}>{this.props.changeDay}%</span></Col>
            <Col><span className="changeTitle">Weekly</span><span className={`${(parseInt(this.props.changeWeek) > 0 ? 'positive ' : 'negative')}`}>{this.props.changeWeek}%</span></Col>
          </Row>
        </CardText>
      </Card>
    );
  }
}

CryptoCard.defaultProps = defaultProps;

CryptoCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  subtitle: PropTypes.string,
  changeDay: PropTypes.string,
  changeHour: PropTypes.string,
  changeWeek: PropTypes.string,
  onCardClick: PropTypes.func,
};

export default CryptoCard;
