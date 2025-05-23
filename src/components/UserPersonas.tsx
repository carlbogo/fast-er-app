
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const UserPersonas = () => {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-blue-700">Kasutajaprofiilid ja -teekond</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Green User */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center space-x-2 mb-3">
                <Badge className="bg-green-100 text-green-800">ROHELINE</Badge>
                <h3 className="font-semibold text-lg">Enesravi Kasutaja</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Kasutajaprofiil:</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Mari, 32, Tallinn</strong><br/>
                    IT-töötaja, terviseteadlik, harjunud digitaalsete lahendustega
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-green-700 mb-2">Sümptomid:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Kerge peavalu, palavik alla 38°C</li>
                    <li>• Väike lõige, ninaverejooks</li>
                    <li>• Seedehäired, allergilised reaktsioonid</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-green-700 mb-2">Kasutajateekond:</h4>
                  <ol className="text-sm text-gray-600 space-y-2">
                    <li><strong>1.</strong> Avab rakenduse nutitelefonist</li>
                    <li><strong>2.</strong> Kirjeldab sümptomeid vormi abil</li>
                    <li><strong>3.</strong> Saab "roheline" hinnangu</li>
                    <li><strong>4.</strong> Näeb enesravi juhendeid</li>
                    <li><strong>5.</strong> Seadistab täiendava jälgimise</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium text-green-700 mb-2">Varuplaanid:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sümptomite halvenemise hoiatus</li>
                    <li>• Automaatne ümbermääramine "kollaseks"</li>
                    <li>• Kiirviide perearsti broneerimisele</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Yellow User */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex items-center space-x-2 mb-3">
                <Badge className="bg-yellow-100 text-yellow-800">KOLLANE</Badge>
                <h3 className="font-semibold text-lg">Mõõdukas Juht</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-yellow-700 mb-2">Kasutajaprofiil:</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Peeter, 45, Tartu</strong><br/>
                    Ehitustööline, kroonilised terviseprobleemid, harva arsti juures
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-yellow-700 mb-2">Sümptomid:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Palavik 38-39°C, köha 1+ nädalat</li>
                    <li>• Tugevad valud, mis ei leevendu</li>
                    <li>• Ootamatud nahareaktsioonid</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-yellow-700 mb-2">Kasutajateekond:</h4>
                  <ol className="text-sm text-gray-600 space-y-2">
                    <li><strong>1.</strong> Täidab sümptomite vormi</li>
                    <li><strong>2.</strong> Saab "kollane" hinnangu</li>
                    <li><strong>3.</strong> Näeb soovitust perearsti juurde minna</li>
                    <li><strong>4.</strong> Broonib automaatselt vastuvõtuaja</li>
                    <li><strong>5.</strong> Saab digitaalse triaaži aruande</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium text-yellow-700 mb-2">Varuplaanid:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Kui perearst pole kättesaadav → EMO suunamine</li>
                    <li>• Sümptomite ägenemise monitor</li>
                    <li>• 24h järelkontrolli meeldetuletus</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Red User */}
            <div className="border-l-4 border-red-500 pl-4">
              <div className="flex items-center space-x-2 mb-3">
                <Badge className="bg-red-100 text-red-800">PUNANE</Badge>
                <h3 className="font-semibold text-lg">Erakorraline Juht</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-red-700 mb-2">Kasutajaprofiil:</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Anna, 67, Pärnu</strong><br/>
                    Pensionär, südameprobleemid, piiratud tehnoloogiaoskused
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-red-700 mb-2">Sümptomid:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Äge rinnavalu, hingamisraskused</li>
                    <li>• Teadvuse häired, krambihood</li>
                    <li>• Tõsised traumad, veritsused</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-red-700 mb-2">Kasutajateekond:</h4>
                  <ol className="text-sm text-gray-600 space-y-2">
                    <li><strong>1.</strong> Kiire sümptomite kirjeldus</li>
                    <li><strong>2.</strong> Kohene "punane" hoiatus</li>
                    <li><strong>3.</strong> Otsene EMO broneeringu loomine</li>
                    <li><strong>4.</strong> Teavituse saatmine õdede töölauale</li>
                    <li><strong>5.</strong> GPS asukohta määramine kiirabiks</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium text-red-700 mb-2">Varuplaanid:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automaatne 112 helistamine</li>
                    <li>• Kontaktisiku teavitamine</li>
                    <li>• Meditsiiniline eelinfo EMO-le</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Journey Flow */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-blue-700">Üldine Kasutajateekonna Vooskeem</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-medium mb-1">Registreerimine</h4>
              <p className="text-sm text-gray-600">ID-kaart / mobiil-ID</p>
            </div>
            
            <div className="text-2xl text-gray-400">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-green-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-medium mb-1">Sümptomid</h4>
              <p className="text-sm text-gray-600">Vormil kirjeldamine</p>
            </div>
            
            <div className="text-2xl text-gray-400">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-medium mb-1">AI Analüüs</h4>
              <p className="text-sm text-gray-600">Riskihinnangu määramine</p>
            </div>
            
            <div className="text-2xl text-gray-400">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-orange-600 font-bold text-lg">4</span>
              </div>
              <h4 className="font-medium mb-1">Järgmised Sammud</h4>
              <p className="text-sm text-gray-600">Soovitused & broneering</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
