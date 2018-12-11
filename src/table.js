/**!
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
var count = 0;
var Table = React.createClass({
  getInitialState: function() {
    return {clicked: false};
  },
  clickMe: function () {
    this.setState({clicked: true});
  },
  render: function () {
    var rows = this.props.data.map(function (row) {
      var cells = row.map(function(cell) {
        return <td key={count++}>{cell}</td>;
      });

      return <tr key={count++}>{cells}</tr>;
    });

    var clicked;

    if(this.state.clicked) {
      clicked = <div>Clicked</div>;
    }

    return (
      <div>
        {clicked}
        <table onClick={this.clickMe}>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
});
