'use client';
import { useState } from 'react';
import CompareContainer from '../features/compare/CompareContainer';
import FavoritesContainer from '../features/favorites/FavoritesContainer';
import History from '../features/history/History';
import Logs from '../features/logs/Logs';
import TabsContainer from './TabsContainer';

export default function DetailsContainer() {
  const [activeTab, setActiveTab] = useState<string>('History');

  function handleChange(value: string) {
    setActiveTab(value);
  }
  return (
    <div className="mt-8 flex flex-col gap-5">
      <TabsContainer handleChange={handleChange} activeTab={activeTab} />
      {activeTab === 'history' && <History />}
      {activeTab === 'compare' && <CompareContainer />}
      {activeTab === 'favorites' && <FavoritesContainer />}
      {activeTab === 'log' && <Logs />}
    </div>
  );
}
