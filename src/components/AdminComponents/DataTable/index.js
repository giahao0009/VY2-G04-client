import React from 'react';

function DataTable(props) {
    console.log(props);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    {props.headingTable.map((item, index)=> {
                        return (<th  key={index} scope="col">{item}</th>)
                    } )}
                </tr>
            </thead>
            <tbody>
                {
                    props.dataTable.map((item, index)=>{
                        let row = Object.keys(item).map((key, index)=>{
                            console.log(key, item[key]);
                            return (<td>{item[key]}</td>)
                        })
                        return (<tr>{row}</tr>)
                    })
                }
            </tbody>
        </table>
    )
}

export default DataTable;