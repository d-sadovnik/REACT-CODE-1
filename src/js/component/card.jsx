import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
const Mycard = () => {
  return (
    <div>
  <div class="card m-1">
  <img src={rigoImage} />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
  );
};

export default Mycard;
