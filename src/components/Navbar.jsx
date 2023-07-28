import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "../icons/logo.png";
import { Dropdown, Space } from "antd";
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const navLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/about" },
  {
    title: "Programs",
    links: [
      {
        key: "0",
        label: (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="/online-coaching"
            className="nav-link-item"
          >
            Personal Trainer
          </Link>
        ),
      },
      {
        key: "1",
        label: (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="/online-coaching"
            className="nav-link-item"
          >
            Online Coashing
          </Link>
        ),
      },
    ],
  },
  { title: "Contact", link: "/contact" },
];

export default function Navbar() {
  const [show, setShow] = useState(false);

  const headerRef = useRef(null);
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar sticky" ref={headerRef}>
      <Link>
        <img className="logo" src={logo} alt="" />
      </Link>

      <div className={show ? "nav-links" : "nav-links hidden"}>
        {navLinks.map((nav) => {
          if (nav.title === "Programs") {
            return (
              <Dropdown
                menu={{
                  items: nav.links,
                }}
              >
                <Space>
                  <p className="nav-link">{nav.title}</p>
                </Space>
              </Dropdown>
            );
          }
          return (
            <Link to={nav.link} className="nav-link">
              {nav.title}
            </Link>
          );
        })}
      </div>

      <div className="nav-icons">
        <Link
          className="nav-icon"
          to="https://www.instagram.com/kareem_amr_saif/"
        >
          <InstagramOutlined className="icon" />
        </Link>
        <Link
          className="nav-icon"
          to="https://www.facebook.com/kareemamrsaif.1/"
        >
          <FacebookOutlined className="icon" />
        </Link>
        <Link
          className="nav-icon"
          to="https://www.youtube.com/@kareemamrsaif9190"
        >
          <YoutubeOutlined className="icon" />
        </Link>
        <Link className="nav-icon" to="https://twitter.com/Kareem_Amr_95">
          <TwitterOutlined className="icon" />
        </Link>
      </div>

      {show ? (
        <MenuUnfoldOutlined
          className={"side-nav-icon"}
          onClick={() => setShow(!show)}
        />
      ) : (
        <MenuFoldOutlined
          className={"side-nav-icon "}
          onClick={() => setShow(!show)}
        />
      )}
    </nav>
  );
}
