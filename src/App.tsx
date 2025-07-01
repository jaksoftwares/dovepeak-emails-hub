import { useState } from 'react';
import { Header } from './components/Header';

type AppView = 'create' | 'preview' | 'history';

function App() {
  const [activeTab, setActiveTab] = useState<AppView>('create');

  const renderContent = () => {
    switch (activeTab) {
      case 'create':
        return <div>Create view</div>;
      case 'preview':
        return <div>Preview view</div>;
      case 'history':
        return <div>History view</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab as AppView)} />
      <main className="py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;