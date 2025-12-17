import { BottomNav } from './BottomNav';
import { ArrowLeft, Search, Filter, MapPin, Star, ChevronRight } from 'lucide-react';

interface FindPartnersScreenProps {
  onNavigate: (screen: 'home' | 'find' | 'schedule' | 'profile') => void;
}

export function FindPartnersScreen({ onNavigate }: FindPartnersScreenProps) {
  const partners = [
    {
      id: 1,
      name: 'Emma Wilson',
      avatar: '👩‍💻',
      major: 'Computer Science',
      courses: ['Data Structures', 'Algorithms', 'Web Dev'],
      rating: 4.9,
      sessions: 45,
      distance: '0.2 mi',
      available: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: '👨‍🔬',
      major: 'Biology',
      courses: ['Organic Chem', 'Cell Biology', 'Genetics'],
      rating: 4.8,
      sessions: 32,
      distance: '0.5 mi',
      available: true,
    },
    {
      id: 3,
      name: 'Sofia Rodriguez',
      avatar: '👩‍⚕️',
      major: 'Pre-Med',
      courses: ['Anatomy', 'Biochemistry', 'Physics'],
      rating: 5.0,
      sessions: 67,
      distance: '1.2 mi',
      available: false,
    },
  ];

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-gray-900 text-[24px]">Find Study Partners</h1>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2 mb-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by course or topic..."
              className="w-full h-[48px] pl-10 pr-4 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm whitespace-nowrap shadow-sm">
            All
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">
            CS
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">
            Sciences
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">
            Math
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">
            Available Now
          </button>
        </div>
      </div>

      {/* Partners List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <p className="text-gray-500 text-sm mb-4">24 study partners nearby</p>
        
        <div className="space-y-3 pb-4">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-[40px]">{partner.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="text-gray-900 mb-1">{partner.name}</h3>
                      <p className="text-gray-600 text-sm">{partner.major}</p>
                    </div>
                    {partner.available && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        Available
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span>{partner.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{partner.sessions} sessions</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{partner.distance}</span>
                    </div>
                  </div>

                  {/* Course Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {partner.courses.map((course, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs">
                        {course}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 h-[36px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all text-sm">
                      Connect
                    </button>
                    <button className="w-[36px] h-[36px] bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav active="find" onNavigate={onNavigate} />
    </div>
  );
}
