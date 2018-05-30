import React from 'react';

import GiphysIndex from './giphys_index';
import fetchSearchGiphys from '../util/api_util.js';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };

  }



  handleChange(event) {
    this.setState({ searchTerm: event.currentTarget.value });

  }

  handleSubmit(event) {
    event.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');

    this.props.fetchSearchGiphys(searchTerm);
  }

  componentDidMount() {
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  render() {

    return (
      <div>
        <form>
          <input onChange={this.handleChange.bind(this)} value={this.state.searchTerm} />
          <button type="submit" onClick={ this.handleSubmit.bind(this)}>Search</button>
        </form>
        <GiphysIndex giphys={this.props.giphys} />
      </div>
    );
  }
}

export default GiphysSearch;
