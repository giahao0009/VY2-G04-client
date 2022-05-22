import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import stationApi from "../../../../apis/stationApi";
import schedulerApi from "../../../../apis/schedulerApi";

function DetailScheduler() {
  const param = useParams();
  const [stations, setStations] = useState([]);
  const [schedulerDetail, setSchedulerDetail] = useState([]);

  useEffect(() => {
    const featchStation = async () => {
      const response = await stationApi.getAll();
      setStations(response.data);
    };
    featchStation();
  }, []);

  useEffect(() => {
    const featchSchedulerDetail = async () => {
      const response = await schedulerApi.getDetailScheduler(param.id);
      const list = response.data;
      list.sort((a, b) => {
        return a.indexDetail - b.indexDetail;
      });
      setSchedulerDetail(list);
    };
    featchSchedulerDetail();
  }, []);
  return (
    <div>
      <h2 className="mb-3 fs-3 text-center">Chi tiết lịch chạy xe</h2>
      {schedulerDetail.map((item, index) => (
        <div key={index} className="input-group mb-3">
          <select
            disabled
            className="form-select station-item"
            value={item.stationId}
          >
            <option selected disabled>
              Chọn địa điểm
            </option>
            {stations.map((item, index) => {
              return (
                <option key={index} value={item.stationId}>
                  {item.stationName}
                </option>
              );
            })}
          </select>
        </div>
      ))}
    </div>
  );
}

export default DetailScheduler;
