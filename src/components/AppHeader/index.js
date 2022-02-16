import React, { memo } from "react";
import { NavLink } from "react-router-dom";

export default memo(function AppHeader() {
  return (
    <div>
      <NavLink to="/login">登录</NavLink>
      <NavLink to="/home">首页</NavLink>
      <NavLink to="/mine">我的</NavLink>
    </div>
  );
});
