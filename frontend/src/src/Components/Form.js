import React, { Component } from "react";
import { Form, Divider } from "semantic-ui-react";
import UploadPic from "../Components/UploadPic";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const PrimaryCareOptions = [
  { key: "Michael Lin", text: "Michael Lin", value: "Michael Lin" },
  { key: "Sophia augdal flovig", text: "Sophia augdal flovig", value: "Sophia augdal flovig" },
  { key: "Sohee Kim", text: "Sohee Kim", value: "Sohee Kim" },
];

class FormComponent extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form style={{ paddingBottom: "50px" }}>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
          <Form.Select
            fluid
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>

        {/* <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label="Small"
            value="sm"
            checked={value === "sm"}
            onChange={this.handleChange}
          />
          <Form.Radio
            label="Medium"
            value="md"
            checked={value === "md"}
            onChange={this.handleChange}
          />
          <Form.Radio
            label="Large"
            value="lg"
            checked={value === "lg"}
            onChange={this.handleChange}
          />
        </Form.Group> */}

        <Form.TextArea label="About" placeholder="Tell us more about you..." />
        <Form.Input fluid label="Goal" placeholder="Goal" />
        <Form.Input fluid label="Date" placeholder="dd/mm/yy" />

        <br />
        <Divider />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}> Verifications</p>

        <Form.Select
          fluid
          label="Primary Doctor"
          options={PrimaryCareOptions}
          placeholder="Primary Doctor"
        />

        <Form.Select
          fluid
          label="Primary Institution"
          options={PrimaryCareOptions}
          placeholder="Primary Institution"
        />

        <Form.Select
          fluid
          label="Post-care"
          options={PrimaryCareOptions}
          placeholder="Post Care"
        />

        <br />

        <UploadPic />
        <Form.Checkbox required label="I agree to the Terms and Conditions" />
        <Form.Button size="medium" style={{ marginTop: "20px" }}>
          Submit My Project
        </Form.Button>
      </Form>
    );
  }
}

export default FormComponent;
