
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { UserPersonas } from '@/components/UserPersonas';
import { TechnicalArchitecture } from '@/components/TechnicalArchitecture';
import { DataModel } from '@/components/DataModel';
import { WireframeOutline } from '@/components/WireframeOutline';
import { NurseDashboard } from '@/components/NurseDashboard';
import { RolloutPlan } from '@/components/RolloutPlan';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
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

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'overview', label: 'Ülevaade' },
              { id: 'personas', label: 'Kasutajaprofiilid' },
              { id: 'requirements', label: 'Funktsionaalsed Nõuded' },
              { id: 'datamodel', label: 'Andmemudel' },
              { id: 'wireframes', label: 'UI/UX Kavandid' },
              { id: 'architecture', label: 'Tehniline Arhitektuur' },
              { id: 'metrics', label: 'Edu Mõõdikud' },
              { id: 'rollout', label: 'Käivitusplaan' }
            ].map((item) => (
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          {/* Overview Section */}
          <TabsContent value="overview" className="mt-0">
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
          </TabsContent>

          {/* User Personas */}
          <TabsContent value="personas" className="mt-0">
            <UserPersonas />
          </TabsContent>

          {/* Functional Requirements */}
          <TabsContent value="requirements" className="mt-0">
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">Kõrgetasemelised Funktsionaalsed Nõuded</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">1. Sümptomite Kaardistamise Vorm</h3>
                    <ul className="space-y-2 ml-4 text-gray-700">
                      <li>• Struktureeritud küsimused (valikvastused)</li>
                      <li>• Vabateksti sisestus täpsustamiseks</li>
                      <li>• Progressiivne küsimustik (järgmine küsimus eelmise vastuse põhjal)</li>
                      <li>• Visuaalsed abivahendid (kehaskeem, valuratingud)</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-3">2. LLM-põhine Riskihindamise Süsteem</h3>
                    <ul className="space-y-2 ml-4 text-gray-700">
                      <li>• Automaatne roheline/kollane/punane klassifikatsioon</li>
                      <li>• Seletatav AI - põhjendused otsuste kohta</li>
                      <li>• Pidev õppimine tagasiside põhjal</li>
                      <li>• Eesti-spetsiifiliste haiguspiltide arvestamine</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-3">3. Enesravi Juhendite Raamatukogu</h3>
                    <ul className="space-y-2 ml-4 text-gray-700">
                      <li>• Tõenduspõhised soovitused</li>
                      <li>• Video- ja pildijuhendid</li>
                      <li>• Personaliseeritud nõuanded</li>
                      <li>• Jälgimise ja hinnangu andmise võimalused</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-3">4. Integratsioonid</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">ePeraarstikeskus API</h4>
                        <ul className="space-y-1 ml-4 text-sm text-gray-600">
                          <li>• Perearsti vastuvõtuaja broneering</li>
                          <li>• Arstide saadavuse kontroll</li>
                          <li>• Automaatne kinnituste saatmine</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">EMO Süsteemid</h4>
                        <ul className="space-y-1 ml-4 text-sm text-gray-600">
                          <li>• Otsene EMO broneeringute loomine</li>
                          <li>• Õdede töölaual reaalajas teavitused</li>
                          <li>• Prioriteetsuse määramine</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-3">5. Turvaline Digitaalne Allkirjastamine</h3>
                    <ul className="space-y-2 ml-4 text-gray-700">
                      <li>• Triaaži aruannete eksport peraarstidele</li>
                      <li>• ID-kaardi / mobiil-ID integratsioon</li>
                      <li>• Täielik auditieriga jälg</li>
                      <li>• GDPR nõuetele vastavus</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
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
          </TabsContent>

          {/* Rollout Plan */}
          <TabsContent value="rollout" className="mt-0">
            <RolloutPlan />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 ER Triaaži Rakendus - Eesti Tervishoiusüsteemi Digitaalne Lahendus</p>
            <p className="mt-2 text-sm">Koostatud vastavalt EU/Eesti tervisandmete määrustele (GDPR, e-Tervis seadus)</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
