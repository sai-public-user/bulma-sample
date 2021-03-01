import React, { useState } from 'react';
import { Container, Heading, Columns } from 'react-bulma-components';
import { Link } from "react-router-dom";
import { Dropdown } from '../Components';

const TEMP_ITEMS = [
    { label: 'First One', value: 'First One' },
    { label: 'Second One', value: 'Second' },
    { label: 'Third One', value: 'Third One' },
    { label: 'Fourth One', value: 'Fourth One' },
    { label: 'Fifth One', value: 'Fifth One' }
];

const LOCATIONS = [
    {
        name: '3Maveric Tampa',
        address: '1234 Street, Tampa, FL',
        ids: ['33622', '33631', '33646', '33633', '33647', '33637'],
        schedule: 'Monday - Friday',
        timings: '9AM - 6PM'
    },
    {
        name: '3Maveric Tampa',
        address: '1234 Street, Tampa, FL',
        ids: ['33622', '33631', '33646', '33633', '33647', '33637'],
        schedule: 'Monday - Friday',
        timings: '9AM - 6PM'
    },
    {
        name: '3Maveric Tampa',
        address: '1234 Street, Tampa, FL',
        ids: ['33622', '33631', '33646', '33633', '33647', '33637'],
        schedule: 'Monday - Friday',
        timings: '9AM - 6PM'
    },
    {
        name: '3Maveric Tampa',
        address: '1234 Street, Tampa, FL',
        ids: ['33622', '33631', '33646', '33633', '33647', '33637'],
        schedule: 'Monday - Friday',
        timings: '9AM - 6PM'
    },
    {
        name: '3Maveric Tampa',
        address: '1234 Street, Tampa, FL',
        ids: ['33622', '33631', '33646', '33633', '33647', '33637'],
        schedule: 'Monday - Friday',
        timings: '9AM - 6PM'
    },
];

export const Home = () => {
    const [location, setLocation] = useState(TEMP_ITEMS[0]);
    return (
        <Container fluid style={{ padding: 16 }}>
            <Dropdown items={TEMP_ITEMS} value={location} onChange={(a) => { console.log(a); }} style={{ width: 200 }} label="Select Location" />
            <div style={{ marginTop: 16 }}>
                <Heading size={4} style={{ marginBottom: 6 }}>Maverick Health System Locations</Heading>
                <div style={{ marginTop: 6 }}>
                    {LOCATIONS.map((location, i) => (
                        <div key={i} style={{ border: '0.5px solid', padding: 16, width: '100%', height: 75, marginBottom: 10 }}>
                            <Columns>
                                <Columns.Column>
                                    <div style={{ fonstSize: 15, fontWeight: 'bold' }}>{location.name}</div>
                                    <div>{location.address}</div>
                                </Columns.Column>
                                <Columns.Column>
                                    <div>{location.ids.slice(0, (location.ids.length / 2)).join(', ')}</div>
                                    <div>{location.ids.slice(((location.ids.length / 2) - 1), (location.ids.length - 1)).join(', ')}</div>
                                </Columns.Column>
                                <Columns.Column>
                                    <div>Schedule: {location.schedule}</div>
                                    <div>{location.timings}</div>
                                </Columns.Column>
                            </Columns>
                        </div>
                    ))}
                </div>
            </div>
            <Link className="button" to="/location/create">Add New Location</Link>
        </Container>
    );
};