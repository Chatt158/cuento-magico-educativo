import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Wand2 } from 'lucide-react';

interface FormData {
  title: string;
  educationalContext: string;
  pages: string;
  gradeLevel: string;
  literalComprehension: boolean;
  inferentialComprehension: boolean;
  criticalComprehension: boolean;
  thematicVocabulary: boolean;
  readingStrategies: boolean;
  primaryCompetence: string;
  transversalApproaches: string[];
}

const StoryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    educationalContext: '',
    pages: '',
    gradeLevel: '',
    literalComprehension: false,
    inferentialComprehension: false,
    criticalComprehension: false,
    thematicVocabulary: false,
    readingStrategies: false,
    primaryCompetence: '',
    transversalApproaches: []
  });

  const educationalContexts = [
    'Valores y convivencia escolar',
    'Diversidad cultural e inclusión',
    'Cuidado del medio ambiente',
    'Desarrollo de la identidad personal',
    'Resolución de problemas cotidianos',
    'Promoción de la igualdad de género',
    'Fortalecimiento de la democracia',
    'Desarrollo del pensamiento crítico'
  ];

  const gradeLevels = [
    'Inicial (3-5 años)',
    'Primaria 1° (6 años)',
    'Primaria 2° (7 años)', 
    'Primaria 3° (8 años)',
    'Primaria 4° (9 años)',
    'Primaria 5° (10 años)',
    'Primaria 6° (11 años)',
    'Secundaria 1° (12 años)',
    'Secundaria 2° (13 años)',
    'Secundaria 3° (14 años)',
    'Secundaria 4° (15 años)',
    'Secundaria 5° (16 años)'
  ];

  const pageOptions = ['1 página', '2 páginas', '3 páginas', '4 páginas', '5 páginas'];

  const competences = [
    'Lee diversos tipos de textos escritos en su lengua materna',
    'Escribe diversos tipos de textos en su lengua materna',
    'Se comunica oralmente en su lengua materna',
    'Resuelve problemas de cantidad',
    'Construye su identidad',
    'Convive y participa democráticamente',
    'Construye interpretaciones históricas',
    'Gestiona responsablemente el espacio y el ambiente'
  ];

  const transversalApproaches = [
    'Enfoque de Derechos',
    'Enfoque Inclusivo o de Atención a la Diversidad',
    'Enfoque Intercultural',
    'Enfoque Igualdad de Género',
    'Enfoque Ambiental',
    'Enfoque Orientación al Bien Común',
    'Enfoque Búsqueda de la Excelencia'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Generating story with data:', formData);
    // Aquí se implementaría la lógica de generación del cuento
  };

  const handleTransversalApproachChange = (approach: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      transversalApproaches: checked 
        ? [...prev.transversalApproaches, approach]
        : prev.transversalApproaches.filter(a => a !== approach)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulario */}
        <Card className="bg-white shadow-lg">
          <CardHeader className="bg-blue-50 border-b">
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <BookOpen className="w-6 h-6" />
              Define los Detalles de tu Cuento
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Título */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium text-gray-700">
                  Título o Resumen del Cuento
                </Label>
                <Input
                  id="title"
                  placeholder="Ej: El zorro y el niño aventurero"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="border-blue-200 focus:border-blue-400"
                />
                <p className="text-xs text-gray-500">Una breve idea sobre tu cuento.</p>
              </div>

              {/* Contexto Educativo y Páginas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Contexto Educativo</Label>
                  <Select value={formData.educationalContext} onValueChange={(value) => setFormData({...formData, educationalContext: value})}>
                    <SelectTrigger className="border-blue-200">
                      <SelectValue placeholder="Selecciona el contexto" />
                    </SelectTrigger>
                    <SelectContent>
                      {educationalContexts.map(context => (
                        <SelectItem key={context} value={context}>{context}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Número de Páginas</Label>
                  <Select value={formData.pages} onValueChange={(value) => setFormData({...formData, pages: value})}>
                    <SelectTrigger className="border-blue-200">
                      <SelectValue placeholder="Selecciona páginas" />
                    </SelectTrigger>
                    <SelectContent>
                      {pageOptions.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Grado Escolar */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Grado Escolar</Label>
                <Select value={formData.gradeLevel} onValueChange={(value) => setFormData({...formData, gradeLevel: value})}>
                  <SelectTrigger className="border-blue-200">
                    <SelectValue placeholder="Selecciona un grado" />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeLevels.map(grade => (
                      <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Habilidades Específicas */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Habilidades Específicas a Desarrollar</Label>
                <div className="space-y-3">
                  {[
                    { id: 'literalComprehension', label: 'Comprensión literal', key: 'literalComprehension' },
                    { id: 'inferentialComprehension', label: 'Comprensión inferencial', key: 'inferentialComprehension' },
                    { id: 'criticalComprehension', label: 'Comprensión crítica', key: 'criticalComprehension' },
                    { id: 'thematicVocabulary', label: 'Vocabulario temático', key: 'thematicVocabulary' },
                    { id: 'readingStrategies', label: 'Estrategias de lectura', key: 'readingStrategies' }
                  ].map(skill => (
                    <div key={skill.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={skill.id}
                        checked={formData[skill.key as keyof FormData] as boolean}
                        onCheckedChange={(checked) => 
                          setFormData({...formData, [skill.key]: checked})
                        }
                      />
                      <Label htmlFor={skill.id} className="text-sm text-gray-700">
                        {skill.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competencia Principal */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Competencia Principal</Label>
                <Select value={formData.primaryCompetence} onValueChange={(value) => setFormData({...formData, primaryCompetence: value})}>
                  <SelectTrigger className="border-blue-200">
                    <SelectValue placeholder="Selecciona la competencia principal" />
                  </SelectTrigger>
                  <SelectContent>
                    {competences.map(competence => (
                      <SelectItem key={competence} value={competence}>{competence}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Enfoques Transversales */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Enfoques Transversales</Label>
                <div className="space-y-2">
                  {transversalApproaches.map(approach => (
                    <div key={approach} className="flex items-center space-x-2">
                      <Checkbox
                        id={`approach-${approach}`}
                        checked={formData.transversalApproaches.includes(approach)}
                        onCheckedChange={(checked) => 
                          handleTransversalApproachChange(approach, checked as boolean)
                        }
                      />
                      <Label htmlFor={`approach-${approach}`} className="text-sm text-gray-700">
                        {approach}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón de Generar */}
              <Button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-medium"
                size="lg"
              >
                <Wand2 className="w-5 h-5 mr-2" />
                Generar Cuento Mágico
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Vista Previa */}
        <Card className="bg-white shadow-lg">
          <CardHeader className="bg-blue-50 border-b">
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <BookOpen className="w-6 h-6" />
              Tu Cuento Generado
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex flex-col items-center justify-center min-h-96">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700">¡Tu lienzo de cuentos te espera!</h3>
              <p className="text-gray-500 max-w-md">
                Completa el formulario a la izquierda para que la IA teja una historia única con ilustraciones. 
                ¡La aventura literaria comienza con tus ideas!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StoryForm;
