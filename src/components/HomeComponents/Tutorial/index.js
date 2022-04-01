import React from "react";

function Tutorial() {
  return (
    <section className="section-tutorial">
      <div className="container">
        <h2 className="text-center title">Cách đặt xe</h2>
        <div className="tutorial-description">
          <div>
            <div className="number">1</div>
            <h3 className="title">Tìm xe</h3>
            <p className="description">
              Bắt đầu tìm kiếm bằng cách chọn điểm xuất phát và điểm đến (một
              trong hai phải là sân bay), điền thông tin ngày giờ đón cũng như
              số hành khách.
            </p>
          </div>
          <div>
            <div className="number">2</div>
            <h3 className="title">Chọn xe</h3>
            <p className="description">
              Chọn xe phù hợp nhất với nhu cầu của bạn từ trang kết quả tìm
              kiếm, bao gồm xe thuê riêng và phương tiện công cộng.
            </p>
          </div>
          <div>
            <div className="number">3</div>
            <h3 className="title">Xem thông tin xe</h3>
            <p className="description">
              Kiểm tra thông tin xe, địa điểm đón và xuống xe. Lưu ý cung cấp
              thông tin chuyến bay nếu được yêu cầu.
            </p>
          </div>
          <div>
            <div className="number">4</div>
            <h3 className="title">Điền biểu mẫu đặt chỗ</h3>
            <p className="description">
              Điền thông tin liên hệ và thông tin hành khách. Đảm bảo thông tin
              chính xác để tránh rắc rối về sau trên hành trình của bạn.
            </p>
          </div>
          <div>
            <div className="number">5</div>
            <h3 className="title">Hoàn tất thanh toán</h3>
            <p className="description">
              Kiểm tra lại thông tin đặt chỗ trước khi tiếp tục thanh toán. Chọn
              phương thức thanh toán yêu thích và hoàn tất đặt chỗ.
            </p>
          </div>
          <div>
            <div className="number">6</div>
            <h3 className="title">Nhận phiếu thanh toán</h3>
            <p className="description">
              Khi thanh toán đã được xác thực, phiếu thanh toán đưa đón sân bay
              của bạn sẽ được gửi đến ứng dụng Traveloka hoặc email.
            </p>
          </div>
        </div>
        <button className="btn btn-success w-100">Đặt xe ngay</button>
      </div>
    </section>
  );
}

export default Tutorial;
