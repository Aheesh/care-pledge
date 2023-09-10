import React from 'react'
import { Step, Icon, Segment, Image } from 'semantic-ui-react'

// const steps = [
//   {
//     key: 'shipping',
//     icon: 'truck',
//     title: 'Shipping',
//     description: 'Choose your shipping options',
//   },
//   {
//     key: 'billing',
//     active: true,
//     icon: 'payment',
//     title: 'Billing',
//     description: 'Enter billing information',
//   },
//   { key: 'confirm', disabled: true, icon: 'info', title: 'Confirm Order' },
// ]

// const StepComponent = () => <Step.Group items={steps} />


const StepComponent = () => (
    <div>
      <Step.Group attached='top' fluid>
        <Step>
          <Icon name='stethoscope' />
          <Step.Content>
            <Step.Title>Diagnose</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>
  
        <Step active>
          <Icon name='hospital' />
          <Step.Content>
            <Step.Title>Procedure</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>
  
        <Step disabled>
          <Icon name='heartbeat' />
          <Step.Content>
            <Step.Title>Post-Procedure</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
  
      <Segment attached>
        hbjnknbhkjn;lnm
      </Segment>
  
    </div>
  )
  



export default StepComponent