import React, { Fragment } from "react";
import { Typography } from "antd";
import { colors } from "../config/colors";
import { Divider } from "antd";
const { Title } = Typography;
const PageTitle = ({ id }) => {
  return (
    <Fragment>
      <div
        style={{
          height: "10rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "uppercase",
          flexDirection: "column",
        }}
      >
        <Title
          style={{ color: colors?.primary }}
          level={2}
          className="animation a6"
        >
          {id}
        </Title>
        <div style={{ width: "50%" }} className="animation a7">
          <Divider style={id == "contact" ? { borderColor: "#2E3840" } : {}} />
        </div>
      </div>
    </Fragment>
  );
};

export default PageTitle;
