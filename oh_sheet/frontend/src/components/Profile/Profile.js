import "./Profile.css";
import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
const img_url =
  "https://sun1-88.userapi.com/s/v1/if2/MgxhPzo3Ti2NZ3QwmdooOfpLx3gS1Rlj5yqhbpW0OMLVdMR2O_PLe9SWRqNYUcWNcwlWduQGRjLpMto4Rmu5xYXG.jpg?size=400x400&quality=96&crop=0,301,1728,1728&ava=1";

const Profile = (props) => {
  return (
    <Container className="profile-container">
      <Row>
        <Col md={4} className="profile-col profile-img-container">
          <Image src={img_url} fluid className="profile-img rounded" />
        </Col>
        <Col md={6} className="profile-col profile-info-container">
          <div className="profile-info bg-primary text-light p-3 rounded">
            <h1 className="profile-name">Yakov Varanaev</h1>
            <div className="profile-info-about">
              <div className="info-names">
                <div>Location:</div>
                <div>Language:</div>
                <div>System</div>
                <div>Bio:</div>
              </div>
              <div className="profile-info-values">
                <div>Saint-Petersburg</div>
                <div>English</div>
                <div>Dungeons&Dragons</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus sit amet vestibulum dolor. Maecenas suscipit elit
                  feugiat blandit maximus. Etiam vitae libero nec nulla gravida
                  hendrerit.
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="text-center profile-stats-container">
          <div className="profile-stat">
            <div className="profile-state-value">17</div>
            <div className="profile-state-name">Characters</div>
          </div>
          <div className="profile-stat">
            <div className="profile-state-value">4</div>
            <div className="profile-state-name">Parties</div>
          </div>
          <div className="profile-stat">
            <div className="profile-state-value">7</div>
            <div className="profile-state-name">Adventures</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(Profile);
