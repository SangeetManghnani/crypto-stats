import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const defaultProps = {
  headers: ['Rank', 'Name', 'Symbol', 'Price(USD)', '1H', '1D', '1W', 'Market Cap(USD)'],
};

export default class CryptoTable extends Component {
  constructor(props) {
    super(props);

    this.renderTableHeaders = this.renderTableHeaders.bind(this);
    this.renderTableRows = this.renderTableRows.bind(this);
  }

  renderTableHeaders() {
    const tableHeaders = [];
    this.props.headers.map((header, index) => {
      tableHeaders.push(<TableHeaderColumn columnNumber={index + 1} selectable={false}>{header}</TableHeaderColumn>);
    });

    return (
      <TableRow>
        {tableHeaders}
      </TableRow>
    );
  }

  renderTableRows() {
    const tableRows = [];
    this.props.cryptoList.map((coin) => {
      tableRows.push(<TableRow>
        <TableRowColumn>{coin.rank}</TableRowColumn>
        <TableRowColumn>{coin.name}</TableRowColumn>
        <TableRowColumn>{coin.symbol}</TableRowColumn>
        <TableRowColumn>{coin.price_usd}</TableRowColumn>
        <TableRowColumn>{coin.percent_change_1h}</TableRowColumn>
        <TableRowColumn>{coin.percent_change_24h}</TableRowColumn>
        <TableRowColumn>{coin.percent_change_7d}</TableRowColumn>
        <TableRowColumn>{coin.percent_change_7d}</TableRowColumn>
        <TableRowColumn>{coin.market_cap_usd}</TableRowColumn>
                     </TableRow>);
    });
    // for (let i = 0; i < this.props.cryptoList.length; i++) {
    //   tableRows.push(<TableRow>
    //     <TableRowColumn>{coin.rank}</TableRowColumn>
    //     <TableRowColumn>{coin.name}</TableRowColumn>
    //     <TableRowColumn>{coin.symbol}</TableRowColumn>
    //     <TableRowColumn>{coin.price_usd}</TableRowColumn>
    //     <TableRowColumn>{coin.percent_change_1h}</TableRowColumn>
    //     <TableRowColumn>{coin.percent_change_24h}</TableRowColumn>
    //     <TableRowColumn>{coin.percent_change_7d}</TableRowColumn>
    //     <TableRowColumn>{coin.percent_change_7d}</TableRowColumn>
    //     <TableRowColumn>{coin.market_cap_usd}</TableRowColumn>
    //                  </TableRow>);
    // }

    return (
      <TableBody displaySelectAll={false} displayRowCheckbox={false}>{tableRows}</TableBody>
    );
  }
  render() {
    return (
      <Table selectable={false}>
        <TableHeader selectable={false} displaySelectAll={false} adjustForCheckbox={false}>
          {this.renderTableHeaders()}
        </TableHeader>
        {/* <TableBody showRowHover> */}
        {this.renderTableRows()}
        {/* </TableBody> */}
      </Table>
    );
  }
}


CryptoTable.defaultProps = defaultProps;
