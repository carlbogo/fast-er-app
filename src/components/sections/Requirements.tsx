
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Requirements = () => {
  return (
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
  );
};

export default Requirements;
