import React from 'react';
import TableHeader from './TableHeader';
import TableRows from './TableRows';

/**
* A Table will return 3X3 table
*/
class Table extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var tableHeaderVar = this.props.headers;
		var columnWidth = this.props.columnWidth;
		var numColumns = this.props.numColumns;
		var rows = this.props.rows;
		var striped = this.props.striped;

		const tableHeader = tableHeaderVar.map((data) =>
			<TableHeader data = {data} />
		);

		var rowStyle = {
			borderStyle: 'solid',
    		borderWidth: 1,
    		height: 50,
    		width: 1150
		}

		const tableRows = rows.map((data) =>
			<TableRows data = {data} headers = {tableHeaderVar} style = {rowStyle}/>
		);
		// const tableRowData = this.props.tableContent.tableRow
		// const tableRow = tableRowData.map((data) => 
		// 	<div className= 'table-TableControl--tableRowWrapper' key = {data.name} >
		// 		<Cell className='table-TableControl--tableRow-data' data = {data.name} />
		// 		<Cell className='table-TableControl--tableRow-data' data = {data.age} />
		// 		<Cell className='table-TableControl--tableRow-data' data = {data.sex} />
		// 		<Cell className='table-TableControl--tableRow-data' data = {data.type} /> 
		// 		<Cell className='table-TableControl--tableRow-data' data = {data.priority} /> 
		// 		<Cell className='table-TableControl--tableRow-data' data = {data.procedure} /> 
		// 		<Cell className='table-TableControl--tableRow-data' data = {data.images} /> 
		// 		<Cell className='table-TableControl--tableRow-data' data = {data.status} /> 
		// 		<Cell className='table-TableControl--tableRow-data' data = {data.date} /> 
		// 	</div>
		// );
		return (
			<div className='table-TableControl'>
				{tableHeader}
				{tableRows}
			</div>
		);
	}
}
export default Table;