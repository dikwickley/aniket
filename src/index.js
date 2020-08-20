import React from 'react';
import ReactDOM from 'react-dom';


import {TicTacToe} from './components/TicTacToe'





const NavBar = (req, res) => {
	return(
		<div id="navBar" className="container mx-0 mt-2 px-md-5 row col-12 font-weight-bolder fixed-top">
				<div className="col-3 text-center"><a href="#"><span className="text-danger">ho</span><br />me</a></div>
				<div className="col-3 text-center"><a href="#about"><span className="text-warning">ab</span><br />out </a></div>
				<div className="col-3 text-center"><a href="#"><span className="text-success">pro</span><br />ject</a></div>
				<div className="col-3 text-center"><a href="#"><span className="text-info">con</span><br />tact </a></div>

		</div>
		)
}


const Name =  (req, res) =>{
	return(
		<div className="col-12 row container-fluid m-0 p-0 text-md-right text-center">
			<div className="container-fluid d-md-block d-none text-right mr-0">
				<div className="col-12 display-2 font-spacing line-height text-shadow-black">ANIKET</div>
				<div className="col-12 display-2 font-spacing line-height font-colour-grey text-shadow-grey">SINGH</div>
				<div className="col-12 display-2 font-spacing line-height text-shadow-black">RAWAT</div>
			</div>
			<div className="d-md-none d-block text-center col-12">
				<div className="col-12 font-spacing font-size-mobile">ANIKET</div>
				<div className="col-12 font-spacing font-size-mobile font-colour-grey  send-back">SINGH</div>
				<div className="col-12 font-spacing font-size-mobile">RAWAT</div>
			</div>
		</div>
		)
}

const Main = (req, res) => {
	return(
		<div id="main" className="container-fluid p-0 m-0 row">
			<div className="col-md-6 col-12">
				<Name />
			</div>
			<div className="col-md-6 col-12 text-center p-0">
				<div className="container-fluid col-md-8 col-10 mt-md-3 mt-5 px-auto">
					<img src="./aniket.jpg" alt='aniket singh rawat' className="col-12" />
				</div>
				<div className="container text-left col-md-8 col-10 text-center pl-l0">
					<div className="rotate line-height-small text-left"> 
						<div className="font-size-small">HTML </div>
						<div className="font-size-small">Express </div>
						<div className="font-size-small">SQL </div>
						<div className="font-size-small">MongoDB </div>
						<div className="font-size-small">ReactJS </div>
						<div className="font-size-small">CSS </div>
						<div className="font-size-small">Javascript </div>
						<div className="font-size-small">NodeJS </div>						
						<div className="font-size-small">Python </div>
					</div>
				</div>
			
			</div>

		</div>
		)
}




const Me = (req, res) => {

	return(
		<div id="about"  className="container-fluid text-center my-5 py-5">
			
			<h1 className="mt-5 pt-5">me</h1>
			<div>
				<h6> I am a full stack web developer and  freelancer.
				I help people make their website.
				</h6>
			</div>
			<div className="mt-md-3 mt-2">
				<h4>affordable. efficient. elegant.</h4>
			</div>
			

		</div>
		)
}




const App = (req, res) => {

	return(
		<div className="container-fluid m-0 p-0">
			<Main />
			<Me />
			<div className="my-5 py-5 text-center">
				<TicTacToe />
			</div>
			
		</div>
		)
}




ReactDOM.render(
	<div>
		<div id="navBarCover" className="container col-12 fixed-top"> </div>
		<div id="navBarBg" className="container col-12 fixed-top shadow"></div>
		<NavBar />
	</div>,
	document.getElementById('nav')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




