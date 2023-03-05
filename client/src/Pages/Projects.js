import { Col, Row } from "antd";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { profileData } from "../config/ProfileConfig";

const Carrer = ({ id }) => {
  const { projects } = profileData;
  return (
    <div className="pageContainer" >
      <div style={{ width: "100%" }}>
        <Row gutter={[16, 16]}>
          {projects?.map((el, i) => (
            <Col
              id={el?.label}
              xs={24}
              sm={12}
              md={12}
              lg={8}
              xl={6}
              xxl={6}
              className={`animation a${i + 1}`}
            >
              <ProjectCard data={el} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default Carrer;
