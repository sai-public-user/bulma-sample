import React, { Fragment } from 'react';
import { Dropdown as Select } from 'react-bulma-components';

export const Dropdown = (props) => {
    const { items = [], hasDivider = false, value, onChange = () => { }, type, label = "Select Item", ...rest } = props;
    return (
        <Select
            value={value.value}
            color={type}
            label={label}
            {...rest}
        >
            {items?.map(({ value, label }, index) => (
                <Fragment key={`${value}_${label}_${index}`}>
                    <Select.Item value={value} onClick={({ target }) => onChange({ label: target.innerText, value: target.title })} >
                        {label}
                    </Select.Item>
                    {(hasDivider && index < items?.length - 1) && <Select.Divider />}
                </Fragment>
            ))}
        </Select>
    );
};