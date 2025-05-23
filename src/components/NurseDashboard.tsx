
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const NurseDashboard = () => {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-blue-700">Õdede Töölaua Funktsionaalsus</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Dashboard Overview */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Töölaua Põhikomponendid</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-red-50">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600 mb-1">8</div>
                      <div className="text-sm text-gray-600">Punased juhtumid</div>
                      <div className="text-xs text-gray-500 mt-1">Viimase tunni jooksul</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-yellow-50">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600 mb-1">23</div>
                      <div className="text-sm text-gray-600">Kollased juhtumid</div>
                      <div className="text-xs text-gray-500 mt-1">Ootel peraarsti vastuvõtt</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-50">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">4.2 min</div>
                      <div className="text-sm text-gray-600">Keskmine triaaži aeg</div>
                      <div className="text-xs text-gray-500 mt-1">24h keskmine</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">94%</div>
                      <div className="text-sm text-gray-600">Süsteemi kättesaadavus</div>
                      <div className="text-xs text-gray-500 mt-1">Viimase 7 päeva jooksul</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Patient Priority Queue */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Patsientide Prioriteedijärjekord</h3>
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {/* High Priority Patient */}
                    <div className="p-4 bg-red-50 border-l-4 border-red-500">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <Badge className="bg-red-500 text-white">KIIRELOOMULINE</Badge>
                            <h4 className="font-medium">Anna Männik, 67</h4>
                            <span className="text-sm text-gray-600">38067***</span>
                          </div>
                          <p className="text-sm mt-1"><strong>Sümptomid:</strong> Äge rinnavalu, hingamisraskused, higistamine</p>
                          <p className="text-sm"><strong>Kestus:</strong> 20 minutit</p>
                          <p className="text-sm"><strong>AI hinnang:</strong> 97% - akuutse südamelihaseinfarkt kahtlus</p>
                          <p className="text-sm"><strong>Asukoht:</strong> Kodus, Pärnu (GPS: 58.3859, 24.5021)</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Saabund: 3 min tagasi</div>
                          <div className="text-sm text-red-600 font-medium">Kiire sekkumine vajalik</div>
                          <div className="mt-2 space-y-1">
                            <Button size="sm" className="w-full bg-red-600">EMO broneering</Button>
                            <Button size="sm" variant="outline" className="w-full">Helista 112</Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Medium Priority Patient */}
                    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <Badge className="bg-yellow-500 text-white">MÕÕDUKAS</Badge>
                            <h4 className="font-medium">Mart Kask, 45</h4>
                            <span className="text-sm text-gray-600">38412***</span>
                          </div>
                          <p className="text-sm mt-1"><strong>Sümptomid:</strong> Tugevad kõhuvalud, iiveldus, palavik 38.5°C</p>
                          <p className="text-sm"><strong>Kestus:</strong> 6 tundi</p>
                          <p className="text-sm"><strong>AI hinnang:</strong> 78% - seedetrakti põletik võimalik</p>
                          <p className="text-sm"><strong>Soovitus:</strong> Perearsti vastuvõtt 24h jooksul</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Saabund: 15 min tagasi</div>
                          <div className="text-sm text-yellow-600 font-medium">Perearsti suunamine</div>
                          <div className="mt-2 space-y-1">
                            <Button size="sm" className="w-full bg-yellow-600">Broneeri perearst</Button>
                            <Button size="sm" variant="outline" className="w-full">Vaata täpsemalt</Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Resolved Case */}
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 opacity-75">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <Badge className="bg-green-500 text-white">LAHENDATUD</Badge>
                            <h4 className="font-medium">Liisa Tamm, 28</h4>
                            <span className="text-sm text-gray-600">39203***</span>
                          </div>
                          <p className="text-sm mt-1"><strong>Sümptomid:</strong> Kerge peavalu, väsimus</p>
                          <p className="text-sm"><strong>AI hinnang:</strong> 15% - enesravi piisav</p>
                          <p className="text-sm"><strong>Staatus:</strong> Enesravi juhendid saabused, järelkontroll seadistatud</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Lahendatud: 32 min tagasi</div>
                          <div className="text-sm text-green-600 font-medium">Enesravi õnnestuvas</div>
                          <div className="mt-2">
                            <Button size="sm" variant="outline" className="w-full">Vaata aruannet</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Real-time Analytics */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Reaalajas Analüütika</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-md text-blue-600">Triaaži Täpsuse Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-blue-50 rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">92.4%</div>
                        <div className="text-sm text-gray-600">Viimase 30 päeva keskmine</div>
                        <div className="text-xs text-green-600">↗ +2.1% eelmise kuuga võrreldes</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-md text-purple-600">Kategooriate Jaotus (24h)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Roheline (enesravi)</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-gray-200 rounded">
                            <div className="w-4/5 h-full bg-green-500 rounded"></div>
                          </div>
                          <span className="text-sm">78%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Kollane (perearst)</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-gray-200 rounded">
                            <div className="w-1/5 h-full bg-yellow-500 rounded"></div>
                          </div>
                          <span className="text-sm">18%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Punane (erakorraline)</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-gray-200 rounded">
                            <div className="w-1/12 h-full bg-red-500 rounded"></div>
                          </div>
                          <span className="text-sm">4%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Workflow Management */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Töövoo Haldamine</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-sm text-blue-700">Automaatsed Teavitused</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span>Punased juhtumid → kohene teatamine</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>Eskalatsiooni hoiatused</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Süsteemi staatus updates</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Vastuvõttude kinnitused</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-sm text-green-700">Integratsioonide Staatus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span>ePeraarstikeskus</span>
                        <Badge className="bg-green-500 text-white text-xs">ONLINE</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>EMO Süsteem</span>
                        <Badge className="bg-green-500 text-white text-xs">ONLINE</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>X-tee Gateway</span>
                        <Badge className="bg-green-500 text-white text-xs">ONLINE</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>LLM API</span>
                        <Badge className="bg-yellow-500 text-white text-xs">AEGLANE</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-sm text-purple-700">Kiirtoimingud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button size="sm" className="w-full">Uue juhtumi loomine</Button>
                      <Button size="sm" variant="outline" className="w-full">Massiteavitused</Button>
                      <Button size="sm" variant="outline" className="w-full">Raporte eksport</Button>
                      <Button size="sm" variant="outline" className="w-full">Süsteemi seadistused</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
