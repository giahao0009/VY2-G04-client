import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

DataTable.propTypes = {
  dataTable: PropTypes.array,
};

DataTable.defaultProps = {
  dataTable: [],
};

function DataTable(props) {
  const onDelete = async (e, id) => {
    e.preventDefault();
    if (window.confirm("Bạn có muốn xoá thông tin này ???") == true) {
      await props.handleDelete(id);
      window.location.reload();
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {props.headingTable.map((item, index) => {
            return (
              <th key={index} scope="col">
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.dataTable.map((item, index) => {
          if (index == 10) return;
          let row = Object.keys(item).map((key, index) => {
            if (key === "updatedAt" || key === "createdAt") {
              return (
                <td scope="row" key={index}>
                  {moment(item[key]).format("YYYY-MM-DD")}
                </td>
              );
            }
            if (key === "vehicleId") {
              return;
            }
            if (key == "companyId") {
              return;
            }
            return (
              <td scope="row" key={index}>
                {item[key]}
              </td>
            );
          });
          return (
            <tr key={index}>
              {row}
              <td style={{ padding: "0px" }}>
                <Link to={props.linkDetail + item[props.itemId]}>
                  <button class="btn btn-warning">Chi tiết</button>
                </Link>
              </td>
              <td style={{ padding: "0px" }}>
                <a
                  href="#"
                  onClick={(e) => {
                    onDelete(e, item[props.itemId]);
                  }}
                >
                  <button class="btn btn-danger">Xoá</button>
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataTable;
