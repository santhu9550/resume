import { Descriptions, Space, Typography } from "antd";
import React from "react";
import { profileData } from "../config/ProfileConfig";
import "../Icons.css";
const { Text, Link } = Typography;
const SocialContent = () => {
  const { linkedin, instagram, github, mail, whatsapp } = profileData?.social;
  return (
    <div className="socialCont">
      <Descriptions layout="vertical">
        <Descriptions.Item
          label="Follow or Connect with "
          className="iconCont"
          labelStyle={{ color: "#fff" }}
        >
          <Space size={[20, 20]} className="social-network social-circle">
            <div>
              <a
                target="_blank"
                href={linkedin}
                className="icoLinkedin animation a5"
                title="Linkedin"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <div>
              <a target="_blank" href={github} className="icoGithub animation a6" title="Github">
                <i className="fa fa-github"></i>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href={whatsapp}
                className="icoWhatsapp animation a7"
                title="Whatsapp"
              >
                <i className="fa fa-whatsapp"></i>
              </a>
            </div>

            <div>
              <a
                target="_blank"
                href={instagram}
                className="icoInstagram animation a8"
                title="Instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href={`mailto:${mail}`}
                className="icoMail animation a9"
                title="Mail"
              >
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </Space>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default SocialContent;
