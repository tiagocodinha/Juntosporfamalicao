import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, CheckCircle2, Building2, Users, Target } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed && email) {
      setSubscribed(true);
      setEmail('');
      setAgreed(false);
    }
  };

  const achievements = [
    "Implementação do programa 'Cidade Verde' - 2020",
    "Renovação do Centro Cultural Municipal - 2019",
    "Criação do programa 'Jovens Empreendedores' - 2018",
    "Modernização da rede de transportes públicos - 2017"
  ];

  const teamStructure = [
    { 
      position: "Presidente", 
      name: "Pedro Marques",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    { 
      position: "Vice-Presidente", 
      name: "Ana Silva",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    { 
      position: "Secretário", 
      name: "João Costa",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    { 
      position: "Tesoureiro", 
      name: "Maria Santos",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1447727214830-cbcbf097b52c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="City backdrop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <nav className="relative z-10 bg-blue-900/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="text-white font-bold text-xl">Juntos por Famalicão</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#about" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md">Sobre</a>
                  <a href="#achievements" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md">Conquistas</a>
                  <a href="#team" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md">Equipe</a>
                  <a href="#contact" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md">Contato</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Pedro Marques</h1>
            <h2 className="text-2xl md:text-3xl text-white mb-8">Juntos por Famalicão</h2>
            <p className="text-xl md:text-2xl text-white font-light">Unir Gerações, Criar Soluções</p>
          </div>
        </div>
      </header>

      {/* Newsletter Section */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Mantenha-se Informado</h3>
            {subscribed ? (
              <div className="text-center text-green-600 flex items-center justify-center">
                <CheckCircle2 className="mr-2" />
                <span>Obrigado por se inscrever!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1"
                    required
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    Concordo em receber informações sobre a campanha política de Pedro Marques e iniciativas relacionadas.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Inscrever
                </button>
              </form>
            )}
            <div className="mt-8 text-center">
              <a 
                href="https://chat.whatsapp.com/juntosporfamalicao" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <Phone className="mr-2" />
                Junte-se ao nosso grupo no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Realizações na Câmara</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md">
                <CheckCircle2 className="text-blue-600 mr-4 flex-shrink-0" />
                <p className="text-gray-700">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section id="team" className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Lista Junta de Freguesia de Famalicão</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStructure.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mb-4 relative w-32 h-32 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{member.position}</h3>
                <p className="text-gray-600">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Mail className="mr-2" />
                  <a href="mailto:1997.pedro.miguel@gmail.com" className="hover:text-blue-200">
                    1997.pedro.miguel@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2" />
                  <a href="tel:91303730" className="hover:text-blue-200">91303730</a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://chat.whatsapp.com/juntosporfamalicao" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                  <Phone />
                </a>
                <a href="#" className="hover:text-blue-200"><Instagram /></a>
                <a href="#" className="hover:text-blue-200"><Twitter /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p>&copy; 2024 Pedro Marques - Juntos por Famalicão. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;