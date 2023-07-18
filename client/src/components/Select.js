import React, { useState } from 'react';
import Select from 'react-select';

export default function SelectComponent({options, initial}) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
      <Select
        defaultValue={initial}
        onChange={setSelectedOption}
        options={options}
      />
  );
}