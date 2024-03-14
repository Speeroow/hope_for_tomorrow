import { Input } from "antd";
import "./../../../styles/navbar.css";
import { Button } from "antd";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-items">
        <div className="logo-container">
          <img src="src\assets\Group 37.png" alt="" />
          <div>
            <ul className="link-items">
              <li>Projects</li>
              <li>How it works</li>
              <li>About us</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className="button-container">
                  <Input placeholder="Search" style={{
                      width: '192px',
                      height: '36px'
          }}/>
          <Button
            type="primary"
            style={{
              backgroundColor: "#392396FF",
              border: "none",
              borderRadius: "8px",
                padding: "0px 12px",
                width: '114px',
                height:'36px'
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
