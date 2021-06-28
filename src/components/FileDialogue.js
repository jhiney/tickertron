import React from "react";

export default class FileDialogue extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// Initially, no file is selected
			selectedFile: null
		};
	}

	// On file select
	onFileChange = (event) => {
		this.setState({ selectedFile: event.target.files[0] });
	};

	fileData = () => {
		if (this.state.selectedFile) {
			return (
				<div>
					<h2>File Details:</h2>
					<p>File Name: {this.state.selectedFile.name}</p>
					<p>File Type: {this.state.selectedFile.type}</p>
					<p>Last Modified: {this.state.selectedFile.lastModifiedDate.toDateString()}</p>
				</div>
			);
		} else {
			return (
				<div>
					<h4>Pick a file</h4>
				</div>
			);
		}
	};

	render() {
		return (
			<div>
				<div>
					<input type="file" onChange={this.onFileChange} />
				</div>
				{this.fileData()}
			</div>
		);
	}
}
