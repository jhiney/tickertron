import React from "react";

export default class FileDialogue extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile: null
		};
	}

	// On file select
	onFileSelect = (event) => {
		this.setState({ selectedFile: event.target.files[0] });
	};

	//if you want to display the file data
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

  
	onFileUpload = () => {
		this.props.fileCallback(this.state.selectedFile.name);
	};

	render() {
		return (
			<div>
				<div>
					<input type="file" onChange={this.onFileSelect} />
					<button onClick={this.onFileUpload}>Upload!</button>
				</div>
			</div>
		);
	}
}
