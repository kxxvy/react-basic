import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

import { headerLinks } from "@/common/local-data";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function AppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="请输入关键字"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
