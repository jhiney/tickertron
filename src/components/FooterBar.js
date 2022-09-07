import React from "react";
import { Navbar } from "react-bootstrap";
import "./style/FooterBar.css";
import ghLogo from "./img/github-logo-32.png";
import HelpModal from "./HelpModal";


function Footerbar() {
	return (
		<div>
			<Navbar fixed="bottom" className="justify-content-end">
				<Navbar.Brand href="https://github.com/jhiney/tickertron">
					<img
						src={ghLogo}
						width="30"
						height="30"
						className="d-inline-block align-bottom"
						alt="GitHub logo"
					/>
				</Navbar.Brand>
				<HelpModal />
			</Navbar>
		</div>
	);
}

export default Footerbar;
