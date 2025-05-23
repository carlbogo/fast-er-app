
import React from 'react';
import { Button } from '@/components/ui/button';

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NavBar = ({ activeSection, setActiveSection }: NavBarProps) => {
  const navItems = [
    { id: 'overview', label: 'Ülevaade' },
    { id: 'personas', label: 'Kasutajaprofiilid' },
    { id: 'requirements', label: 'Funktsionaalsed Nõuded' },
    { id: 'datamodel', label: 'Andmemudel' },
    { id: 'wireframes', label: 'UI/UX Kavandid' },
    { id: 'architecture', label: 'Tehniline Arhitektuur' },
    { id: 'metrics', label: 'Edu Mõõdikud' },
    { id: 'rollout', label: 'Käivitusplaan' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto py-4">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              onClick={() => setActiveSection(item.id)}
              className="whitespace-nowrap"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
