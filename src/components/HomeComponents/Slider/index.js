import React from "react";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div className="slider">
      <div className="container custom-slider-container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="slider-title">
              <h3 className="mb-4 title">Đến sân bay không còn mệt mỏi</h3>
              <p className="mb-4 description">
                Biến chuyến đi đến và từ sân bay đi trở nên tiện lợi nhất có
                thể! Với nhiều lựa chọn phương tiện phù hợp với nhu cầu của bạn,
                hãy đặt ngay xe đưa đón sân bay hôm nay để bớt đi một nỗi lo
                nhé.
              </p>
              <Link to="/booking" className="btn btn-success">
                Đặt xe ngay
              </Link>
            </div>
          </div>
          <div className="col-6">
            <img
              className="slider-img"
              srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/10/1636531914937-40fe96ca5be35b81c72d68c59df8b0ed.jpeg?tr=h-230,q-75,w-476 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/11/10/1636531914937-40fe96ca5be35b81c72d68c59df8b0ed.jpeg?tr=dpr-2,h-230,q-75,w-476 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/11/10/1636531914937-40fe96ca5be35b81c72d68c59df8b0ed.jpeg?tr=dpr-3,h-230,q-75,w-476 3x"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
