import React, { Component } from 'react';
import pic from './images/takota.png'
import './css/picture-box.css'


const PictureBox = () => {
    return (
      <div class="col-4 picture-box">
          <img src={pic} class="pic" />
        <h3>Takota McConner</h3>
        <p class="list-group-item">"I hate Mondays."</p>
      </div>
    );
}

export default PictureBox
