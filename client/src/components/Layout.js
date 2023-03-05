import { UserOutlined } from "@ant-design/icons";
import { Scrollspy } from "@makotot/ghostui";
import React, { Fragment, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { colors } from "../config/colors";
import { SkillIcon } from "../Icons/Icons";
import Abilities from "../Pages/Abilities";
import Carrer from "../Pages/Carrer";
import Contact from "../Pages/Contact";
import Profile from "../Pages/Profile";
import Projects from "../Pages/Projects";
import PageTitle from "./PageTitle";

const Layout = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const data = [
    { id: "profile", Comp: Profile, Icon: UserOutlined },
    { id: "abilities", Comp: Abilities, Icon: UserOutlined },
    { id: "carrers", Comp: Carrer, Icon: SkillIcon },
    { id: "projects", Comp: Projects, Icon: UserOutlined },
    { id: "contact", Comp: Contact, Icon: UserOutlined },
  ];

  return (
    <Fragment>
      <Scrollspy sectionRefs={sectionRefs} offset={-500}>
        {({ currentElementIndexInViewport }) => (
          <Fragment>
            <Navbar
              className="navRoot"
              collapseOnSelect
              expand="lg"
              variant="dark"
              sticky="top"
            >
              <Container fluid className="navContainer">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    {data?.map(({ id, Icon }, i) => (
                      <Nav.Link
                        href={`#${id}`}
                        key={id}
                        className={`mdScrnAnimate animation a${i + 1} ${
                          currentElementIndexInViewport === i
                            ? "activeLink"
                            : "inactiveLink"
                        }`}
                      >
                        {id}
                      </Nav.Link>
                    ))}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <div>
              {data?.map(({ id, Comp }, i) => (
                <div
                  style={{
                    backgroundColor: colors[id],
                  }}
                  key={i}
                  id={id}
                  ref={sectionRefs[i]}
                >
                  <PageTitle id={id} />
                  {<Comp id={id} />}
                </div>
              ))}
            </div>
          </Fragment>
        )}
      </Scrollspy>
    </Fragment>
  );
};

export default Layout;
