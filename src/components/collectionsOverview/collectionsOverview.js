import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collectionsOverview.scss';
import CollectionPreview from '../preview-collection/preview-collection';

import {selectCollectionsForPreview} from '../../redux/shop/shopSelector';

const CollectionsOverview = ({collections}) => {

return(
  <div className='collections-overview'>
    {collections.map(({id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)

};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
