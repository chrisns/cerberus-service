import React from 'react';
import classNames from 'classnames';
import FormGroup from './FormGroup';

const Select = ({ id, className, defaultValue, label, hint, errorMessage, formGroup,
                  describedBy, emptyOption = ' ', options, ...attributes }) => (
  <FormGroup inputId={id} hint={hint} label={label} errorMessage={errorMessage} describedBy={describedBy} {...formGroup}>
    {({ describedBy }) => (
      <select
        id={id}
        className={classNames(className, 'govuk-select', { 'govuk-select--error': errorMessage })}
        defaultValue={defaultValue}
        aria-describedby={describedBy}
        {...attributes}
      >
        {emptyOption && (
          <option key="" value="">
            {emptyOption}
          </option>
        )}
        {options.map(({ label: optionLabel, value: optionValue }) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    )}
  </FormGroup>
);

export default Select;
