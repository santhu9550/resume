import { CheckCircleOutlined } from "@ant-design/icons";
import { Divider, Space, Tag, Timeline, Typography } from "antd";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { CompanyIcon, LocationIcon, SchoolIcon } from "../Icons/Icons";

import { colors } from "../config/colors";
import { Fragment } from "react";

const { Title, Text } = Typography;

const Leaf = ({ el, mdScreen, className, xlScreen }) => (
  <div
    key={el?.title}
    style={{ margin: mdScreen ? "15px 13px" : "15px 25px" }}
    className={className}
  >
    <Title style={{ color: colors?.primary, marginBottom: "-3px" }} level={5}>
      {el?.title}
    </Title>
    <Text
      style={{ fontSize: "13px", textTransform: "uppercase" }}
      type="secondary"
    >
      {el?.type} <Divider style={{ background: "#ddd" }} type="vertical" />
      {el?.desc}
    </Text>
    <br />
    <div
      style={{
        margin: "6px 0 -13px 0",
        display: "inline-block",
        width: xlScreen ? "100%" : "80%",
      }}
    >
      <Text>{el?.body}</Text>
    </div>
    <br />
    <div>
      <Space size={[5, 7]} wrap>
        <Tag icon={<CheckCircleOutlined />} color="default">
          {el?.duration}
        </Tag>
        <Tag icon={<LocationIcon />} color="default">
          {el?.location}
        </Tag>
      </Space>
    </div>
  </div>
);

const TimelineView = ({ data }) => {
  const mdScreen = useMediaQuery({ query: "(max-width: 700px)" });
  const xlScreen = useMediaQuery({ query: "(max-width: 1200px)" });

  const items = data?.map((el, i) => ({
    children: (
      <Fragment key={i}>
        <Leaf
          el={el}
          mdScreen={mdScreen}
          xlScreen={xlScreen}
          className={`animation a${i + 1}`}
        />
      </Fragment>
    ),
    dot:
      el?.type == "company" ? (
        <CompanyIcon
          key={i}
          style={{
            fontSize: "25px",
            border: "1px solid " + colors?.primary,
            borderRadius: "100%",
            padding: "10px",
          }}
          className={`animation a${i + 1}`}
        />
      ) : (
        <SchoolIcon
          key={i}
          style={{
            fontSize: "25px",
            border: "1px solid " + colors?.primary,
            borderRadius: "100%",
            padding: "10px",
          }}
          className={`animation a${i + 1}`}
        />
      ),
  }));

  return (
    <div style={{ padding: mdScreen ? "10px 15px" : "10px 0px" }}>
      <Timeline mode={mdScreen ? "left" : "alternate"} items={items} />
    </div>
  );
};

export default TimelineView;
