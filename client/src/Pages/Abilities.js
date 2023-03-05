import { Card, Col, List, Rate, Row } from "antd";
import React, { Fragment } from "react";
import { Space, Typography } from "antd";
import { profileData } from "../config/ProfileConfig";
import { colors } from "../config/colors";
const { Text, Link } = Typography;

const ListComp = ({ data, header, className }) => (
  <List
    className={className}
    grid={{
      gutter: 12,
      xl: 3,
      xxl: 3,
      lg: 3,
      md: 2,
      sm: 1,
      xs: 1,
    }}
    header={
      <div
        style={{
          color: colors.primary,
          fontWeight: 500,
        }}
      >
        {header}
      </div>
    }
    dataSource={data}
    bordered
    renderItem={(item) => (
      <List.Item key={item?.title} className="hvr-float-shadow">
        <div className="listItemCont">
          <Text>{item?.title}</Text>
          <Rate allowHalf disabled defaultValue={item?.rate} />
        </div>
      </List.Item>
    )}
  />
);

const Intro = ({ id }) => {
  const { skills, tools } = profileData;
  return (
    <div className="pageContainer">
      <Space size={45} direction="vertical">
        <ListComp data={skills} header="SKILLS" className="animation a6" />
        <ListComp data={tools} header="TOOLS" className="animation a7" />
      </Space>
    </div>
  );
};

export default Intro;
