'use client'

import { 
  Mail, 
  Users, 
  Send, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle,
  BarChart3,
  Search,
  PenTool
} from 'lucide-react'

const stats = [
  {
    label: 'Total Contacts',
    value: '12,847',
    change: '+12%',
    changeType: 'positive',
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    label: 'Emails Sent',
    value: '45,231',
    change: '+8%',
    changeType: 'positive',
    icon: Send,
    color: 'bg-green-500'
  },
  {
    label: 'Open Rate',
    value: '24.5%',
    change: '+2.1%',
    changeType: 'positive',
    icon: Mail,
    color: 'bg-purple-500'
  },
  {
    label: 'Click Rate',
    value: '3.2%',
    change: '-0.5%',
    changeType: 'negative',
    icon: TrendingUp,
    color: 'bg-orange-500'
  }
]

const recentCampaigns = [
  {
    id: 1,
    name: 'Summer Sale Newsletter',
    status: 'completed',
    sent: 5420,
    opened: 1329,
    clicked: 187,
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Product Launch Announcement',
    status: 'sending',
    sent: 2100,
    opened: 0,
    clicked: 0,
    date: '2024-01-16'
  },
  {
    id: 3,
    name: 'Weekly Digest',
    status: 'scheduled',
    sent: 0,
    opened: 0,
    clicked: 0,
    date: '2024-01-18'
  }
]

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
            <p className="text-primary-100 text-lg">
              Ready to create your next successful email campaign?
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <BarChart3 className="h-12 w-12 text-white/80" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-primary-600 font-medium px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
            Create Campaign
          </button>
          <button className="border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
            View Analytics
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Campaigns */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Campaigns</h2>
            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {recentCampaigns.map((campaign) => (
              <div key={campaign.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    campaign.status === 'completed' ? 'bg-green-100' :
                    campaign.status === 'sending' ? 'bg-blue-100' : 'bg-yellow-100'
                  }`}>
                    {campaign.status === 'completed' ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : campaign.status === 'sending' ? (
                      <Send className="h-4 w-4 text-blue-600" />
                    ) : (
                      <Clock className="h-4 w-4 text-yellow-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{campaign.name}</p>
                    <p className="text-sm text-gray-500 capitalize">{campaign.status}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{campaign.sent} sent</p>
                  {campaign.opened > 0 && (
                    <p className="text-xs text-gray-500">{campaign.opened} opened</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          
          <div className="space-y-4">
            <button className="w-full flex items-center space-x-3 p-4 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors text-left">
              <div className="bg-primary-600 p-2 rounded-lg">
                <PenTool className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Create New Campaign</p>
                <p className="text-sm text-gray-600">Design and send your next email</p>
              </div>
            </button>
            
            <button className="w-full flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left">
              <div className="bg-green-600 p-2 rounded-lg">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Import Contacts</p>
                <p className="text-sm text-gray-600">Add new contacts to your lists</p>
              </div>
            </button>
            
            <button className="w-full flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
              <div className="bg-purple-600 p-2 rounded-lg">
                <Search className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Find Emails</p>
                <p className="text-sm text-gray-600">Discover new prospects online</p>
              </div>
            </button>
            
            <button className="w-full flex items-center space-x-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors text-left">
              <div className="bg-orange-600 p-2 rounded-lg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">View Analytics</p>
                <p className="text-sm text-gray-600">Track campaign performance</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}