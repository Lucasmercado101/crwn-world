import React, { ChangeEvent } from 'react';
import './formInput.sass';

type Props = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const formInput: React.FC<Props> = ({
  handleChange,
  label,
  value,
  type,
  ...otherProps
}) => {
  return (
    <div className="group">
      {label && <label className={`form-input__label`}>{label}</label>}
      <input
        className="form-input"
        type={type ? type : 'text'}
        value={value}
        onChange={(e) => handleChange(e)}
        {...otherProps}
      />
    </div>
  );
};

export default formInput;
