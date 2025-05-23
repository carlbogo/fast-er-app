
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Metrics = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-blue-700">Edu Mõõdikud ja Monitooring</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">25%</div>
            <div className="text-sm text-gray-600">EMO ooteaja vähenemine</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">90%</div>
            <div className="text-sm text-gray-600">Õigete triaaži otsuste määr</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">85%</div>
            <div className="text-sm text-gray-600">Kasutajate rahulolu skoor</div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold text-lg mb-4">Põhilised KPI-d</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-blue-600 mb-2">Kliinilised Mõõdikud</h4>
              <ul className="space-y-1 ml-4 text-sm text-gray-700">
                <li>• Triaaži täpsuse määr kategooriate lõikes</li>
                <li>• Eskalatsiooni määr (roheline → kollane → punane)</li>
                <li>• Õige diagnoosi osa raport vs. lõplik diagnoos</li>
                <li>• Arstide rahulolu triaaži kvaliteediga</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-600 mb-2">Operatsionaalsed Mõõdikud</h4>
              <ul className="space-y-1 ml-4 text-sm text-gray-700">
                <li>• Keskmise triaaži vormi täitmise aeg</li>
                <li>• Katkestamise määr etappide lõikes</li>
                <li>• Süsteemi kättesaadavuse aeg (99.9% eesmärk)</li>
                <li>• API vastamise aegade monitooring</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-blue-600 mb-2">Kasutajakogemuse Mõõdikud</h4>
              <ul className="space-y-1 ml-4 text-sm text-gray-700">
                <li>• Net Promoter Score (NPS)</li>
                <li>• Kasutajate tagasiside reitingud</li>
                <li>• Korduvkasutuse määr</li>
                <li>• Mobiilirakenduse vs. veebi kasutus jaotus</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Metrics;
