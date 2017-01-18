import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
 
document.addEventListener('DOMContentLoaded', function() {
  const table = (
    <Table 
      columnWidth = 'small'
      numColumns = '8'
      headers = {[
        {
          display: 'Patient',
          sort: 'asc'
        },
        {
          display: 'Age',
          sort: ''
        },
        {
          display: 'Sex',
          sort: ''
        },
        {
          display: 'Patient Type',
          sort: ''
        },
        {
          display: 'Priority',
          sort: ''
        },
        {
          display: 'Procedure',
          sort: ''
        },
        {
          display: 'Images',
          sort: ''
        },
        {
          display: 'Completed Date',
          sort: ''
        }
      ]}
      rows = {[
        {
          rowHeight: 'small',
          selected: 'true',
          data: [
            {
              content: 'Nikhil Agrawal',
              onclick: ''
            },
            {
              content: '26',
              onclick: ''
            },
            {
              content: 'M',
              onclick: ''
            },
            {
              content: 'inpatient',
              onclick: ''
            },
            {
              content: 'routine',
              onclick: ''
            },
            {
              content: 'CT Chest',
              onclick: ''
            },
            {
              content: '2',
              onclick: ''
            },
            {
              content: 'started',
              onclick: ''
            }
          ]
        },
        {
          rowHeight: 'small',
          selected: 'true',
          data: [
            {
              content: 'Abhishekar Mechineni',
              onclick: ''
            },
            {
              content: '26',
              onclick: ''
            },
            {
              content: 'M',
              onclick: ''
            },
            {
              content: 'outpatient',
              onclick: ''
            },
            {
              content: 'routine',
              onclick: ''
            },
            {
              content: 'CT Lung',
              onclick: ''
            },
            {
              content: '2',
              onclick: ''
            },
            {
              content: 'completed',
              onclick: ''
            }
          ]
        }
      ]}
      striped = 'true'
    >
    </Table>
  );
  // const tableContent = {
  // 	tableRow: [
  // 		{
  // 			name: 'Nikhil Agrawal',
  // 			age: '26',
  // 			sex: 'Male',
  //       type: 'inpatient',
  //       priority: 'Routine',
  //       procedure: 'CT Chest',
  //       images: '2',
  //       status: 'Started',
  //       date: '01/10/2016'
  // 		},
  // 		{
  // 			name: 'Abhishekar Mechineni',
  // 			age: '26',
  // 			sex: 'Male',
  //       type: 'inpatient',
  //       priority: 'Routine',
  //       procedure: 'CT Lung',
  //       images: '1',
  //       status: 'Completed',
  //       date: '01/16/2017'
  // 		}
  // 	]
  // }
  // const tableHeader = {
  //   tableHeaderData: [
  //     'Patient Name',
  //     'Age',
  //     'Sex',
  //     'Patient Type',
  //     'Priority',
  //     'Procedure',
  //     'images',
  //     'Exam Status',
  //     'Completed Date'
  //   ]
  // }
  ReactDOM.render(
    // React.createElement(Counter, {name: 'Aashay'}),
    // React.createElement(Table, {tableContent, tableHeader}),
    table,
    document.getElementById('mount')
  );
});