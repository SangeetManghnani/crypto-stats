import React, { Component } from 'react';
import _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { indigo800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Home from './components/home/Home';
import { Snackbar } from 'material-ui';

const muiTheme = getMuiTheme({
  appBar: {
    color: indigo800,
  },
});

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
           <AppBar title={this.state.title} onLeftIconButtonClick={this.toggleDrawer} />
           <Drawer
             docked={false}
             width={200}
             open={this.state.open}
            //  onRequestChange={open => this.setState({ open })}
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
           <Home page={this.state.page} addToPortfolio={this.addToPortfolio} portfolioList={this.state.portfolioList} />
         </MuiThemeProvider>
       </div>
     );
   }
}

export default App;
