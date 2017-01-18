import React from 'react';
import Cell from './Cell';

function TableHeader(props) {
	// Click event on the header
	function handleClick(e) {
		e.preventDefault();
    	console.log('The header was clicked.');
	}

	var headerStyle = {
		margin: 10,
		display: "inline-block",
		backgroundColor: "#b2b5b6",
		color: "#2d3539",
		width: 120
	}
	var headerName= props.data.display
	return (
		<div className = 'table-TableControl--tableRow-data' style = {headerStyle} onClick={handleClick}>
			<span> {headerName} </span>
		</div>
	);
}
export default TableHeader;