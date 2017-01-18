import React from 'react';

class Cell extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var cellStyle = {
			margin: 10,
			display: "inline-block",
			width: 120
		};
		var data = this.props.data;
		return (
			<div className='table-TableControl-cellData' style= {cellStyle}>
				<span> {data} </span>
			</div>
		);
	}
}
export default Cell;