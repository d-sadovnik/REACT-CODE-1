import React from "react";
const Jumbotron = () => {
	return (
<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		</div>
);
};
export default Jumbotron;