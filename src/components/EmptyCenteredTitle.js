import React, { PropTypes } from 'react';

import './EmptyCenteredTitle.less';

const EmptyCenteredTitle = ({ title }) => (
  <div className="container">
    <h2>{ title }</h2>
  </div>
);

EmptyCenteredTitle.propTypes = {
  title: PropTypes.string.isRequire,
};

export default EmptyCenteredTitle;
