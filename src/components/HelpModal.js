import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export default function HelpModal() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<HelpOutlineIcon style={{ fontSize: 35, color: "white" }} onClick={handleShow} />
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Tickertron Quick Start</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>"/" will activate Tickertron.</p>
					<p>
						Tickers are case-insensitive. Example: "aapl", "AAPL", "aApL" will all show the same
						result.
					</p>
					<p>
						Entering a new ticker will automatically add it to the list and retain previously
						entered tickers.
					</p>
					<p>
						Adding multiple tickers at a single time may be done with comma-seperated tickers.
						Example: "aapl,msft,gs,net" will add Apple, Microsoft, Goldman Sachs, and Cloudflare.
					</p>
				</Modal.Body>
			</Modal>
		</>
	);
}
