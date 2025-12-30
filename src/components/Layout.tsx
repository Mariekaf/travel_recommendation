import React from 'react';
import { Header } from './Header';
import { SocialSidebar } from './SocialSidebar';

interface LayoutProps {
  children: React.ReactNode;
  search: string;
  setSearch: (value: string) => void;
  filteredResults: { name: string; type: string; img: string }[];
}
export function Layout({
  children,
  search,
  setSearch,
  filteredResults
}: LayoutProps) {
  return <div className="relative w-full min-h-screen overflow-x-hidden font-sans">
    {/* Background Image */}
    <div className="fixed inset-0 z-0 bg-center bg-no-repeat bg-cover" style={{
      backgroundImage: `url('https://t3.ftcdn.net/jpg/13/12/23/70/240_F_1312237001_93Co0fGf4hoYmAlOfoUaPnyra2ElJp0T.jpg')`
    }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/40 mix-blend-multiply" />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col min-h-screen">
      <Header search={search} setSearch={setSearch} filteredResults={filteredResults} />
      <SocialSidebar />
      <main className="flex-1 pt-20">{children}</main>
    </div>
  </div>;
}