import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }}>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Button color="blue" fluid size="large">
        Login With your wallet
      </Button>

      {/* <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='blue' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form> */}
    </Grid.Column>
  </Grid>
);

export default LoginForm;
