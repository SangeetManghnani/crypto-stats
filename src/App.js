import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllCoins } from './actions/HomeActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { indigo800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import CircularProgress from 'material-ui/CircularProgress';
import Home from './components/home/Home';
import { Snackbar } from 'material-ui';

const muiTheme = getMuiTheme({
  appBar: {
    color: indigo800,
  },
});

const defaultProps = {
  isFetchingCoins: true,
  portfolioList: [],
};
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'CryptoStats',
      open: false,
      page: 'list',
      portfolioList: [],
      openSnack: false,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setPage = this.setPage.bind(this);
    this.addToPortfolio = this.addToPortfolio.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }
  componentDidMount() {
    // load initial files
    // this.props.dispatch(fetchAllCoins());
  }
  setPage(page) {
    this.setState({
      page,
      open: false,
    });
  }
  toggleDrawer() {
    this.setState({
      open: !this.state.open,
    });
  }
   // add to portfolio
   addToPortfolio = (coin) => {
     console.log(coin);
     const portfolioUpdated = _.cloneDeep(this.state.portfolioList);
     if (portfolioUpdated.length > 0) {
       portfolioUpdated.map((portfolioCoin) => {
         if (portfolioCoin.name !== coin.name) {
           portfolioUpdated.push(coin);
           this.setState({
             portfolioList: portfolioUpdated,
             openSnack: true,
           });
         }
       });
     } else {
       portfolioUpdated.push(coin);
       this.setState({
         portfolioList: portfolioUpdated,
         openSnack: true,
       });
     }
   }
   handleRequestClose() {
     this.setState({
       openSnack: false,
     });
   }
   render() {
     return (
       <div className="App">
        <MuiThemeProvider muiTheme={muiTheme}>
         {this.props.isFetchingCoins ? 
          <div>
            <CircularProgress size={80} thickness={5} />
          </div>
         :
         <div>
           <AppBar title={this.state.title} onLeftIconButtonClick={this.toggleDrawer} />
           <Drawer
             docked={false}
             width={200}
             open={this.state.open}
           >
             <MenuItem onClick={() => { this.setPage('list'); }} className={`${this.state.page === 'list' ? 'active' : null}`}>Home</MenuItem>
             <MenuItem onClick={() => { this.setPage('portfolio'); }} className={`${this.state.page === 'portfolio' ? 'active' : null}`}>Portfolio</MenuItem>
           </Drawer>
           <Snackbar
             open={this.state.openSnack}
             message="Added to your portfolio!"
             autoHideDuration={2000}
             onRequestClose={this.handleRequestClose}
           />
           <Home page={this.state.page} portfolioList={this.props.portfolioList} coins={this.props.coinList}/>
           </div>
          }
         </MuiThemeProvider>
       </div>
     );
   }
}

App.defaultProps = defaultProps;
App.propTypes = {
  isFetchingCoins: PropTypes.bool,
  portfolioList: PropTypes.array,
};
// redux stuff goes here
const mapStateToProps = state => ({
  isFetchingCoins: state.home.isFetching,
  coinList: state.home.coins,
  portfolioList: state.portfolio.coins,
});
const mapDispatchToProps = dispatch => ({
  fetchAllCoins: dispatch(fetchAllCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
