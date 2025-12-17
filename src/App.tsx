import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { FindPartnersScreen } from './components/FindPartnersScreen';
import { ScheduleScreen } from './components/ScheduleScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { useState } from 'react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'home' | 'find' | 'schedule' | 'profile'>('login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={() => setCurrentScreen('home')} />;
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'find':
        return <FindPartnersScreen onNavigate={setCurrentScreen} />;
      case 'schedule':
        return <ScheduleScreen onNavigate={setCurrentScreen} />;
      case 'profile':
        return <ProfileScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex gap-8 flex-wrap justify-center max-w-7xl">
        {/* Screen Preview */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-gray-900 p-3 rounded-[2.5rem] shadow-2xl">
            <div className="w-[393px] h-[852px] bg-white rounded-[2rem] overflow-hidden">
              {renderScreen()}
            </div>
          </div>
          
          {/* Screen Navigation */}
          <div className="flex gap-2 flex-wrap justify-center">
            <button
              onClick={() => setCurrentScreen('login')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentScreen === 'login' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setCurrentScreen('home')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentScreen === 'home' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentScreen('find')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentScreen === 'find' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Find Partners
            </button>
            <button
              onClick={() => setCurrentScreen('schedule')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentScreen === 'schedule' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Schedule
            </button>
            <button
              onClick={() => setCurrentScreen('profile')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentScreen === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
