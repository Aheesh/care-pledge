import React from 'react'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

const UploadPic = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name='pdf file outline' />
      No documents are listed.
    </Header>
    <Button primary>Add Document</Button>
  </Segment>
)

export default UploadPic