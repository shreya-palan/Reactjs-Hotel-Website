import React from 'react';
import '../Download/download.css';

const Download = () => {
  return (
    <>
      <section className="download top">
        <div className="container flex_space">
            <div className="row">
                <h3>Download Our App</h3>
                <h1>Amazing!!! Get This Template App For Your Mobile</h1>
                <ul>
                    <li>&#10003; Get paperless confirmation</li>
                    <li>&#10003; Get paperless confirmation</li>
                    <li>&#10003; Get paperless confirmation</li>
                    <li>&#10003; Get paperless confirmation</li>
                    <li>&#10003; Get paperless confirmation</li>
                    <li>&#10003; Get paperless confirmation</li>
                </ul>
                <div className="img flex">
                    <img src='/images/appstore-button.png' alt="" />
                    <img src='/images/google-play-button.png' alt="" />
                </div>
            </div>
            <div className="row row2">
                <img src='/images/app-image-1.png' alt="" />
            </div>
        </div>
      </section>
    </>
  )
}

export default Download
