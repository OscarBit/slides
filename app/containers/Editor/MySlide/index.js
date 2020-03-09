import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MyItem from '../components/item';
import StandardSlide from '../../../theming/StandardSlide';
import { getTheme } from '../../redux-store/PresentationReducer/selectors';
import { getItems } from '../../redux-store/DeckReducer/selectors';
import './index.css';

function MySlide({ theme, itemsArray }) {
  const StandardSlideTemplate = StandardSlide(theme);
  return (
    <StandardSlideTemplate>
      <div id="this-slide" className="slide-style">
        {itemsArray.map(itm => (
          <MyItem key={itm.ID} itemObj={itm} />
        ))}
      </div>
    </StandardSlideTemplate>
  );
}

MySlide.propTypes = {
  theme: PropTypes.string.isRequired,
  itemsArray: PropTypes.array,
};

export default connect(
  state => ({
    theme: getTheme(state),
    itemsArray: getItems(state),
  }),
  null,
)(MySlide);
