import { useState, useEffect } from 'react';
import { OnboardingCard } from './components/OnboardingCard';
import { Dashboard } from './components/Dashboard';
import { UserInfo } from './types';

const STORAGE_KEY = 'daily-inspiration-user';

export default function App() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user info from localStorage
    const savedInfo = localStorage.getItem(STORAGE_KEY);
    if (savedInfo) {
      try {
        const parsed = JSON.parse(savedInfo);
        setUserInfo(parsed);
      } catch (error) {
        console.error('Failed to parse user info:', error);
      }
    }
    setIsLoading(false);
  }, []);

  const handleOnboardingComplete = (info: UserInfo) => {
    setUserInfo(info);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  };

  const handleUpdateInfo = (info: UserInfo) => {
    setUserInfo(info);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
        <div className="text-gray-600">로딩 중...</div>
      </div>
    );
  }

  if (!userInfo) {
    return <OnboardingCard onComplete={handleOnboardingComplete} />;
  }

  return <Dashboard userInfo={userInfo} onUpdateInfo={handleUpdateInfo} />;
}
