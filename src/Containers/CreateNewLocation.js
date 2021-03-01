import React, { useState, useEffect } from 'react'
import { Section, Container, Heading, Columns } from 'react-bulma-components'
import {
  Field,
  Control,
  Label,
  Input,
} from 'react-bulma-components/lib/components/form'
import { Dropdown } from '../Components'

export const CreateNewLocation = () => {
  const [manufacturer, setManufacturer] = useState({})
  return (
    <div>
      <Section>
        <Container>
          <Heading>Create New Location</Heading>
          <Columns>
            <Columns.Column>
              <Field>
                <Label>Location Name:</Label>
                <Control>
                  <Input placeholder="Location" />
                </Control>
              </Field>
              <div>
                <Field>
                  <Label>Location Name:</Label>
                  <Columns>
                    <Columns.Column>
                      <Input type="date" placeholder="Location" />
                    </Columns.Column>
                    <span style={{ alignSelf: 'center' }}>to</span>
                    <Columns.Column>
                      <Input type="date" placeholder="Location" />
                    </Columns.Column>
                  </Columns>
                </Field>
              </div>
            </Columns.Column>
            <Columns.Column>
              <Field>
                <Label>Address:</Label>
                <Control>
                  <Input placeholder="Address" />
                </Control>
              </Field>
              <Columns>
                <Columns.Column size={6}>
                  <Field>
                    <Label>City:</Label>
                    <Control>
                      <Input placeholder="City" />
                    </Control>
                  </Field>
                </Columns.Column>
                <Columns.Column>
                  <Field>
                    <Label>State:</Label>
                    <Control>
                      <Input placeholder="State" />
                    </Control>
                  </Field>
                </Columns.Column>
                <Columns.Column>
                  <Field>
                    <Label>Zipcode:</Label>
                    <Control>
                      <Input placeholder="Zipcode" />
                    </Control>
                  </Field>
                </Columns.Column>
              </Columns>
            </Columns.Column>
            <Columns.Column></Columns.Column>
          </Columns>
          <Field>
            <Label>Vaccine Manufacturer:</Label>
            <Control>
              <Dropdown
                items={[]}
                value={manufacturer}
                onChange={(a) => {
                  console.log(a)
                }}
                style={{ width: 300 }}
                label="Vaccine Manufacturer"
              />
            </Control>
          </Field>
        </Container>
      </Section>
    </div>
  )
}
