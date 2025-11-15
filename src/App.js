import React from 'react';
import DealsTable from './components/DealsTable';
import FinderFeePanel from './components/FinderFeePanel';
import InstallmentTracker from './components/InstallmentTracker';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import AlertsPanel from './components/AlertsPanel';

function App() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Atlas Property Manager</h1>
      <AlertsPanel />
      <DealsTable />
      <FinderFeePanel />
      <InstallmentTracker />
      <AnalyticsDashboard />
    </div>
  );
}

export default App;
