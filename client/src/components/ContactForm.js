import {
  Button,
  Col,
  Descriptions,
  Divider,
  Input,
  notification,
  Row,
} from "antd";
import React, { useMemo } from "react";
import SocialContent from "./SocialCont";
import { colors } from "../config/colors";
import "../contact.css";
import { useState } from "react";
const initialFormState = {
  name: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = React.useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (msg, desc) => {
    api.info({
      message: (
        <span style={{ color: msg == "SUCCESS" ? colors?.primary : "red" }}>
          {msg}
        </span>
      ),
      description: desc,
      placement: "topRight",
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log({ formData });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch("/sendmail", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        setLoading(false);
        if ("success" in data && data?.success) {
          openNotification("SUCCESS", "Message sent ");
          setFormData(initialFormState);
        } else {
          openNotification(
            "FAIL",
            "Failed to send message, try alternate options below. "
          );
        }
      })
      .catch((error) => {
        setLoading(false);
        openNotification(
          "FAIL",
          "Failed to send message, try alternate options below. "
        );
      });
  };

  const changeHandler = (e) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="contactContainer">
      {contextHolder}
      <form onSubmit={submitHandler}>
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <div className="header">
              <h4 className="animation a2">
                Have any discussions/questions? I'd love to hear from you.
              </h4>
            </div>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            className="colContainer"
          >
            <input
              type="text"
              className="form-field animation a3"
              placeholder="Enter Your Name"
              name="name"
              required
              minLength={5}
              maxLength={100}
              value={formData?.name}
              onChange={changeHandler}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            className="colContainer"
          >
            <input
              type="email"
              className="form-field animation a4"
              placeholder="Enter Your Email"
              name="email"
              required
              value={formData?.email}
              onChange={changeHandler}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            className="colContainer"
          >
            <textarea
              type="text"
              className="form-field txtArea animation a5"
              placeholder="Enter Your Message"
              multiple
              minLength={100}
              maxLength={10000}
              required
              value={formData?.message}
              onChange={changeHandler}
              name="message"
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            className="colContainer"
          >
            <Button
              style={{
                backgroundColor: colors?.primary,
                color: "#fff",
                width: "30%",
                borderColor: colors?.primary,
              }}
              className="animation a6"
              htmlType="submit"
              disabled={loading}
            >
              {loading ? "Loading.." : "SUBMIT"}
            </Button>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            className="colContainer"
          >
            <Divider style={{ color: "#eee", borderColor: "#eee" }}>OR</Divider>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            className="colContainer"
          >
            <SocialContent />
          </Col>
        </Row>
      </form>
    </div>
  );
};
export default ContactForm;
