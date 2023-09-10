
import {
  Grid,
  Container,
  Segment,
  Header,
  Image,
  Icon,
  Divider,
  Button,
} from "semantic-ui-react";
import Sticky from "react-stickynode";
import ProgressBar from "../../Components/ProgressBar";
import StepComponent from "../../Components/Steps";
import SemanticUI from "../../Components/SemanticUi";

export default function ProjectDetailPage({ match }) {
  return (
    <>
      <SemanticUI></SemanticUI>
      <Container>
        <Grid columns={2}>
          <Grid.Column width={11}>
            <Container>
              <Header
                as="h1"
                style={{
                  textAlign: "left",
                  fontSize: "3em",
                  paddingTop: "20px",
                  paddingBottom: "10px",
                }}
              >
                Miracle for Sohee Bahama
              </Header>
              <Image src="/images/image2.png" fluid />
              <Segment vertical style={{ fontSize: "16px", textAlign: "left" }}>
                {" "}
                <Icon name="user circle" size="large" />
                Jesika Sanchez is organizing this fundraiser on behalf of Edgar
                Uribe.{" "}
              </Segment>

              <Divider />

              <p style={{ textAlign: "left" }}>
                We come to you with heavy hearts to share some difficult news
                about our beloved son. Mathias became ill with flu-like symptoms
                in mid-June, he was taken to the doctors twice and began
                treatment. On June 30th our world fell apart. He was taken to the
                emergency room where his heart stopped and went into cardiac
                arrest. He needed life-saving support and was flown to two
                different hospitals. He was diagnosed with pneumonia and
                streptococcal toxic shock syndrome. He is currently in the ICU
                receiving treatment at Vanderbilt Children’s Hospital where we
                were told he was the sickest child admitted at the time. He was
                placed on ECMO in order to support his heart, lungs, and all vital
                organs on June 30th. On July 12, after 12 days the medical team
                decided to remove the ECMO therapy as his heart and lungs were
                showing improvement. On July 18th at 11:50 p.m., his respirator
              </p>

              <p
                style={{
                  textAlign: "left",
                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingTop: "20px",
                }}
              >
                {" "}
                Current Progress{" "}
              </p>

              <StepComponent />
            </Container>
          </Grid.Column>
          <Grid.Column width={5}>
            <Sticky enabled={true} top={140} bottomBoundary={1200}>
              <Segment>
                <p>
                  {" "}
                  <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                    {" "}
                    $200,934
                  </p>{" "}
                  raised of $500,000 goal
                </p>
                <ProgressBar />
                <Button primary fluid style={{ marginBottom: "10px" }}>
                  Donate
                </Button>
                <Button fluid>Share</Button>
                <br />
                <Segment vertical style={{ textAlign: "left" }}>
                  <Icon
                    circular
                    inverted
                    color="green"
                    name="check"
                    size="small"
                  />
                  <b>Verified </b> by <u> Texas Dell Medical Center</u>
                </Segment>
                <Segment vertical style={{ textAlign: "left" }}>
                  <Icon
                    circular
                    inverted
                    color="green"
                    name="check"
                    size="small"
                  />
                  <b>Verified </b> by <u> Dallas Dell Diagnose Center</u>
                </Segment>
                <Segment vertical style={{ textAlign: "left" }}>
                  <Icon
                    circular
                    inverted
                    color="green"
                    name="check"
                    size="small"
                  />
                  <b>Verified </b> by <u> Hackathon Post Treatment</u>
                </Segment>
              </Segment>
            </Sticky>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
}