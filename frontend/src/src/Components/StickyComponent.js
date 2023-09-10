import React from "react";
import { Sticky, Segment } from "semantic-ui-react";

function StickyExample() {
  return (
    <div style={{ height: "200vh", padding: "1rem" }}>
      <Segment>Scroll down to see the sticky effect!</Segment>

      <Sticky offset={10}>
        <Segment>I stick to the top of the viewport!</Segment>
      </Sticky>

      <Segment>More content here...</Segment>

      <Segment>Even more content...</Segment>

      <Segment>Keep going...</Segment>
    </div>
  );
}

export default StickyExample;
