import React from 'react';
import MenuItem from '../menu_item/menu_item';
import {connect} from 'react-redux';
import './directory.scss';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directorySelector';

const Directory = ({sections}) => {
    return(
      <div className='directory-menu'>
        {sections.map(({title, imageUrl, id, size, linkUrl}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        ))}
      </div>
    )
}

const mapStateToProps =  createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
