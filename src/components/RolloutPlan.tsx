
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const RolloutPlan = () => {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-blue-700">Käivitusplaan: MVP-st Täisfunktsionaalsuseni</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Phase 1 - MVP */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Badge className="bg-blue-500 text-white">FAAS 1</Badge>
                <h3 className="font-semibold text-lg">MVP - Minimaalne Elujõuline Toode</h3>
                <Badge variant="outline">3-4 kuud</Badge>
              </div>
              
              <Card className="bg-blue-50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-3">Põhifunktsioonid</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">✓</span>
                          <span>Põhiline sümptomite küsimustik</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">✓</span>
                          <span>Lihtne AI triaaži klassifikatsioon</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">✓</span>
                          <span>Roheline/kollane/punane soovitused</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">✓</span>
                          <span>ID-kaardi autentimine</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">✓</span>
                          <span>Põhiline enesravi juhendite kogu</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">✓</span>
                          <span>Õdede lihtne töölaud</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700 mb-3">Tehniline Arhitektuur</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <span className="text-blue-600">•</span>
                          <span>React veebirakendus</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-blue-600">•</span>
                          <span>Node.js backend API</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-blue-600">•</span>
                          <span>PostgreSQL andmebaas</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-blue-600">•</span>
                          <span>OpenAI GPT-4 integratsioon</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-blue-600">•</span>
                          <span>ID-kaardi Web eID API</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-blue-600">•</span>
                          <span>AWS pilveplatvorm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h4 className="font-medium text-blue-700 mb-3">Pilotprojekt</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-white rounded border">
                        <div className="font-bold text-blue-600">Tartu Ülikooli Kliinikum</div>
                        <div className="text-sm text-gray-600">EMO testimine</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded border">
                        <div className="font-bold text-blue-600">2 Perearstikeskust</div>
                        <div className="text-sm text-gray-600">Kollasten juhtumite töövoog</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded border">
                        <div className="font-bold text-blue-600">500 Testkasutajat</div>
                        <div className="text-sm text-gray-600">Meditsiinipersonali ja patsientide tagasiside</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Phase 2 - Enhanced Features */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Badge className="bg-green-500 text-white">FAAS 2</Badge>
                <h3 className="font-semibold text-lg">Täiustatud Funktsioonid</h3>
                <Badge variant="outline">2-3 kuud</Badge>
              </div>
              
              <Card className="bg-green-50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-3">Uued Funktsioonid</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">+</span>
                          <span>Mobiilirakendus (React Native)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">+</span>
                          <span>ePeraarstikeskus API integratsioon</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">+</span>
                          <span>Digitaalse allkirjastamise tugi</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">+</span>
                          <span>Visuaalne kehkaart valulokalisatsiooniks</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">+</span>
                          <span>Täiustatud AI mudel (kohalike andmetega)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">+</span>
                          <span>Offline-režiimi tugi</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-700 mb-3">Integratsioonid</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">•</span>
                          <span>X-tee andmevahetuskiht</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">•</span>
                          <span>e-Tervise portaali ühendus</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">•</span>
                          <span>Haigekassa andmebaas</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">•</span>
                          <span>Ravimite andmebaas (RADB)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-600">•</span>
                          <span>SMS/e-maili teavitused</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Phase 3 - National Rollout */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Badge className="bg-purple-500 text-white">FAAS 3</Badge>
                <h3 className="font-semibold text-lg">Riiklik Käivitamine</h3>
                <Badge variant="outline">6-8 kuud</Badge>
              </div>
              
              <Card className="bg-purple-50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-3">Mastaapimise Funktsioonid</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600">↗</span>
                          <span>Mitmekeelne tugi (ET/RU/EN)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600">↗</span>
                          <span>Täiustatud analüütika ja aruandlus</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600">↗</span>
                          <span>Automaatne koormuse tasakaalustamine</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600">↗</span>
                          <span>Täiendavad enesravi juhendid</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-600">↗</span>
                          <span>Krooniliste haiguste spetsiifilised küsimustikud</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-700 mb-3">Katvuse Sihid</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-2 bg-white rounded">
                          <span>Tallinna piirkond</span>
                          <Badge className="bg-green-500 text-white">100%</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-white rounded">
                          <span>Tartu/Ida-Virumaa</span>
                          <Badge className="bg-blue-500 text-white">75%</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-white rounded">
                          <span>Teised maakonnad</span>
                          <Badge className="bg-yellow-500 text-white">50%</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-white rounded">
                          <span>Saaremaa/Hiiumaa</span>
                          <Badge className="bg-orange-500 text-white">25%</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator />

            {/* Success Criteria & Risks */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Edu Kriteeriumid ja Riskid</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-md text-green-600">Edu Kriteeriumid</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Kasutajate vastuvõtt</span>
                        <Badge variant="outline">75%+ aktiivsust</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Triaaži täpsus</span>
                        <Badge variant="outline">90%+ õigeid otsuseid</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">EMO koormuse vähenemine</span>
                        <Badge variant="outline">20%+ vähenemine</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Süsteemi stabiilsus</span>
                        <Badge variant="outline">99.5% uptime</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Arstide rahulolu</span>
                        <Badge variant="outline">8/10+ hinnang</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-md text-red-600">Riskid ja Leevendamise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong className="text-red-600">Kõrge risk:</strong> AI vale klassifitseerimine
                        <p className="text-gray-600 text-xs">Leevendamine: Pidev inimese ülevaatamine, tagasiside tsükli</p>
                      </div>
                      <div>
                        <strong className="text-orange-600">Keskmine risk:</strong> Kasutajate aeglane vastuvõtt
                        <p className="text-gray-600 text-xs">Leevendamine: Intensiivne koolitus, jõulised tugi</p>
                      </div>
                      <div>
                        <strong className="text-yellow-600">Madal risk:</strong> Tehniline häired
                        <p className="text-gray-600 text-xs">Leevendamine: Robustne infrastruktuur, varunduse loodud</p>
                      </div>
                      <div>
                        <strong className="text-blue-600">Regulatiivne risk:</strong> GDPR nõuete muutused
                        <p className="text-gray-600 text-xs">Leevendamine: Õiguslik nõustamine, paindlik arhitektuur</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Timeline & Budget */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Ajakava ja Eelarve</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">12-15</div>
                    <div className="text-sm text-gray-600">kuud kokku</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">€2.5M</div>
                    <div className="text-sm text-gray-600">eeldatav eelarve</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">15-20</div>
                    <div className="text-sm text-gray-600">meeskonnaliikmed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">500K+</div>
                    <div className="text-sm text-gray-600">potentsiaalsed kasutajad</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-medium text-blue-700 mb-2">Arenduskulud</h4>
                    <ul className="text-sm space-y-1">
                      <li>Tarkvara arendamine: €1.2M</li>
                      <li>AI mudeli treening: €300K</li>
                      <li>Integratsioonid: €400K</li>
                      <li>Testimine ja kvaliteet: €200K</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-medium text-green-700 mb-2">Infrastruktuur</h4>
                    <ul className="text-sm space-y-1">
                      <li>Pilveplatvorm: €150K/aastas</li>
                      <li>Turvalisuse lahendused: €100K</li>
                      <li>Monitooring ja backup: €50K</li>
                      <li>Sertifikatsioonid: €30K</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-medium text-purple-700 mb-2">Personalibud</h4>
                    <ul className="text-sm space-y-1">
                      <li>Projektijuht ja arhitekt: €200K</li>
                      <li>Arendajad (10): €800K</li>
                      <li>UX/UI disainerid: €120K</li>
                      <li>Testingute insenerid: €80K</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
