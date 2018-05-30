import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ({ giphys }) => {
  let giphyList = giphys.map(giphy => <GiphysIndexItem key={giphy.id} giphy={giphy}/>);
  return (
    <ul>
      {giphyList}
    </ul>
  );
};

export default GiphysIndex;
