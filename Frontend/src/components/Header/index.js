import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Refresh from "@/assets/icon/header/refresh.svg";
import Seeds from "@/assets/icon/header/seeds.svg";
import BackButton from "@/assets/icon/header/back-button.svg";
import { HeaderBackground, HeaderWrapper } from "./style";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/setting" || location.pathname === "/goal") {
    return (
      <HeaderWrapper>
        <BackButton onClick={() => navigate(-1)} />
      </HeaderWrapper>
    );
  }
  if (location.pathname === "/") {
    return null;
  }
  return (
    <HeaderWrapper>
      <HeaderBackground />
      <Refresh />
      <Link to="/badge">
        <Seeds />
      </Link>
    </HeaderWrapper>
  );
}

export default Header;
