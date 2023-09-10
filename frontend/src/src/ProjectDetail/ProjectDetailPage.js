import { useParams } from "react-router-dom";
import {
  Grid,
  Container,
  Segment,
  Header,
  Image,
  Icon,
  Divider,
} from "semantic-ui-react";
import Sticky from "react-stickynode";

function ProjectDetailPage({ match }) {
  const { id } = useParams();

  return (
    <Container>
      <Grid columns={2}>
        <Grid.Column width={11}>
          <Container>
            <Header
              as="h1"
              style={{ textAlign: "left", fontSize: "3em", paddingTop: "20px" }}
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
              was removed as he continued to show improvement and only needed
              oxygen and dialysis. It is extremely hard for us to explain the
              ups and downs we have felt in the last few weeks. Our brilliant,
              14-year-old son is a fighter. Our son has always been a happy,
              tender, loving boy, who touches the heart of everyone around him.
              At school, he has always excelled, and his teachers always have
              nothing but praise for his work ethic and eagerness to learn and
              go above and beyond both inside and outside the classroom. Mathias
              is an athlete, he is part of the cross-country team, and is an
              avid soccer, football and basketball fan. Mathias has been working
              extremely hard to reach his goal of attending the Massachusetts
              Institute of Technology with the goal of making an impact in the
              world. We know he will! After 20 days of intense treatment, we
              were told that his extremities had been compromised. ECMO saved
              his life by saving his organs. However, his extremities did not
              receive enough blood flow. For this reason, after speaking to his
              medical team and after exhausting all options on Friday, July 21st
              the medical team made the difficult decision to amputate his left
              leg below the knee.
            </p>
          </Container>
        </Grid.Column>
        <Grid.Column width={5}>
          <Sticky enabled={true} top={140} bottomBoundary={1200}>
            <Segment></Segment>
          </Sticky>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default ProjectDetailPage;
