
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">ER Triaaži Rakendus</h1>
            <p className="text-lg text-gray-600 mt-1">Eesti Tervishoiusüsteemi Digitaalne Lahendus</p>
          </div>
          <Badge variant="outline" className="text-sm px-3 py-1">
            Tehnilise Spetsifikatsiooni Dokument v1.0
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Header;
