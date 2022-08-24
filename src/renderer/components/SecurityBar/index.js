import classNames from "classnames";
import React from "react";
import "./styles.scss";

const SecurityBar = ({ value }) => {
  const length = value < 6 ? "sec-low" : value < 12 ? "sec-medium" : "sec-high";

  return (
    <div className="security-bar">
      <div className={classNames("security-bar-inner", length)} />
    </div>
  );
};

export default SecurityBar;
