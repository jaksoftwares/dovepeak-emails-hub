'use client'

import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import EmailComposer from './components/EmailComposer'
import ContactManager from './components/ContactManager'
import CampaignManager from './components/CampaignManager'
import EmailFinder from './components/EmailFinder'
import Analytics from './components/Analytics'
import Settings from './components/Settings'

type ActiveView = 'dashboard' | 'compose' | 'contacts' | 'campaigns' | 'finder' | 'analytics' | 'settings'

export default function Home() {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />
      case 'compose':
        return <EmailComposer />
      case 'contacts':
        return <ContactManager />
      case 'campaigns':
        return <CampaignManager />
      case 'finder':
        return <EmailFinder />
      case 'analytics':
        return <Analytics />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      
      <div className="flex">
        <Sidebar 
          activeView={activeView}
          onViewChange={setActiveView}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 lg:ml-64 pt-16">
          <div className="p-4 lg:p-8">
            {renderActiveView()}
          </div>
        </main>
      </div>
    </div>
  )
}