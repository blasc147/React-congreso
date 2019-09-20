import React from 'react';
import loader from '../images/default/preloader-color.gif'


function PageLoading() {
    return (
    <div id="pageloader">
        <div className="loader-inner">
            <img src={loader} alt="" />
        </div>
    </div>
  );
}

export default PageLoading;
