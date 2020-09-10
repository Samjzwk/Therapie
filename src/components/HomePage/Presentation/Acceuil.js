import React, { Fragment } from 'react';
import { ReactComponent as ShapeDivider } from '../../../assets/ShapeDivider.svg'
import './Acceuil.scss'


function acceuil() {
  return (
    <Fragment>
    <div className="homepage">
      <ShapeDivider />
      <h2 className="homepage__subtitle">let's have a <span className="word--forward">drink</span></h2>
    </div>
    </Fragment>
  );
}

export default acceuil;
