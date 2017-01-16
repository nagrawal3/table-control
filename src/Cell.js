import React from 'react';

class Cell extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var cellStyle = {
			margin: 10,
			display: "inline-block"
		};
		var data = this.props.data
		if(data.length < 20)
			data = new Array(20 - data.length + 1).join('.') + data
		else
			data = data.substring(0,20)
		return (
			<div className='table-TableControl-cellData' style= {cellStyle}>
				<span> {data} </span>
			</div>
		);
	}
}
export default Cell;