import React from "react";

function Slider() {
  return (
    <div className="slider">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div>
              <h3 className="mb-4 title">Đến sân bay không còn mệt mỏi</h3>
              <p className="mb-4 description">
                Biến chuyến đi đến và từ sân bay đi trở nên tiện lợi nhất có
                thể! Với nhiều lựa chọn phương tiện phù hợp với nhu cầu của bạn,
                hãy đặt ngay xe đưa đón sân bay hôm nay để bớt đi một nỗi lo
                nhé.
              </p>
              <button className="btn btn-success btn-order">Đặt xe</button>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
