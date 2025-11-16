import React from 'react';
import AlertsPanel from './components/AlertsPanel.jsx';
import DealsTable from './components/DealsTable.jsx';
import FinderFeePanel from './components/FinderFeePanel.jsx';
import InstallmentTracker from './components/InstallmentTracker.jsx';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Atlas Property Manager</h1>
      <AlertsPanel />
      <DealsTable />
      <FinderFeePanel />
      <InstallmentTracker />
    </div>
  );
}

export default App;
