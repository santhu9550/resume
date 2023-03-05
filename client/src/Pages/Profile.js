import {
  Avatar,
  Col,
  Descriptions,
  Divider,
  Row,
  Space,
  Typography,
} from "antd";
import React, { Fragment } from "react";
import { colors } from "../config/colors";
import { profileData } from "../config/ProfileConfig";
const { Title, Text } = Typography;

const Profile = ({ id }) => {
  const { name, roles, age, description, city, itExp, languages,photo } =
    profileData?.profile;
  return (
    <div className="pageContainer">
      <Row justify="space-around" gutter={[12, 12]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Row justify="center" gutter={[10, 10]}>
            <Col xs={0} sm={0} md={1} lg={2} xl={4} xxl={4} />
            <Col xs={24} sm={24} md={9} lg={8} xl={6} xxl={6}>
              <div className="profileColContainer  animation a9">
                <Avatar
                  size={260}
                  src={photo}
                  alt="santhu"
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={13} lg={12} xl={10} xxl={10}>
              <div className="profileColContainer profileColContainerDetails">
                <Space direction="vertical">
                  <Title
                    style={{ color: colors?.primary }}
                    level={2}
                    className="animation a2"
                  >
                    {name}
                  </Title>
                  <Text
                    style={{ fontSize: "12px", fontWeight: 500 }}
                    className="animation a3"
                  >
                    {roles?.map((el, ind) => (
                      <Fragment key={ind}>
                        {el}
                        {ind !== roles?.length - 1 && (
                          <Divider
                            type="vertical"
                            style={{ backgroundColor: "#000" }}
                          />
                        )}
                      </Fragment>
                    ))}
                  </Text>
                  <Text className="animation a4" style={{ fontSize: "16px" }}>
                    {description}
                  </Text>
                </Space>
              </div>
            </Col>
            <Col xs={0} sm={0} md={1} lg={2} xl={4} xxl={4} />
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} />
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Descriptions
            layout="vertical"
            column={{ xxl: 4, xl: 4, lg: 4, md: 2, sm: 2, xs: 2 }}
            size="default"
            labelStyle={{ color: colors.primary, fontSize: "16px" }}
            contentStyle={{ fontSize: "15px", justifyContent: "center" }}
          >
            <Descriptions.Item className="animation a5" label="Age">
              {age} Years
            </Descriptions.Item>
            <Descriptions.Item className="animation a6" label="City">
              {city}
            </Descriptions.Item>
            <Descriptions.Item className="animation a7" label="Languages">
              {languages}
            </Descriptions.Item>

            <Descriptions.Item className="animation a8" label="Experience">
              {itExp}+ Years
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
