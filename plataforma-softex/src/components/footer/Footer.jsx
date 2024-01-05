import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

function Footer() {
  return (
    <footer className="container-footer">
      <Row>
        <Col className="text-center py-3">
          <div className="icons">
            <p>
              <a
                href="https://www.instagram.com/softexpernambuco/"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/SOFTEXRecife/?locale=pt_BR"
                target="_blank"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC7kcWjS2LVnUo2hhlOrj51g"
                target="_blank"
              >
                <i class="fab fa-youtube"></i>
              </a>
              <a
                href="https://br.linkedin.com/company/softexrecife"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </p>
            <p className="nome-plataforma">Workflow Automation Platform</p>
            <p>© 2023 Copyright: Softex - Pernambuco</p>
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
