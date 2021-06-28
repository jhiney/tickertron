import React from "react";

class FileDialogue extends React.Component {
	componentDidMount() {
		this.fileSelector = buildFileSelector();
	}

	handleFileSelect = (event) => {
		event.preventDefault();
		this.fileSelector.click();
	};

	render() {
		return (
			<a className="button" href=" " onClick={this.handleFileSelect}>
				Select files
			</a>
		);
	}
}

function buildFileSelector() {
	const fileSelector = document.createElement("input");
	fileSelector.setAttribute("type", "file");
	fileSelector.setAttribute("multiple", "multiple");
	return fileSelector;
}

export default FileDialogue;
