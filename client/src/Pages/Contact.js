import { Col, Divider, Row, Typography } from "antd";
import React from "react";
import ContactForm from "../components/ContactForm";
import { profileData } from "../config/ProfileConfig";
import SocialContent from "../components/SocialCont";
const { Text, Link } = Typography;

const Contact = ({ id }) => {
  const { projects } = profileData;
  return (
    <div style={{ width: "100%" }}>
      <div className="pageContainer">
        <ContactForm />
      </div>
      <div style={{ textAlign: "center" }}>
        <Text style={{ color: "#fff" }}>
          Santhosh Gunda © | all rights reserved.
        </Text>
      </div>
    </div>
  );
};
export default Contact;
