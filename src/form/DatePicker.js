import React, { memo, useState, PureComponent } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";

class CustomInput extends PureComponent {
  render() {
    const { id, onClick, value, placeholder } = this.props;
    return (
      <input
        id={id}
        onClick={onClick}
        value={value}
        type="text"
        placeholder={placeholder}
        readOnly={true}
      />
    );
  }
}

const DatePickerField = memo(
  ({ onChange, meta, id, minDate, placeholder, maxDate, dateFormat }) => {
    const [startDate, setStartDate] = useState(null);

    const handleChange = date => {
      setStartDate(date);
      onChange(date);
    };

    return (
      <div className="date-picker form__form-group-input-wrap form__form-group-input-wrap--error-above">
        <DatePicker
          className="form__form-group-datepicker"
          selected={startDate}
          dateFormat={dateFormat}
          onChange={handleChange}
          peekNextMonth
          value={startDate}
          minDate={minDate}
          maxDate={maxDate}
          id={id}
          placeholderText={placeholder}
          showMonthDropdown
          showYearDropdown
          isClearable={true}
          customInput={<CustomInput placeholder={placeholder} />}
          dropDownMode="select"
        />
        {meta.touched && meta.error && (
          <span className="form__form-group-error">{meta.error}</span>
        )}
      </div>
    );
  }
);

const renderDatePickerField = props => {
  const { input, id, placeholder, minDate, maxDate, meta, dateFormat } = props;
  return (
    <DatePickerField
      meta={meta}
      minDate={minDate}
      maxDate={maxDate}
      dateFormat={dateFormat}
      id={id}
      placeholder={placeholder}
      {...input}
    />
  );
};

renderDatePickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string
  }).isRequired
};

DatePickerField.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default renderDatePickerField;
