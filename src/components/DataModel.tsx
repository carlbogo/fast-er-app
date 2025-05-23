
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const DataModel = () => {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-blue-700">Andmemudel ja Turvalisus</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Core Data Entities */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Põhilised Andmeüksused</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-md text-blue-700">Patsiendiprofiil</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-mono text-sm bg-white p-3 rounded border">
                      <div className="text-green-600">// Patsiendiprofiil</div>
                      <div>Patient &#123;</div>
                      <div className="ml-4">id: UUID</div>
                      <div className="ml-4">personalCode: String <span className="text-gray-500">// Isikukood</span></div>
                      <div className="ml-4">firstName: String</div>
                      <div className="ml-4">lastName: String</div>
                      <div className="ml-4">dateOfBirth: Date</div>
                      <div className="ml-4">gender: Enum</div>
                      <div className="ml-4">phoneNumber: String</div>
                      <div className="ml-4">email: String</div>
                      <div className="ml-4">emergencyContact: Contact</div>
                      <div className="ml-4">medicalHistory: MedicalHistory[]</div>
                      <div className="ml-4">allergies: String[]</div>
                      <div className="ml-4">medications: Medication[]</div>
                      <div className="ml-4">createdAt: DateTime</div>
                      <div className="ml-4">updatedAt: DateTime</div>
                      <div>&#125;</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-md text-green-700">Sümptomite Kirje</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-mono text-sm bg-white p-3 rounded border">
                      <div className="text-green-600">// Sümptomite Kirje</div>
                      <div>SymptomRecord &#123;</div>
                      <div className="ml-4">id: UUID</div>
                      <div className="ml-4">patientId: UUID</div>
                      <div className="ml-4">sessionId: UUID</div>
                      <div className="ml-4">symptoms: Symptom[]</div>
                      <div className="ml-4">severity: Integer <span className="text-gray-500">// 1-10</span></div>
                      <div className="ml-4">duration: Duration</div>
                      <div className="ml-4">onset: DateTime</div>
                      <div className="ml-4">description: Text</div>
                      <div className="ml-4">bodyLocation: BodyMap</div>
                      <div className="ml-4">associatedFactors: String[]</div>
                      <div className="ml-4">questionnaire: JSON</div>
                      <div className="ml-4">createdAt: DateTime</div>
                      <div>&#125;</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-md text-purple-700">Triaaži Tulemus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-mono text-sm bg-white p-3 rounded border">
                      <div className="text-green-600">// Triaaži Tulemus</div>
                      <div>TriageResult &#123;</div>
                      <div className="ml-4">id: UUID</div>
                      <div className="ml-4">symptomRecordId: UUID</div>
                      <div className="ml-4">category: Enum <span className="text-gray-500">// GREEN/YELLOW/RED</span></div>
                      <div className="ml-4">riskScore: Float <span className="text-gray-500">// 0.0-1.0</span></div>
                      <div className="ml-4">confidence: Float</div>
                      <div className="ml-4">reasoning: Text <span className="text-gray-500">// AI selgitus</span></div>
                      <div className="ml-4">recommendations: String[]</div>
                      <div className="ml-4">redFlags: String[]</div>
                      <div className="ml-4">followUpRequired: Boolean</div>
                      <div className="ml-4">urgencyLevel: Integer</div>
                      <div className="ml-4">aiModelVersion: String</div>
                      <div className="ml-4">processingTime: Duration</div>
                      <div className="ml-4">createdAt: DateTime</div>
                      <div>&#125;</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-md text-orange-700">Järeltegevus & Broneering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-mono text-sm bg-white p-3 rounded border">
                      <div className="text-green-600">// Järeltegevus</div>
                      <div>FollowUpAction &#123;</div>
                      <div className="ml-4">id: UUID</div>
                      <div className="ml-4">triageResultId: UUID</div>
                      <div className="ml-4">actionType: Enum <span className="text-gray-500">// SELF_CARE/GP/EMERGENCY</span></div>
                      <div className="ml-4">appointmentId: UUID?</div>
                      <div className="ml-4">providerId: UUID?</div>
                      <div className="ml-4">scheduledTime: DateTime?</div>
                      <div className="ml-4">status: Enum</div>
                      <div className="ml-4">notes: Text</div>
                      <div className="ml-4">digitalReport: File?</div>
                      <div className="ml-4">signature: DigitalSignature?</div>
                      <div className="ml-4">createdAt: DateTime</div>
                      <div>&#125;</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Digital Signature Flow */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Digitaalse Allkirjastamise Protsess</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="font-medium text-blue-700 mb-1">Dokumendi Loomine</h4>
                    <p className="text-sm text-gray-600">Triaaži aruande genereerimine struktureeritud vormingus</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="font-medium text-green-700 mb-1">Allkirjastamine</h4>
                    <p className="text-sm text-gray-600">ID-kaart/mobiil-ID kaudu digitaalne allkirjastamine</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="font-medium text-purple-700 mb-1">Krüpteerimine</h4>
                    <p className="text-sm text-gray-600">AES-256 krüpteerimine ja turvaline salvestamine</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h4 className="font-medium text-orange-700 mb-1">Edastamine</h4>
                    <p className="text-sm text-gray-600">Turvaline saatmine peraarstile või EMO-sse</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Security & Compliance */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Andmekaitse ja Vastavuse Nõuded</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-md text-red-600">GDPR Vastavus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Badge variant="outline" className="mt-1">Art. 6</Badge>
                        <div>
                          <h5 className="font-medium text-sm">Õiguslik Alus</h5>
                          <p className="text-xs text-gray-600">Eluliselt oluline huvi (Art. 6(1)(d)) tervishoiuteenuste osutamiseks</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Badge variant="outline" className="mt-1">Art. 9</Badge>
                        <div>
                          <h5 className="font-medium text-sm">Tervisandmed</h5>
                          <p className="text-xs text-gray-600">Eritegurite eraldi õiguslik alus tervisandmete töötlemiseks</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Badge variant="outline" className="mt-1">Art. 17</Badge>
                        <div>
                          <h5 className="font-medium text-sm">Unustamise Õigus</h5>
                          <p className="text-xs text-gray-600">Automaatne andmete kustutamine pärast seaduslikku säilitamisperioodi</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-md text-green-600">Eesti e-Tervise Seadus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-sm mb-1">§ 76 Andmete Töötlemine</h5>
                        <p className="text-xs text-gray-600">Tervisandmete töötlemine ainult seaduslikel alustel ja patsiendi huvides</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-sm mb-1">§ 83 Andmeturve</h5>
                        <p className="text-xs text-gray-600">Tervisandmete kaitse tehniliste ja organisatsiooniliste meetmetega</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-sm mb-1">§ 91 Auditeerimiskohustus</h5>
                        <p className="text-xs text-gray-600">Kõigi andmetöötlustoimingute logimine ja auditeeritavus</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Data Retention */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Andmete Säilitamine ja Kustutamine</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Lühiajaline (7 päeva)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Vorm- ja sessioonimata andmed</li>
                      <li>• Ajutised failid</li>
                      <li>• Cache'itud kasutajategevused</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Keskpikk (5 aastat)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Triaaži tulemused</li>
                      <li>• Sümptomite kirjed</li>
                      <li>• Allkirjastatud aruanded</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Pikaajaline (10 aastat)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Auditeerimise logid</li>
                      <li>• Turvaasündmuste kirjed</li>
                      <li>• Anonüümne statistika</li>
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
