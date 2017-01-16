import React from 'react';
import Cell from './Cell';

/**
* A Table will return 3X3 table
*/
class Table extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const tableHeader = this.props.tableHeader.tableHeaderData.map((data) =>
			<TableHeader data = {data} key = {data}/>
		);
		const tableRowData = this.props.tableContent.tableRow
		const tableRow = tableRowData.map((data) => 
			<div className= 'table-TableControl--tableRowWrapper' key = {data.name} >
				<Cell className='table-TableControl--tableRow-data' data = {data.name} />
				<Cell className='table-TableControl--tableRow-data' data = {data.age} />
				<Cell className='table-TableControl--tableRow-data' data = {data.sex} />
				<Cell className='table-TableControl--tableRow-data' data = {data.type} /> 
				<Cell className='table-TableControl--tableRow-data' data = {data.priority} /> 
				<Cell className='table-TableControl--tableRow-data' data = {data.procedure} /> 
				<Cell className='table-TableControl--tableRow-data' data = {data.images} /> 
				<Cell className='table-TableControl--tableRow-data' data = {data.status} /> 
				<Cell className='table-TableControl--tableRow-data' data = {data.date} /> 
			</div>
		);
		return (
			<div className='table-TableControl'>
				{tableHeader}
				{tableRow}
			</div>
		);
	}
}
export default Table;

function TableHeader(data) {
	var headerStyle = {
		margin: 10,
		display: "inline-block",
		backgroundColor: "#ffde00"
	}
	var headerName= data.data
	if(headerName.length < 20)
			headerName = new Array(20 - headerName.length + 1).join('.') + headerName
		else
			headerName = headerName.substring(0,20)
	return (
		<div className = 'table-TableControl--tableRow-data' style = {headerStyle}>
			<span> {headerName} </span>
		</div>
	);
}