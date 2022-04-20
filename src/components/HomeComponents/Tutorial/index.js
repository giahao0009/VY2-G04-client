import React from "react";

function Tutorial() {
  return (
    <section className="section-tutorial">
      <h2 className="fs-4 text-center mb-4">Cách đặt chỗ</h2>
      <div className="container">
        <div className="row align-items-cente mb-4">
          <div className="col-6 text-center">
            <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602655872765-90939a9e4469047ceaafb8847a7723a6.png?tr=q-75,w-386" />
          </div>
          <div className="col-6">
            <div className="tutorial-step" data-step="1">
              <span className="title">Tìm xe</span>
              <p className="description">
                Bắt đầu tìm kiếm bằng cách chọn điểm xuất phát và điểm đến (một
                trong hai phải là sân bay), điền thông tin ngày giờ đón cũng như
                số hành khách.
              </p>
            </div>
          </div>
        </div>
        <div className="step-line">
          <span></span>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-6">
            <div className="tutorial-step margin-left-auto" data-step="2">
              <span className="title">Chọn xe</span>
              <p className="description">
                Chọn xe phù hợp nhất với nhu cầu của bạn từ trang kết quả tìm
                kiếm, bao gồm xe thuê riêng và phương tiện công cộng.
              </p>
            </div>
          </div>
          <div className="col-6 text-center">
            <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602655925690-b11a4b377d38c89fcb66bebcf43953a9.png?tr=q-75,w-386" />
          </div>
        </div>
        <div className="step-line-left">
          <span></span>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-6 text-center">
            <img srcSet="	https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602655969956-2cfc12933ddcdbe827ef23122d4d60df.png?tr=q-75,w-386" />
          </div>
          <div className="col-6">
            <div className="tutorial-step" data-step="3">
              <span className="title">Xem thông tin xe</span>
              <p className="description">
                Kiểm tra thông tin xe, địa điểm đón và xuống xe. Lưu ý cung cấp
                thông tin chuyến bay nếu được yêu cầu.
              </p>
            </div>
          </div>
        </div>
        <div className="step-line">
          <span></span>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-6">
            <div className="tutorial-step margin-left-auto" data-step="4">
              <span className="title">Điền biểu mẫu đặt chỗ</span>
              <p className="description">
                Điền thông tin liên hệ và thông tin hành khách. Đảm bảo thông
                tin chính xác để tránh rắc rối về sau trên hành trình của bạn.
              </p>
            </div>
          </div>
          <div className="col-6 text-center">
            <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602656285316-0cb97dda72c718543f5247653dc587bc.png?tr=q-75,w-386" />
          </div>
        </div>
        <div className="step-line-left">
          <span></span>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-6 text-center">
            <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602656521269-54f20cd416c5ffb23c457adcbfc322aa.png?tr=q-75,w-386" />
          </div>
          <div className="col-6">
            <div className="tutorial-step" data-step="5">
              <span className="title">Hoàn tất thanh toán</span>
              <p className="description">
                Kiểm tra lại thông tin đặt chỗ trước khi tiếp tục thanh toán.
                Chọn phương thức thanh toán yêu thích và hoàn tất đặt chỗ.
              </p>
            </div>
          </div>
        </div>
        <div className="step-line">
          <span></span>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            <div className="tutorial-step margin-left-auto" data-step="6">
              <span className="title">Nhận phiếu thanh toán</span>
              <p className="description">
                Khi thanh toán đã được xác thực, phiếu thanh toán đưa đón sân
                bay của bạn sẽ được gửi đến ứng dụng Traveloka hoặc email.
              </p>
            </div>
          </div>
          <div className="col-6 text-center">
            <img srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/14/1602656607686-b0aa6271787a6226f9d8de665538f485.png?tr=q-75,w-386" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tutorial;
