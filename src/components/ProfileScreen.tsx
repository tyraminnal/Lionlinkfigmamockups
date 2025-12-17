import { BottomNav } from './BottomNav';
import { Settings, ChevronRight, Award, BookOpen, Clock, Users, Star, Trophy, Target } from 'lucide-react';

interface ProfileScreenProps {
  onNavigate: (screen: 'home' | 'find' | 'schedule' | 'profile') => void;
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const achievements = [
    { id: 1, icon: '🏆', title: 'Study Streak', subtitle: '7 days', color: 'bg-yellow-100' },
    { id: 2, icon: '⭐', title: 'Top Rated', subtitle: '4.9 rating', color: 'bg-blue-100' },
    { id: 3, icon: '🎯', title: 'Goal Crusher', subtitle: '20 hours', color: 'bg-green-100' },
  ];

  const stats = [
    { label: 'Total Sessions', value: '45', icon: Users },
    { label: 'Study Hours', value: '87', icon: Clock },
    { label: 'Courses', value: '8', icon: BookOpen },
    { label: 'Rating', value: '4.9', icon: Star },
  ];

  const menuItems = [
    { label: 'Edit Profile', icon: ChevronRight },
    { label: 'Study Preferences', icon: ChevronRight },
    { label: 'Availability', icon: ChevronRight },
    { label: 'Notifications', icon: ChevronRight },
    { label: 'Privacy & Security', icon: ChevronRight },
  ];

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 px-6 pt-12 pb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-white text-[24px] mb-1">Profile</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-[36px]">
            👨‍🎓
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-[20px] mb-1">David Park</h2>
            <p className="text-blue-100 text-sm mb-1">Computer Science • Junior</p>
            <p className="text-blue-100 text-sm">Columbia University</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {achievements.map((achievement) => (
            <div key={achievement.id} className={`flex-shrink-0 ${achievement.color} rounded-xl p-3 min-w-[110px]`}>
              <div className="text-[24px] mb-1">{achievement.icon}</div>
              <p className="text-gray-900 text-xs mb-1">{achievement.title}</p>
              <p className="text-gray-700 text-[10px]">{achievement.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-4 grid grid-cols-2 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Icon className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-900 text-[20px]">{stat.value}</span>
                </div>
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-4">
        {/* About */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <h3 className="text-gray-900 mb-2">About</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Passionate CS student who loves helping others understand complex algorithms and data structures. 
            Available for study sessions on weekday evenings and weekends.
          </p>
        </div>

        {/* Courses */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-900">Current Courses</h3>
            <button className="text-blue-600 text-sm hover:underline">Edit</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Data Structures', 'Algorithms', 'Operating Systems', 'Web Development', 'Discrete Math'].map((course, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm">
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className={`w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors ${
                idx !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <span className="text-gray-900">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>

        {/* Sign Out */}
        <button className="w-full py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors">
          Sign Out
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav active="profile" onNavigate={onNavigate} />
    </div>
  );
}
