import React from 'react';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import './Search.scss'

const Search = () => {
  const countries = ['Norway', 'ülke1', 'ülke2', 'ülke3'];
  const religions = ['Asatro', 'Religion2', 'Religion3'];
  const years = ['793 AD', '794 AD', '993 AD'];
  const types = ['Weapons', 'Type2', 'Type3'];

  return (
    <div className='search-container'>

      <div className='location-drpdwn'>
        <DropdownButton  title="Location ⮟">
            {countries.map(country => (
            <Dropdown.Item className='location-style' key={country} onSelect={() => console.log(country)}>
                {country}
            </Dropdown.Item>
            ))}
        </DropdownButton>
      </div>

      
      <div className='religion-drpdwn'>
        <DropdownButton  title="Religion ⮟" style={{ marginLeft: '10px' }}>
            {religions.map(religion => (
            <Dropdown.Item className='religion-style' key={religion} onSelect={() => console.log(religion)}>
                {religion}
            </Dropdown.Item>
            ))}
        </DropdownButton>
      </div>

      <div className='year-drpdwn'>
        <DropdownButton  title="Year ⮟" style={{ marginLeft: '10px' }}>
            {years.map(year => (
            <Dropdown.Item className='year-style' key={year} onSelect={() => console.log(year)}>
                {year}
            </Dropdown.Item>
            ))}
        </DropdownButton>
      </div>

      
      <div className='type-drpdwn'>
        <DropdownButton title="Type ⮟" style={{ marginLeft: '10px' }}>
            {types.map(type => (
            <Dropdown.Item className='type-style' key={type} onSelect={() => console.log(type)}>
                {type}
            </Dropdown.Item>
            ))}
        </DropdownButton>
      </div>

      
      <Button variant="primary" style={{ marginLeft: '10px' }} className='search-btn'>
        Search
      </Button>
    </div>
  );
};

export default Search;
