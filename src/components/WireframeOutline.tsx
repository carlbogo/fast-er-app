
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const WireframeOutline = () => {
  const [selectedFlow, setSelectedFlow] = useState('onboarding');

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-blue-700">UX/UI Kavandite Ülevaade</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedFlow} onValueChange={setSelectedFlow}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="onboarding">Sissejuhatus</TabsTrigger>
              <TabsTrigger value="symptom-form">Sümptomite Vorm</TabsTrigger>
              <TabsTrigger value="results">Tulemused</TabsTrigger>
              <TabsTrigger value="dashboard">Õdede Töölaud</TabsTrigger>
            </TabsList>

            {/* Onboarding Flow */}
            <TabsContent value="onboarding" className="mt-6">
              <div className="space-y-6">
                <h3 className="font-semibold text-lg">Sissejuhatuse ja Nõusoleku Protsess</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Welcome Screen */}
                  <Card className="bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-sm text-blue-700">1. Tervitusekraan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-blue-300 rounded p-4 h-64 flex flex-col justify-between">
                        <div>
                          <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-3"></div>
                          <h4 className="text-center font-medium mb-2">ER Triaaž</h4>
                          <p className="text-xs text-center text-gray-600 mb-4">Kiire meditsiiniline hindamine 24/7</p>
                        </div>
                        <div className="space-y-2">
                          <Button size="sm" className="w-full">Alusta hindamist</Button>
                          <Button size="sm" variant="outline" className="w-full">Vaata ajalugu</Button>
                        </div>
                      </div>
                      <div className="mt-3 space-y-1 text-xs">
                        <p>• Selge ja usaldusväärne esitlus</p>
                        <p>• Kiirjuurdepääs erakordsete juhtude jaoks</p>
                        <p>• Keelevalik (ET/RU/EN)</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Authentication */}
                  <Card className="bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-sm text-green-700">2. Autentimine</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-green-300 rounded p-4 h-64 flex flex-col justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-200 rounded mx-auto mb-3"></div>
                          <h4 className="font-medium mb-3">Turvaline sisselogimine</h4>
                          <div className="space-y-2">
                            <Button size="sm" variant="outline" className="w-full">ID-kaart</Button>
                            <Button size="sm" variant="outline" className="w-full">Mobiil-ID</Button>
                            <Button size="sm" variant="outline" className="w-full">Smart-ID</Button>
                          </div>
                          <p className="text-xs text-gray-600 mt-3">Või külalisena (piiratud funktsioonid)</p>
                        </div>
                      </div>
                      <div className="mt-3 space-y-1 text-xs">
                        <p>• eIDAS ühilduv autentimine</p>
                        <p>• Külalisrežiim erakorralistel juhtudel</p>
                        <p>• Biomeetriline tugi mobiilis</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Consent */}
                  <Card className="bg-purple-50">
                    <CardHeader>
                      <CardTitle className="text-sm text-purple-700">3. Nõusolek ja Tingimused</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-purple-300 rounded p-4 h-64 flex flex-col justify-between">
                        <div>
                          <h4 className="font-medium mb-2">Andmete töötlemine</h4>
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" className="w-3 h-3" checked readOnly />
                              <span>Tervisandmete töötlemine</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" className="w-3 h-3" checked readOnly />
                              <span>AI-põhine analüüs</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" className="w-3 h-3" />
                              <span>Statistika ja uuringud</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Button size="sm" className="w-full mb-2">Nõustun ja jätkan</Button>
                          <p className="text-xs text-center text-gray-600">GDPR õigused</p>
                        </div>
                      </div>
                      <div className="mt-3 space-y-1 text-xs">
                        <p>• Selged ja arusaadavad tingimused</p>
                        <p>• Granulaarset nõusolekul</p>
                        <p>• Ligipääs privaatsuspoliitikale</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Symptom Form Flow */}
            <TabsContent value="symptom-form" className="mt-6">
              <div className="space-y-6">
                <h3 className="font-semibold text-lg">Sümptomite Kirjeldamise Vorm</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-sm text-blue-700">Põhisümptomid</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-blue-300 rounded p-4 h-80">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Mis teile vaevab?</h4>
                            <div className="w-full h-4 bg-blue-200 rounded"></div>
                            <p className="text-xs text-gray-600 mt-1">Progressbar: samm 1/5</p>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input type="radio" name="pain" className="w-3 h-3" />
                              <span className="text-sm">Valu</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" name="pain" className="w-3 h-3" />
                              <span className="text-sm">Palavik</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" name="pain" className="w-3 h-3" />
                              <span className="text-sm">Hingamisraskused</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" name="pain" className="w-3 h-3" />
                              <span className="text-sm">Seedehäired</span>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-sm mb-2">Või kirjeldage omin sõnadin:</h5>
                            <div className="w-full h-16 bg-gray-100 rounded border"></div>
                          </div>
                          
                          <div className="flex justify-between">
                            <Button size="sm" variant="outline">Tagasi</Button>
                            <Button size="sm">Edasi</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-sm text-green-700">Intensiivsus ja Asukoht</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-green-300 rounded p-4 h-80">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Valu intensiivsus</h4>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs">1</span>
                              <div className="flex-1 h-2 bg-gray-200 rounded">
                                <div className="w-3/5 h-full bg-red-400 rounded"></div>
                              </div>
                              <span className="text-xs">10</span>
                            </div>
                            <p className="text-center text-sm font-medium mt-1">6/10</p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-2">Kus see asub?</h4>
                            <div className="w-24 h-32 bg-gray-200 rounded mx-auto relative">
                              <div className="absolute top-6 left-8 w-2 h-2 bg-red-500 rounded-full"></div>
                              <div className="absolute top-12 left-10 w-2 h-2 bg-yellow-500 rounded-full"></div>
                            </div>
                            <p className="text-xs text-center text-gray-600 mt-1">Puudutage kehkaardil</p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-2">Kestus</h4>
                            <div className="grid grid-cols-3 gap-2">
                              <Button size="sm" variant="outline">< 1h</Button>
                              <Button size="sm" variant="outline">1-24h</Button>
                              <Button size="sm" className="bg-blue-500">1-7 päeva</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Results Flow */}
            <TabsContent value="results" className="mt-6">
              <div className="space-y-6">
                <h3 className="font-semibold text-lg">Tulemuste Ekraan ja Järgmised Sammud</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Green Result */}
                  <Card className="bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-sm text-green-700">Roheline - Enesravi</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-green-300 rounded p-4 h-80 flex flex-col justify-between">
                        <div>
                          <div className="w-16 h-16 bg-green-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">✓</span>
                          </div>
                          <h4 className="text-center font-medium mb-2">Enesravi soovitused</h4>
                          <div className="text-xs space-y-2">
                            <div className="bg-white p-2 rounded">
                              <strong>Soovitus:</strong> Puhkus ja vedeliku tarbimine
                            </div>
                            <div className="bg-white p-2 rounded">
                              <strong>Jälgimine:</strong> Sümptomite päeviku pidamine
                            </div>
                            <div className="bg-white p-2 rounded">
                              <strong>Hoiatus:</strong> Kui sümptomid halvenevad...
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Button size="sm" className="w-full">Vaata täielikke juhendeid</Button>
                          <Button size="sm" variant="outline" className="w-full">Seadista meeldetuletused</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Yellow Result */}
                  <Card className="bg-yellow-50">
                    <CardHeader>
                      <CardTitle className="text-sm text-yellow-700">Kollane - Perearst</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-yellow-300 rounded p-4 h-80 flex flex-col justify-between">
                        <div>
                          <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">!</span>
                          </div>
                          <h4 className="text-center font-medium mb-2">Perearsti vastuvõtt</h4>
                          <div className="text-xs space-y-2">
                            <div className="bg-white p-2 rounded">
                              <strong>Soovitus:</strong> 24-48h jooksul perearsti juurde
                            </div>
                            <div className="bg-white p-2 rounded">
                              <strong>Järgmine vaba aeg:</strong> Homme kell 14:30
                            </div>
                            <div className="bg-white p-2 rounded">
                              <strong>Dr. Kask:</strong> Tartu Perearstikeskus
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Button size="sm" className="w-full">Broneeri vastuvõtt</Button>
                          <Button size="sm" variant="outline" className="w-full">Allalaadimine aruanne</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Red Result */}
                  <Card className="bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-sm text-red-700">Punane - Erakorraline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-red-300 rounded p-4 h-80 flex flex-col justify-between">
                        <div>
                          <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center animate-pulse">
                            <span className="text-white font-bold text-lg">⚠</span>
                          </div>
                          <h4 className="text-center font-medium mb-2">Kiire meditsiiniline abi</h4>
                          <div className="text-xs space-y-2">
                            <div className="bg-white p-2 rounded border-l-4 border-red-500">
                              <strong>KIIRELOOMULI:</strong> Minge kohe EMO-sse
                            </div>
                            <div className="bg-white p-2 rounded">
                              <strong>Lähim EMO:</strong> Tartu Ülikooli Kliinikum (2.3 km)
                            </div>
                            <div className="bg-white p-2 rounded">
                              <strong>Aeg:</strong> ~ 8 min autoga
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Button size="sm" className="w-full bg-red-600">Helista 112</Button>
                          <Button size="sm" variant="outline" className="w-full">Navigatsioon EMO-sse</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Nurse Dashboard */}
            <TabsContent value="dashboard" className="mt-6">
              <div className="space-y-6">
                <h3 className="font-semibold text-lg">Õdede Töölaua Kavand</h3>
                <div className="space-y-4">
                  <Card className="bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-sm text-blue-700">Peamised Näidikud ja Filtrid</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-blue-300 rounded p-4 h-32">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex space-x-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-red-600">12</div>
                              <div className="text-xs text-gray-600">Punased</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-yellow-600">34</div>
                              <div className="text-xs text-gray-600">Kollased</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">156</div>
                              <div className="text-xs text-gray-600">Rohelised</div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">Kõik</Button>
                            <Button size="sm" className="bg-red-500">Punased</Button>
                            <Button size="sm" variant="outline">Kollased</Button>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <input placeholder="Otsi patsienti..." className="flex-1 p-1 text-xs border rounded" />
                          <Button size="sm" variant="outline">Filtreeri</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-gray-50">
                      <CardHeader>
                        <CardTitle className="text-sm text-gray-700">Patsientide Nimekiri</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="border-2 border-dashed border-gray-300 rounded p-4 h-64 space-y-2">
                          {/* Patient List Items */}
                          <div className="bg-red-100 p-2 rounded border-l-4 border-red-500">
                            <div className="flex justify-between items-center">
                              <div>
                                <strong className="text-sm">Mari Maasikas</strong>
                                <p className="text-xs text-gray-600">37a, rinnavalu</p>
                              </div>
                              <div className="text-right">
                                <Badge className="bg-red-500 text-white text-xs">PUNANE</Badge>
                                <p className="text-xs text-gray-600">5 min tagasi</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-red-100 p-2 rounded border-l-4 border-red-500">
                            <div className="flex justify-between items-center">
                              <div>
                                <strong className="text-sm">Jaan Tamm</strong>
                                <p className="text-xs text-gray-600">65a, hingamisraskused</p>
                              </div>
                              <div className="text-right">
                                <Badge className="bg-red-500 text-white text-xs">PUNANE</Badge>
                                <p className="text-xs text-gray-600">12 min tagasi</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-yellow-100 p-2 rounded border-l-4 border-yellow-500">
                            <div className="flex justify-between items-center">
                              <div>
                                <strong className="text-sm">Liisa Kask</strong>
                                <p className="text-xs text-gray-600">45a, kõhuvalud</p>
                              </div>
                              <div className="text-right">
                                <Badge className="bg-yellow-500 text-white text-xs">KOLLANE</Badge>
                                <p className="text-xs text-gray-600">23 min tagasi</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardHeader>
                        <CardTitle className="text-sm text-gray-700">Patsiendi Detailvaade</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="border-2 border-dashed border-gray-300 rounded p-4 h-64">
                          <div className="space-y-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">Mari Maasikas</h4>
                                <p className="text-xs text-gray-600">37a, nainen</p>
                              </div>
                              <Badge className="bg-red-500 text-white">PUNANE - 96%</Badge>
                            </div>
                            
                            <div>
                              <h5 className="font-medium text-sm">Sümptomid:</h5>
                              <p className="text-xs">Äge rinnavalu, kiirguv vasakusse kätte, higistamine</p>
                            </div>
                            
                            <div>
                              <h5 className="font-medium text-sm">AI Selgitus:</h5>
                              <p className="text-xs text-gray-600">Akuutse koronaarseündrome tunnused. Vajalik kiire EKG ja kardioloogiline hindamine.</p>
                            </div>
                            
                            <div>
                              <h5 className="font-medium text-sm">Soovitused:</h5>
                              <ul className="text-xs text-gray-600">
                                <li>• Kiire EMO broneering ✓</li>
                                <li>• EKG ettevalmistus</li>
                                <li>• Kardioloogi konsultatsioon</li>
                              </ul>
                            </div>
                            
                            <div className="flex space-x-2">
                              <Button size="sm" className="bg-green-600">Kinnita vastuvõtt</Button>
                              <Button size="sm" variant="outline">Helista</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
