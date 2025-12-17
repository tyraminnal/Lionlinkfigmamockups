import { BottomNav } from './BottomNav';
import { Bell, TrendingUp, Users, BookOpen, Clock, Search, Calendar } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: 'home' | 'find' | 'schedule' | 'profile') => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const upcomingSessions = [
    { id: 1, subject: 'Calculus II', partner: 'Sarah Chen', time: 'Today, 3:00 PM', avatar: '👩‍🎓' },
    { id: 2, subject: 'Organic Chemistry', partner: 'Alex Kumar', time: 'Tomorrow, 10:00 AM', avatar: '👨‍🎓' },
  ];

  const stats = [
    { label: 'Study Hours', value: '24', icon: Clock, color: 'bg-blue-100 text-blue-600' },
    { label: 'Sessions', value: '12', icon: Users, color: 'bg-green-100 text-green-600' },
    { label: 'Courses', value: '5', icon: BookOpen, color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-gray-900 text-[24px] mb-1">Welcome back!</h1>
            <p className="text-gray-500">Ready to study?</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex-1 bg-gray-50 rounded-xl p-3">
                <div className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center mb-2`}>
                  <Icon className="w-4 h-4" />
                </div>
                <p className="text-gray-900 text-[20px] mb-1">{stat.value}</p>
                <p className="text-gray-500 text-[11px]">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-gray-900 mb-3">Quick Actions</h2>
          <div className="flex gap-3">
            <button 
              onClick={() => onNavigate('find')}
              className="flex-1 bg-blue-600 text-white rounded-xl p-4 shadow-md hover:bg-blue-700 active:scale-[0.98] transition-all"
            >
              <Search className="w-5 h-5 mb-2 mx-auto" />
              <p className="text-sm">Find Partner</p>
            </button>
            <button 
              onClick={() => onNavigate('schedule')}
              className="flex-1 bg-white text-gray-900 rounded-xl p-4 border border-gray-200 shadow-sm hover:bg-gray-50 active:scale-[0.98] transition-all"
            >
              <Calendar className="w-5 h-5 mb-2 mx-auto" />
              <p className="text-sm">Schedule</p>
            </button>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-gray-900">Upcoming Sessions</h2>
            <a href="#" className="text-blue-600 text-sm hover:underline">See all</a>
          </div>
          
          <div className="space-y-3">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="text-[32px]">{session.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 mb-1">{session.subject}</h3>
                    <p className="text-gray-600 text-sm mb-2">with {session.partner}</p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{session.time}</span>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-lg transition-colors text-sm">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Card */}
        <div className="mt-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="mb-1">Study Streak 🔥</h3>
              <p className="text-blue-100 text-sm">Keep up the great work!</p>
            </div>
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="text-[28px] mb-1">7 Days</div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-blue-100 text-xs mt-2">3 more days to reach your goal!</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav active="home" onNavigate={onNavigate} />
    </div>
  );
}