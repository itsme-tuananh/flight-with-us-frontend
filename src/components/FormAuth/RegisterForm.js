import React, { Fragment } from 'react';

import './FormAuth.css';

function RegisterForm(props) {
  return (
    <Fragment>
      <div className="container_main-form">
        <div className="container_main-form-content">
          <h3 className="title">Đăng ký</h3>
          <div className="user">
            <div className="form-field">
              <input type="text" className="form-input" placeholder=" " />
              <label htmlFor="name" className="form-label">
                Tên <span className="dausao">*</span>
              </label>
            </div>
            <div className="form-field">
              <input type="text" className="form-input" placeholder=" " />
              <label htmlFor="name" className="form-label">
                Họ <span className="dausao">*</span>
              </label>
            </div>
          </div>
          <div className="form-field">
            <input type="text" className="form-input" placeholder=" " />
            <label htmlFor="name" className="form-label">
              Điện thoại hoặc Email <span className="dausao">*</span>
            </label>
          </div>
          <div className="form-field">
            <input type="text" className="form-input" placeholder=" " />
            <label htmlFor="name" className="form-label">
              Mật khẩu <span className="dausao">*</span>
            </label>
          </div>
          <div className="form-field">
            <input type="text" className="form-input" placeholder=" " />
            <label htmlFor="name" className="form-label">
              Nhập lại mật khẩu <span className="dausao">*</span>
            </label>
          </div>
          <button className="btn-login">Đăng ký</button>
          <p className="content-text">
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với{' '}
            <span className="content-text-span">Điều khoản dịch vụ </span>,
            <span className="content-text-span">Chính sách dữ liệu </span> ,
            <span className="content-text-span"> Chính sách cookie </span> và{' '}
            <span className="content-text-span">
              {' '}
              Tiêu chuẩn cộng đồng của chúng tôi{' '}
            </span>
          </p>
          <p className="content-text">
            Bạn đã có tài khoản?{' '}
            <span className="content-text-span" onClick={props.authModeToggler}>
              {' '}
              Đăng nhập
            </span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default RegisterForm;