
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Overview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-blue-700">Projekti Eesmärk</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-4">
            ER Triaaži rakendus on mõeldud Eesti tervishoiusüsteemi digitaliseerimiseks, 
            võimaldades patsientidel enesehinnangut teha ning tervishoiutöötajatel 
            tõhusamalt prioriteete seada.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm"><strong>Roheline:</strong> Enesravi ja nõustamine</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm"><strong>Kollane:</strong> Perearsti vastuvõtt</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm"><strong>Punane:</strong> Kiirabi/EMO</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-green-700">Peamised Eelised</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Vähendab EMO-de ülekoormust</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Kiirenda õige ravi saamist</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Integratsioon e-Tervisega</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">•</span>
              <span>24/7 kättesaadavus</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">•</span>
              <span>AI-põhine riskirünk</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
