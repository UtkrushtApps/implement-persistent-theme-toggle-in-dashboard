import React from 'react';

const FilterControl = ({ filter, onFilterChange }) => {
  return (
    <div role="radiogroup" aria-label="Filter Tasks">
      <label>
        <input
          type="radio"
          name="filter"
          value="all"
          checked={filter === 'all'}
          onChange={() => onFilterChange('all')}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="completed"
          checked={filter === 'completed'}
          onChange={() => onFilterChange('completed')}
        />
        Completed
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="incomplete"
          checked={filter === 'incomplete'}
          onChange={() => onFilterChange('incomplete')}
        />
        Incomplete
      </label>
    </div>
  );
};

export default FilterControl;
