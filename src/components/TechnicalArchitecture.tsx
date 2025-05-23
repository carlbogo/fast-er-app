
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const TechnicalArchitecture = () => {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-blue-700">Tehniline Arhitektuur</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Architecture Diagram */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Süsteemi Ülevaade</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Frontend */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-700 mb-3">Frontend Kiht</h4>
                    <div className="space-y-2">
                      <Badge variant="outline" className="block text-center">React Native (Mobile)</Badge>
                      <Badge variant="outline" className="block text-center">React.js (Web)</Badge>
                      <Badge variant="outline" className="block text-center">Progressive Web App</Badge>
                    </div>
                    <ul className="text-sm text-gray-600 mt-3 space-y-1">
                      <li>• Offline-režiimi tugi</li>
                      <li>• Mitmekeelne tugi (ET/RU/EN)</li>
                      <li>• Ligipääsetavus (WCAG 2.1)</li>
                    </ul>
                  </div>

                  {/* Backend */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-700 mb-3">Backend Teenused</h4>
                    <div className="space-y-2">
                      <Badge variant="outline" className="block text-center">Node.js / FastAPI</Badge>
                      <Badge variant="outline" className="block text-center">Microservices</Badge>
                      <Badge variant="outline" className="block text-center">Docker Containers</Badge>
                    </div>
                    <ul className="text-sm text-gray-600 mt-3 space-y-1">
                      <li>• LLM API Gateway</li>
                      <li>• Triaaži Engine</li>
                      <li>• Notifikatsioonide teenus</li>
                    </ul>
                  </div>

                  {/* Data */}
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-700 mb-3">Andmekiht</h4>
                    <div className="space-y-2">
                      <Badge variant="outline" className="block text-center">PostgreSQL</Badge>
                      <Badge variant="outline" className="block text-center">Redis Cache</Badge>
                      <Badge variant="outline" className="block text-center">S3 Object Storage</Badge>
                    </div>
                    <ul className="text-sm text-gray-600 mt-3 space-y-1">
                      <li>• Krüpteeritud andmebaas</li>
                      <li>• Auditeerimise logid</li>
                      <li>• Varunduse automatiseerimine</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Integration Layer */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Integratsioonide Kiht</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-md text-blue-600">e-Tervise Integratsioonid</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-sm">X-tee Andmevahetuskiht</h5>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• Patsiendi identifitseerimine</li>
                          <li>• Meditsiiniline ajalugu</li>
                          <li>• Ravimite andmebaas</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">ePeraarstikeskus API</h5>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• Arstide saadavuse kontroll</li>
                          <li>• Vastuvõtuaegade broneering</li>
                          <li>• Kalendrisünkroniseerimine</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-md text-blue-600">Meditsiinilised Integratsioonid</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-sm">EMO Süsteemid</h5>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• Otsesed EMO broneeringud</li>
                          <li>• Õdede töölauale teatised</li>
                          <li>• Prioriteetsuse määramine</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">Kiirabiteenused</h5>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• 112 automaatne teavitamine</li>
                          <li>• GPS asukohta edastamine</li>
                          <li>• Meditsiinilise eelinfo saatmine</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* AI/ML Components */}
            <div>
              <h3 className="font-semibold text-lg mb-4">AI/ML Komponendid</h3>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-purple-700 mb-3">LLM Triaaži Engine</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600">•</span>
                        <span>OpenAI GPT-4 / Claude või kohalik mudel</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600">•</span>
                        <span>Eesti meditsiiniliste andmetega treening</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600">•</span>
                        <span>Selgitatava AI raamistik (LIME/SHAP)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600">•</span>
                        <span>Pideva õppimise tagasiside tsükkel</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-700 mb-3">Täiendavad ML Teenused</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600">•</span>
                        <span>NLP sümptomite ekstrakteerimine</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600">•</span>
                        <span>Anomaaliate tuvastamine</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600">•</span>
                        <span>Predictive risk scoring</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600">•</span>
                        <span>Personaliseeritud soovituste mudel</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Security & Compliance */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Turvalisus ja Vastavus</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-700 mb-2">Autentimine</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ID-kaardi tugi</li>
                    <li>• Mobiil-ID</li>
                    <li>• Smart-ID</li>
                    <li>• EU eIDAS-ga ühilduv</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-700 mb-2">Andmete Krüpteerimine</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AES-256 krüpteerimine</li>
                    <li>• TLS 1.3 transiidis</li>
                    <li>• Zero-knowledge arhitektuur</li>
                    <li>• HSM-i tugi</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-700 mb-2">Vastavuse Kontroll</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• GDPR täielik vastavus</li>
                    <li>• Eesti e-Tervise seadus</li>
                    <li>• ISO 27001 sertifikat</li>
                    <li>• HIPAA sarnased standardid</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
