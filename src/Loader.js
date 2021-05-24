import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
<div class="gooey">
  <span class="dot"></span>
  <div class="dots">
    <span className="span"></span>
    <span className="span"></span>
    <span className="span"></span>
  </div>
</div>
  );
}

export default Loader;