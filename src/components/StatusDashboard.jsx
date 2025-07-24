import React, { useReducer } from 'react';
import FilterControl from './FilterControl.jsx';
import UserProgressBar from './UserProgressBar.jsx';

const tasksData = [
  // Example static task objects
  // { id, user, description, complete }
];

const initialState = {
  filter: 'all',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, filter: action.value };
    default:
      return state;
  }
}

const StatusDashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // To be implemented: Preparation, filtering, and calculation logic

  return (
    <section aria-label="Team Status Overview">
      <FilterControl 
        filter={state.filter} 
        onFilterChange={value => dispatch({ type: 'SET_FILTER', value })} 
      />
      <div className="dashboard-list">
        {/* User progress bars should be rendered here */}
      </div>
    </section>
  );
};

export default StatusDashboard;
