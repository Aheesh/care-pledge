import { useParams } from "react-router-dom";
import {
  Grid,
  Container,
  Segment,
  Header,
  Image,
  Icon,
  Divider,
  Button
} from "semantic-ui-react";

import FormComponent from '../Components/Form';

function ProjectCreatePage({ match }) {
  const { id } = useParams();

  return (
    <Container style = {{textAlign: 'left'}}>
         <Header
        as="h1"
        style={{ textAlign: "left", fontSize: "3em", paddingTop: "25px", paddingBottom: "25px" }}
      >
        Start your project
      </Header>
        <FormComponent />
    </Container>
  );
}

export default ProjectCreatePage;
