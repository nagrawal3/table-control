import React from 'react';
import Cell from './Cell';

function TableRow(props){
	console.log('this is row data ');
	const rows = props.data.data.map((cell) =>
		<Cell data = {cell.content}/>
	);
	return (
		<div style = {props.style}>
			{rows}
		</div>
	);
}
export default TableRow;