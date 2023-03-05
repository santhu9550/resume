import {
  Button,
  Card,
  Carousel,
  Descriptions,
  Space,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import React, { Fragment } from "react";
import { colors } from "../config/colors";
import { CodeIcon, RedirectIcon } from "../Icons/Icons";
const { Title, Text } = Typography;

const { Meta } = Card;

const ProjectCard = ({ data, id }) => (
  <Card
    id={data?.title}
    // style={{ maxWidth: 450 }}
    cover={
      <Carousel autoplay>
        {data?.images?.map((el, i) => (
          <img alt="img" src={el} key={i} />
        ))}
      </Carousel>
    }
    actions={[
      <Tooltip
        title={data?.redirect?.tooltip}
        color={colors?.primary}
        key={colors?.primary}
      >
        <Button
          onClick={() => window.open(data?.redirect?.url)}
          shape="circle"
          disabled={
            data?.redirect?.url == null || data?.redirect?.url?.length <= 0
          }
          icon={<RedirectIcon key="Redirect" style={{ display: "block" }} />}
        />
      </Tooltip>,

      <Tooltip
        title={data?.code?.tooltip}
        color={colors?.primary}
        key={colors?.primary}
      >
        <Button
          onClick={() => window.open(data?.code?.url)}
          disabled={data?.code?.url == null || data?.code?.url?.length <= 0}
          shape="circle"
          icon={<CodeIcon key="code" style={{ display: "block" }} />}
        />
      </Tooltip>,
    ]}
  >
    <Meta
      title={<div style={{ color: colors?.primary }}>{data?.title}</div>}
      description={
        <Fragment>
          <Text>{data?.desc}</Text>
          <br />
          <Descriptions column={1} style={{ marginTop: "15px" }}>
            <Descriptions.Item
              label="CLIENT"
              contentStyle={{ color: colors?.primary }}
            >
              {data?.client}
            </Descriptions.Item>
            <Descriptions.Item label="TECH">
              <Space size={[0, 5]} wrap>
                {data?.tech?.map((el, i) => (
                  <Tag key={i} id={el}>
                    {el}
                  </Tag>
                ))}
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Fragment>
      }
    />
  </Card>
);

export default ProjectCard;
