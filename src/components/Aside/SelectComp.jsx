import React from 'react';
import Select from 'react-select';
import { styled } from 'styled-components';

let areaOption = [
  { value: '전체', label: '전체' },
  { value: '조천', label: '조천' },
  { value: '애월', label: '애월' },
  { value: '안덕', label: '안덕' }
];

let categoryOption = [
  { value: '전체', label: '전체' },
  { value: '관광지', label: '관광지' },
  { value: '식당', label: '식당' },
  { value: '카페', label: '카페' }
];

const customStyles = {
  option: (provided) => ({
    ...provided,
    width: '100%',
    opacity: 0.8,
    cursor: 'pointer',
    textAlign: 'center',
    '&:hover': {
      border: '1px solid orange',
      backgroundColor: 'orange'
    }
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: '10px',
    width: '100%',
    margin: '20px 0',
    textAlign: 'center',
    padding: '5px',
    cursor: 'pointer',
    border: '1px solid orange',
    '&::before': {
      border: 'none',
      outline: 'none'
    }
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
    backgroundColor: 'orange'
  })
};

const SelectComp = ({ area, setArea, category, setCategory }) => {
  return (
    <S.SelectBox>
      <S.StyledSelect
        onChange={(e) => setArea(e.value)}
        isSearchable={false}
        options={areaOption}
        value={areaOption.filter((option) => {
          return option.value === area;
        })}
        styles={customStyles}
        label="Area"
      />
      <S.StyledSelect
        onChange={(e) => setCategory(e.value)}
        isSearchable={false}
        placeholder="카테고리를 선택하세요."
        options={categoryOption}
        value={categoryOption.filter((option) => {
          return option.value === category;
        })}
        styles={customStyles}
      />
    </S.SelectBox>
  );
};

const S = {
  SelectBox: styled.div`
    width: 80%;
  `,
  StyledSelect: styled(Select)`
    color: white;
  `
};

export default SelectComp;
