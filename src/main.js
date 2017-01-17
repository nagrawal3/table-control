import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
 
document.addEventListener('DOMContentLoaded', function() {
  const tableContent = {
  	tableRow: [
  		{
  			name: 'Nikhil Agrawal',
  			age: '26',
  			sex: 'Male',
        type: 'inpatient',
        priority: 'Routine',
        procedure: 'CT Chest',
        images: '2',
        status: 'Started',
        date: '01/10/2016'
  		},
  		{
  			name: 'Abhishekar Mechineni',
  			age: '26',
  			sex: 'Male',
        type: 'inpatient',
        priority: 'Routine',
        procedure: 'CT Lung',
        images: '1',
        status: 'Completed',
        date: '01/16/2017'
  		}
  	]
  }
  const tableHeader = {
    tableHeaderData: [
      'Patient Name',
      'Age',
      'Sex',
      'Patient Type',
      'Priority',
      'Procedure',
      'images',
      'Exam Status',
      'Completed Date'
    ]
  }
  ReactDOM.render(
    // React.createElement(Counter, {name: 'Aashay'}),
    React.createElement(Table, {tableContent, tableHeader}),
    document.getElementById('mount')
  );
});