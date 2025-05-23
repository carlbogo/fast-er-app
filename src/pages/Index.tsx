
import React, { useState } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/navigation/NavBar';
import Overview from '@/components/sections/Overview';
import Requirements from '@/components/sections/Requirements';
import Metrics from '@/components/sections/Metrics';
import { UserPersonas } from '@/components/UserPersonas';
import { TechnicalArchitecture } from '@/components/TechnicalArchitecture';
import { DataModel } from '@/components/DataModel';
import { WireframeOutline } from '@/components/WireframeOutline';
import { RolloutPlan } from '@/components/RolloutPlan';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <Header />

      {/* Navigation */}
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          {/* Overview Section */}
          <TabsContent value="overview" className="mt-0">
            <Overview />
          </TabsContent>

          {/* User Personas */}
          <TabsContent value="personas" className="mt-0">
            <UserPersonas />
          </TabsContent>

          {/* Functional Requirements */}
          <TabsContent value="requirements" className="mt-0">
            <Requirements />
          </TabsContent>

          {/* Data Model */}
          <TabsContent value="datamodel" className="mt-0">
            <DataModel />
          </TabsContent>

          {/* Wireframes */}
          <TabsContent value="wireframes" className="mt-0">
            <WireframeOutline />
          </TabsContent>

          {/* Technical Architecture */}
          <TabsContent value="architecture" className="mt-0">
            <TechnicalArchitecture />
          </TabsContent>

          {/* Success Metrics */}
          <TabsContent value="metrics" className="mt-0">
            <Metrics />
          </TabsContent>

          {/* Rollout Plan */}
          <TabsContent value="rollout" className="mt-0">
            <RolloutPlan />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
