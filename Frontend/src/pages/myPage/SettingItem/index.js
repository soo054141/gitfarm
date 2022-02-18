import React from "react";
import PropTypes from "prop-types";
import { Wrapper, SubTitle, Content } from "./style";

function SettingItem({ subTitle, textColor, content, onClick, cursor }) {
  return (
    <Wrapper onClick={onClick} cursor={cursor}>
      <SubTitle textColor={textColor}>{subTitle}</SubTitle>
      <Content>{content}</Content>
    </Wrapper>
  );
}

SettingItem.defaultProps = {
  subTitle: "로그인 계정22",
  textColor: "#595959",
  content: "testId",
  cursor: false,
  onClick: () => {},
};

SettingItem.propTypes = {
  subTitle: PropTypes.string,
  textColor: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  cursor: PropTypes.bool,
};

export default SettingItem;
