'use client'

import { useState } from 'react'
import { Check, X, Star, Shield, Clock, CreditCard, Headphones, Trophy, Zap, Users, Award, MessageCircle, ChevronRight, Gamepad2, Calendar, Gift, Crown, Wifi, WifiOff, Image, Target, Sparkles, Rocket, Heart, TrendingUp, CheckCircle, Quote, ThumbsUp, Verified, UserCheck } from 'lucide-react'

export default function Home() {
  const [selectedVersion, setSelectedVersion] = useState<'standard' | 'ultimate'>('ultimate')

  const testimonials = [
    {
      name: "Carlos M.",
      game: "FIFA 23",
      rating: 5,
      comment: "Comprei e recebi na hora! Suporte incrível, recomendo demais!",
      verified: true,
      avatar: "CM"
    },
    {
      name: "Ana P.",
      game: "Call of Duty",
      rating: 5,
      comment: "Melhor preço que encontrei, entrega super rápida e segura.",
      verified: true,
      avatar: "AP"
    },
    {
      name: "João S.",
      game: "GTA V",
      rating: 5,
      comment: "Já é minha terceira compra, sempre perfeito. Confiança total!",
      verified: true,
      avatar: "JS"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header com Logo */}
      <header className="bg-black/90 backdrop-blur-sm border-b border-green-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a21eaaad-a1db-4381-bb8c-7077da8da78b.png" 
                alt="Icon Games Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-green-400">ICON GAMES</h1>
                <p className="text-xs text-gray-400">Sua loja gamer de confiança</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-green-400" />
                <span>Entrega Imediata</span>
              </div>
              <div className="flex items-center space-x-2">
                <Headphones className="w-4 h-4 text-green-400" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Ultra Atrativa - FUNDO MELHORADO */}
      <section className="relative overflow-hidden">
        {/* Background com múltiplas camadas */}
        <div className="absolute inset-0">
          {/* Gradiente base mais vibrante */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900/30 to-black"></div>
          
          {/* Gradiente secundário com movimento */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/10 to-cyan-500/20"></div>
          
          {/* Pattern geométrico animado */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #00ff00 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, #00ffff 1px, transparent 1px),
                linear-gradient(45deg, transparent 40%, rgba(0,255,0,0.1) 50%, transparent 60%)
              `,
              backgroundSize: '60px 60px, 40px 40px, 100px 100px',
              animation: 'float 20s ease-in-out infinite'
            }}></div>
          </div>
          
          {/* Efeito de luz central */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-green-500/30 via-green-400/10 to-transparent rounded-full blur-3xl"></div>
          
          {/* Partículas flutuantes */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-green-300 rounded-full opacity-40 animate-ping"></div>
            <div className="absolute top-60 right-1/3 w-2 h-2 bg-emerald-400 rounded-full opacity-70 animate-pulse"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge de Lançamento com efeito neon */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/30 to-green-400/30 border-2 border-green-400/50 rounded-full px-8 py-3 mb-8 backdrop-blur-sm shadow-2xl shadow-green-500/25">
              <Zap className="w-5 h-5 text-green-400 animate-pulse" />
              <span className="text-green-400 font-bold text-lg">PRÉ-VENDA EXCLUSIVA</span>
              <Calendar className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Lançamento 19/09</span>
            </div>

            {/* Título Principal com efeito holográfico */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 relative">
              <span className="bg-gradient-to-r from-green-400 via-cyan-300 to-green-400 bg-clip-text text-transparent animate-pulse">
                EA FC 26
              </span>
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
            </h1>
            
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-6 animate-pulse">
              O FUTURO DO FUTEBOL CHEGOU
            </div>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
              Seja um dos primeiros a jogar o game mais esperado do ano!<br />
              <span className="text-green-400 font-bold text-2xl animate-pulse">Acesso antecipado + preços exclusivos</span>
            </p>

            {/* Destaques Principais com efeitos visuais */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border-2 border-green-400/40 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30">
                <Trophy className="w-10 h-10 text-green-400 mx-auto mb-4 animate-bounce" />
                <h3 className="font-bold text-xl mb-3">Acesso Antecipado</h3>
                <p className="text-gray-300">Jogue 7 dias antes do lançamento oficial</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/10 border-2 border-cyan-400/40 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30">
                <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-4 animate-pulse" />
                <h3 className="font-bold text-xl mb-3">100% Seguro</h3>
                <p className="text-gray-300">Sem risco de banimento, garantia total</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-600/10 border-2 border-emerald-400/40 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30">
                <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-4 animate-ping" />
                <h3 className="font-bold text-xl mb-3">Entrega Imediata</h3>
                <p className="text-gray-300">Receba seus dados em segundos</p>
              </div>
            </div>

            {/* CTA Principal com efeito neon */}
            <div className="space-y-6">
              <button className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-black text-2xl px-16 py-6 rounded-3xl transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-green-500/50 overflow-hidden group">
                {/* Efeito de brilho no botão */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-shimmer"></div>
                <span className="relative z-10">🚀 GARANTIR MEU EA FC 26 AGORA</span>
              </button>
              <p className="text-lg text-gray-300 font-semibold">
                ⚡ Últimas unidades disponíveis • 🔒 Pagamento 100% seguro
              </p>
            </div>
          </div>
        </div>

        {/* Adicionar keyframes para animações */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(200%) skewX(-12deg); }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}</style>
      </section>

      {/* Novidades do EA FC 26 */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Novidades <span className="text-green-400">Revolucionárias</span>
            </h2>
            <p className="text-xl text-gray-400">O que há de novo no EA FC 26</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-400/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">HyperMotion V2</h3>
              <p className="text-gray-400">Captura de movimento com +6.000 animações reais de jogadores profissionais.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-400/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ultimate Team Evolution</h3>
              <p className="text-gray-400">Sistema renovado com novos modos, cartas especiais e evolução de jogadores.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-400/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modo Carreira 3.0</h3>
              <p className="text-gray-400">Experiência imersiva com IA avançada e negociações realistas.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-400/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Clubes Pro Renovado</h3>
              <p className="text-gray-400">Sistema reformulado com novas competições e rankings globais.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-400/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Física de Bola Realista</h3>
              <p className="text-gray-400">Nova engine que simula perfeitamente o comportamento da bola.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-400/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gráficos Next-Gen</h3>
              <p className="text-gray-400">Visuais impressionantes com ray tracing e estádios fotorrealistas em 4K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparação de Versões */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Escolha Sua <span className="text-green-400">Versão</span>
            </h2>
            <p className="text-xl text-gray-400">Compare e escolha a melhor opção para você</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Versão Standard */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-3xl p-8 relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">VERSÃO STANDARD</h3>
                <p className="text-gray-400">Lançamento: 26 de Setembro</p>
              </div>

              {/* Imagem da Versão Standard - SUBSTITUÍDA */}
              <div className="rounded-2xl overflow-hidden mb-6 bg-gray-800/50">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/7e0297cb-ebd9-4545-82a7-1f695cc4455a.png" 
                  alt="EA FC 26 Standard Edition" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Jogo completo EA FC 26</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Todos os modos de jogo inclusos</span>
                </div>
                <div className="flex items-center space-x-3 text-red-400">
                  <X className="w-5 h-5" />
                  <span>Só consegue jogar a partir do dia 26</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-700/50 rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">PRIMÁRIA</span>
                    <span className="text-2xl font-bold text-green-400">R$ 169,90</span>
                  </div>
                  <p className="text-sm text-gray-400">Sua conta, sua liberdade</p>
                </div>
                <div className="bg-gray-700/50 rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">SECUNDÁRIA</span>
                    <span className="text-2xl font-bold text-green-400">R$ 109,90</span>
                  </div>
                  <p className="text-sm text-gray-400">Nossa conta</p>
                </div>
                <div className="text-center text-sm text-gray-500">
                  Preço na PSN: <span className="line-through">R$ 350,00</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 rounded-2xl mt-6 transition-all duration-300">
                COMPRAR STANDARD
              </button>
            </div>

            {/* Versão Ultimate */}
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-400 rounded-3xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-black font-bold px-6 py-2 rounded-full text-sm">
                  MAIS POPULAR
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-green-400">VERSÃO ULTIMATE</h3>
                <p className="text-green-300">Lançamento: 19 de Setembro</p>
              </div>

              {/* Imagem da Versão Ultimate - SUBSTITUÍDA */}
              <div className="rounded-2xl overflow-hidden mb-6 bg-green-900/30 border border-green-400/30">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/536801b5-bb7d-4330-9f95-3fda568f58b2.png" 
                  alt="EA FC 26 Ultimate Edition" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Acesso antecipado: 7 dias antes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>FC Points para pacotes e FUT Draft</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Jogador TOTW garantido</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Empréstimo TOTY por 10 partidas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Atleta de capa por 10 partidas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Talentos locais no Modo Carreira</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Conteúdo exclusivo Ultimate Team</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-900/30 rounded-2xl p-4 border border-green-400/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">PRIMÁRIA</span>
                    <span className="text-2xl font-bold text-green-400">R$ 219,90</span>
                  </div>
                  <p className="text-sm text-green-300">Acesso antecipado</p>
                  <p className="text-xs text-yellow-400 mt-1">⚠️ Benefícios Ultimate apenas na secundária</p>
                </div>
                <div className="bg-green-900/30 rounded-2xl p-4 border border-green-400/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">SECUNDÁRIA</span>
                    <span className="text-2xl font-bold text-green-400">R$ 279,90</span>
                  </div>
                  <p className="text-sm text-green-300">Acesso antecipado + FIFA Points</p>
                </div>
                <div className="text-center text-sm text-gray-500">
                  Preço na PSN: <span className="line-through">R$ 500,00</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-bold py-4 rounded-2xl mt-6 transition-all duration-300 hover:scale-105">
                COMPRAR ULTIMATE
              </button>
            </div>
          </div>

          {/* Explicação Primária vs Secundária - VERSÃO MELHORADA */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-green-400/30 rounded-3xl p-8 relative overflow-hidden">
              {/* Background decorativo */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20px 20px, #00ff00 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
              
              <div className="relative">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-full px-6 py-3 mb-6">
                    <Crown className="w-6 h-6 text-green-400" />
                    <span className="text-green-400 font-bold text-lg">ENTENDA A DIFERENÇA</span>
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-green-400 via-white to-blue-400 bg-clip-text text-transparent">
                    Primária vs Secundária
                  </h3>
                  <p className="text-xl text-gray-400">
                    Escolha a modalidade que melhor se adapta ao seu estilo de jogo
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* PRIMÁRIA */}
                  <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 border-2 border-green-400/50 rounded-3xl p-8 relative">
                    <div className="absolute -top-3 left-6">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 text-black font-bold px-4 py-1 rounded-full text-sm">
                        RECOMENDADO
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                        <Crown className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-green-400">PRIMÁRIA</h4>
                        <p className="text-green-300 font-semibold">Máxima Liberdade</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Sua conta, suas regras</p>
                          <p className="text-sm text-gray-300">Jogue pelo seu próprio perfil com total liberdade</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                          <Trophy className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Seus troféus e conquistas</p>
                          <p className="text-sm text-gray-300">Todos os achievements ficam na sua conta</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                          <Users className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Seus amigos e saves</p>
                          <p className="text-sm text-gray-300">Mantenha sua lista de amigos e progresso</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                          <WifiOff className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Jogue offline quando quiser</p>
                          <p className="text-sm text-gray-300">Não precisa estar sempre conectado</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-500/20 border border-green-400/50 rounded-2xl p-4">
                      <p className="text-green-400 font-bold text-center">
                        ✨ Perfeito para quem quer total controle e liberdade
                      </p>
                    </div>
                  </div>

                  {/* SECUNDÁRIA */}
                  <div className="bg-gradient-to-br from-blue-900/40 to-purple-800/20 border-2 border-blue-400/50 rounded-3xl p-8 relative">
                    <div className="absolute -top-3 left-6">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-4 py-1 rounded-full text-sm">
                        MAIS BARATO
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-blue-400">SECUNDÁRIA</h4>
                        <p className="text-blue-300 font-semibold">Economia Máxima</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Preço mais acessível</p>
                          <p className="text-sm text-gray-300">Economia de até R$ 60 comparado à primária</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                          <Gamepad2 className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Jogue pelo perfil enviado</p>
                          <p className="text-sm text-gray-300">Usamos uma conta nossa configurada</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-0.5">
                          <Gift className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Benefícios Ultimate inclusos</p>
                          <p className="text-sm text-gray-300">FC Points e conteúdos especiais (só na Ultimate)</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-500/20 border border-blue-400/50 rounded-2xl p-4">
                      <p className="text-blue-400 font-bold text-center">
                        💰 Ideal para quem quer economizar sem perder a diversão
                      </p>
                    </div>
                  </div>
                </div>

                {/* Aviso Importante */}
                <div className="mt-8 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-400/50 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-black" />
                    </div>
                    <h4 className="text-xl font-bold text-yellow-400">ATENÇÃO ESPECIAL</h4>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    <span className="font-semibold text-yellow-400">Versão Ultimate:</span> Os benefícios especiais como FC Points, jogadores TOTW e conteúdos exclusivos estão disponíveis 
                    <span className="font-bold text-yellow-300"> APENAS na modalidade SECUNDÁRIA</span>. 
                    Na primária você terá acesso antecipado, mas sem os extras do Ultimate Team.
                  </p>
                </div>

                {/* Resumo Visual */}
                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/30 border border-green-400/30 rounded-xl p-4 text-center">
                    <Crown className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="font-bold text-green-400">PRIMÁRIA = LIBERDADE TOTAL</p>
                    <p className="text-sm text-gray-300">Sua conta, suas regras</p>
                  </div>
                  <div className="bg-blue-900/30 border border-blue-400/30 rounded-xl p-4 text-center">
                    <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="font-bold text-blue-400">SECUNDÁRIA = ECONOMIA + BENEFÍCIOS</p>
                    <p className="text-sm text-gray-300">Preço menor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios da Icon Games - SEÇÃO ENRIQUECIDA VISUALMENTE */}
      <section className="py-20 relative overflow-hidden">
        {/* Background com múltiplas camadas e efeitos visuais */}
        <div className="absolute inset-0">
          {/* Gradiente base vibrante */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900/20 to-black"></div>
          
          {/* Gradiente secundário animado */}
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-blue-500/15 to-purple-500/10 animate-pulse"></div>
          
          {/* Pattern geométrico */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #00ff00 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #00ffff 1px, transparent 1px),
              linear-gradient(45deg, transparent 40%, rgba(0,255,0,0.1) 50%, transparent 60%)
            `,
            backgroundSize: '80px 80px, 60px 60px, 120px 120px'
          }}></div>
          
          {/* Partículas flutuantes */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-3 h-3 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-50 animate-ping"></div>
            <div className="absolute top-60 right-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-emerald-400 rounded-full opacity-90 animate-bounce"></div>
          </div>
          
          {/* Efeito de luz central */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-green-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header da seção com efeitos especiais */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border-2 border-green-400/40 rounded-full px-8 py-4 mb-8 backdrop-blur-sm shadow-2xl shadow-green-500/25">
              <Sparkles className="w-6 h-6 text-green-400 animate-pulse" />
              <span className="text-green-400 font-bold text-lg">DIFERENCIAIS EXCLUSIVOS</span>
              <Target className="w-6 h-6 text-blue-400 animate-bounce" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-6 relative">
              Por que escolher a{' '}
              <span className="bg-gradient-to-r from-green-400 via-cyan-300 to-green-400 bg-clip-text text-transparent animate-pulse">
                Icon Games
              </span>
              <span className="text-white">?</span>
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer"></div>
            </h2>
            
            <p className="text-2xl text-gray-300 font-semibold mb-4">
              Sua segurança e satisfação são nossa <span className="text-green-400">prioridade máxima</span>
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-lg">
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">+10.000 clientes satisfeitos</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">98% de aprovação</span>
              </div>
            </div>
          </div>

          {/* Cards principais com efeitos visuais aprimorados */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-green-900/40 to-green-800/20 border-2 border-green-400/30 rounded-3xl p-8 text-center relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/40">
              {/* Background animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Ícone com efeito especial */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-2xl shadow-green-500/50">
                  <Zap className="w-10 h-10 text-black animate-pulse" />
                </div>
                {/* Efeito de brilho ao redor do ícone */}
                <div className="absolute inset-0 bg-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="font-black text-2xl mb-4 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                Entrega Imediata
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                Receba seus dados em <span className="font-bold text-green-400">segundos</span> após a confirmação do pagamento
              </p>
              
              {/* Indicador de velocidade */}
              <div className="mt-4 flex items-center justify-center space-x-2 text-green-400">
                <Rocket className="w-4 h-4 animate-bounce" />
                <span className="text-sm font-semibold">Velocidade máxima</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-blue-900/40 to-blue-800/20 border-2 border-blue-400/30 rounded-3xl p-8 text-center relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/40">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-2xl shadow-blue-500/50">
                  <Shield className="w-10 h-10 text-white animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="font-black text-2xl mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                100% Seguro
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                <span className="font-bold text-blue-400">Zero risco</span> de banimento, contas verificadas e totalmente seguras
              </p>
              
              <div className="mt-4 flex items-center justify-center space-x-2 text-blue-400">
                <CheckCircle className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-semibold">Garantia total</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-2 border-purple-400/30 rounded-3xl p-8 text-center relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/40">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-2xl shadow-purple-500/50">
                  <CreditCard className="w-10 h-10 text-white animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-purple-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="font-black text-2xl mb-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                Pagamento Flexível
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                <span className="font-bold text-purple-400">PIX instantâneo</span> ou cartão em até <span className="font-bold text-purple-400">12x</span>
              </p>
              
              <div className="mt-4 flex items-center justify-center space-x-2 text-purple-400">
                <Heart className="w-4 h-4 animate-bounce" />
                <span className="text-sm font-semibold">Facilidade máxima</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-yellow-900/40 to-yellow-800/20 border-2 border-yellow-400/30 rounded-3xl p-8 text-center relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/40">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-2xl shadow-yellow-500/50">
                  <Headphones className="w-10 h-10 text-black animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="font-black text-2xl mb-4 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                Suporte 24/7
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                Atendimento <span className="font-bold text-yellow-400">especializado</span> a qualquer hora do dia ou da noite
              </p>
              
              <div className="mt-4 flex items-center justify-center space-x-2 text-yellow-400">
                <MessageCircle className="w-4 h-4 animate-bounce" />
                <span className="text-sm font-semibold">Sempre disponível</span>
              </div>
            </div>
          </div>

          {/* Cards secundários com design aprimorado */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-900/60 to-black/80 border-2 border-green-400/30 rounded-3xl p-8 relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="font-black text-2xl text-green-400 group-hover:text-green-300 transition-colors duration-300">Garantia Total</h3>
                  <p className="text-green-300 font-semibold">Proteção completa</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                Se der qualquer problema, <span className="font-bold text-green-400">resolvemos na hora</span> ou devolvemos seu dinheiro. 
                <span className="font-bold text-white"> Sem complicação!</span>
              </p>
              
              <div className="mt-6 bg-green-500/20 border border-green-400/40 rounded-2xl p-4">
                <p className="text-green-400 font-bold text-center">
                  ✅ Satisfação garantida ou seu dinheiro de volta
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/60 to-black/80 border-2 border-blue-400/30 rounded-3xl p-8 relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-2xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">+10.000 Clientes</h3>
                  <p className="text-blue-300 font-semibold">Confiança comprovada</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                <span className="font-bold text-blue-400">Milhares de gamers</span> satisfeitos e fidelizados em todo o Brasil. 
                <span className="font-bold text-white"> Nossa reputação fala por si!</span>
              </p>
              
              <div className="mt-6 bg-blue-500/20 border border-blue-400/40 rounded-2xl p-4">
                <p className="text-blue-400 font-bold text-center">
                  🏆 Liderança no mercado gamer brasileiro
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/60 to-black/80 border-2 border-purple-400/30 rounded-3xl p-8 relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-2xl text-purple-400 group-hover:text-purple-300 transition-colors duration-300">Melhor Preço</h3>
                  <p className="text-purple-300 font-semibold">Economia garantida</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                Preços <span className="font-bold text-purple-400">imbatíveis</span>, até <span className="font-bold text-purple-400">70% mais barato</span> que as lojas oficiais. 
                <span className="font-bold text-white"> Economia real!</span>
              </p>
              
              <div className="mt-6 bg-purple-500/20 border border-purple-400/40 rounded-2xl p-4">
                <p className="text-purple-400 font-bold text-center">
                  💰 Melhor custo-benefício do mercado
                </p>
              </div>
            </div>
          </div>

          {/* CTA especial da seção */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-2 border-green-400/40 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Junte-se aos milhares de gamers satisfeitos!
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Faça parte da maior comunidade gamer do Brasil e tenha acesso aos melhores preços e atendimento
              </p>
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold text-xl px-12 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-green-500/50">
                🎮 QUERO FAZER PARTE AGORA
              </button>
            </div>
          </div>
        </div>

        {/* Keyframes para animações */}
        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(200%) skewX(-12deg); }
          }
          .animate-shimmer {
            animation: shimmer 3s infinite;
          }
        `}</style>
      </section>

      {/* Depoimentos - SEÇÃO ENRIQUECIDA VISUALMENTE */}
      <section className="py-20 relative overflow-hidden">
        {/* Background com múltiplas camadas e efeitos visuais */}
        <div className="absolute inset-0">
          {/* Gradiente base vibrante */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-black"></div>
          
          {/* Gradiente secundário animado */}
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-blue-500/15 to-purple-500/10 animate-pulse"></div>
          
          {/* Pattern geométrico */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, #00ff00 2px, transparent 2px),
              radial-gradient(circle at 70% 70%, #ff00ff 1px, transparent 1px),
              linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)
            `,
            backgroundSize: '80px 80px, 60px 60px, 120px 120px'
          }}></div>
          
          {/* Partículas flutuantes */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-3 h-3 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-50 animate-ping"></div>
            <div className="absolute top-60 right-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-emerald-400 rounded-full opacity-90 animate-bounce"></div>
          </div>
          
          {/* Efeito de luz central */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header da seção com efeitos especiais */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-green-500/20 border-2 border-purple-400/40 rounded-full px-8 py-4 mb-8 backdrop-blur-sm shadow-2xl shadow-purple-500/25">
              <Quote className="w-6 h-6 text-purple-400 animate-pulse" />
              <span className="text-purple-400 font-bold text-lg">DEPOIMENTOS REAIS</span>
              <ThumbsUp className="w-6 h-6 text-green-400 animate-bounce" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-6 relative">
              O que nossos{' '}
              <span className="bg-gradient-to-r from-green-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                clientes dizem
              </span>
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer"></div>
            </h2>
            
            <p className="text-2xl text-gray-300 font-semibold mb-4">
              Depoimentos reais de quem já comprou conosco e <span className="text-green-400">aprovou</span>
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-lg">
              <div className="flex items-center space-x-2 text-green-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">4.9/5 estrelas</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <UserCheck className="w-5 h-5" />
                <span className="font-semibold">100% verificados</span>
              </div>
            </div>
          </div>

          {/* Cards de depoimentos com design ultra moderno */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-900/80 to-black/90 border-2 border-green-400/30 rounded-3xl p-8 relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/40">
                {/* Background animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quote decorativo */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Quote className="w-8 h-8 text-green-400 opacity-60" />
                </div>
                
                <div className="relative">
                  {/* Header do card com avatar e info */}
                  <div className="flex items-center space-x-4 mb-6">
                    {/* Avatar personalizado */}
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-2xl shadow-green-500/30">
                      {testimonial.avatar}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-black text-xl text-white group-hover:text-green-300 transition-colors duration-300">
                          {testimonial.name}
                        </h3>
                        {testimonial.verified && (
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <Verified className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-400 font-semibold">
                        Comprou: <span className="text-green-400">{testimonial.game}</span>
                      </p>
                    </div>
                  </div>

                  {/* Avaliação com estrelas animadas */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-6 h-6 text-yellow-400 fill-current animate-pulse" 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                    <span className="ml-2 text-yellow-400 font-bold text-lg">
                      {testimonial.rating}.0
                    </span>
                  </div>

                  {/* Comentário com destaque visual */}
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-green-400/20 rounded-2xl p-6 mb-6 relative">
                    <p className="text-gray-200 text-lg leading-relaxed font-medium group-hover:text-white transition-colors duration-300">
                      "{testimonial.comment}"
                    </p>
                    
                    {/* Aspas decorativas */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white rotate-180" />
                    </div>
                  </div>

                  {/* Footer com badge de verificação */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-semibold">Compra Verificada</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-purple-400">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">Recomenda</span>
                    </div>
                  </div>
                </div>

                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Estatísticas impressionantes */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 border-2 border-green-400/30 rounded-3xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-black text-green-400 mb-2">4.9/5</div>
              <p className="text-gray-300 font-semibold">Avaliação Média</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 border-2 border-blue-400/30 rounded-3xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-blue-400 mb-2">+10K</div>
              <p className="text-gray-300 font-semibold">Clientes Satisfeitos</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-2 border-purple-400/30 rounded-3xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-purple-400 mb-2">98%</div>
              <p className="text-gray-300 font-semibold">Taxa de Aprovação</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/40 to-yellow-800/20 border-2 border-yellow-400/30 rounded-3xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-black text-yellow-400 mb-2">3+</div>
              <p className="text-gray-300 font-semibold">Anos no Mercado</p>
            </div>
          </div>

          {/* CTA especial da seção */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-900/30 to-green-900/30 border-2 border-purple-400/40 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                Seja o próximo cliente satisfeito!
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Junte-se aos milhares de gamers que já confiam na Icon Games
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-green-600 hover:from-purple-400 hover:to-green-500 text-white font-bold text-xl px-12 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/50">
                💬 QUERO COMPRAR AGORA
              </button>
            </div>
          </div>
        </div>

        {/* Keyframes para animações */}
        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(200%) skewX(-12deg); }
          }
          .animate-shimmer {
            animation: shimmer 3s infinite;
          }
        `}</style>
      </section>

      {/* PSN Plus Oferta - COM IMAGEM ADICIONADA */}
      <section className="py-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-3xl p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Lado Esquerdo - Informações */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Gamepad2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-blue-400">PSN PLUS</h2>
                      <p className="text-blue-300 font-semibold">ESSENCIAL • 1 ANO COMPLETO</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-5xl font-black text-blue-400 mb-2">R$ 189,90</div>
                    <div className="text-gray-400">
                      Preço na PSN: <span className="line-through text-red-400">R$ 360,00</span>
                      <span className="ml-2 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        ECONOMIZE R$ 170!
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-blue-900/30 border border-blue-400/30 rounded-2xl p-4 text-center">
                      <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <h3 className="font-bold text-sm mb-1">Jogue Online</h3>
                      <p className="text-xs text-gray-300">Necessário para EA FC 26 online</p>
                    </div>
                    <div className="bg-purple-900/30 border border-purple-400/30 rounded-2xl p-4 text-center">
                      <Gift className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <h3 className="font-bold text-sm mb-1">3 Jogos/Mês</h3>
                      <p className="text-xs text-gray-300">Jogos gratuitos mensais</p>
                    </div>
                    <div className="bg-green-900/30 border border-green-400/30 rounded-2xl p-4 text-center">
                      <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <h3 className="font-bold text-sm mb-1">PS4 & PS5</h3>
                      <p className="text-xs text-gray-300">Ambos os consoles</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">🔥 COMBO PERFEITO</h3>
                    <p className="text-gray-300">
                      Compre EA FC 26 + PSN Plus e tenha a experiência completa!<br />
                      <span className="text-green-400 font-semibold">Jogue online desde o primeiro dia</span>
                    </p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-xl px-12 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
                    🎮 GARANTIR PSN PLUS AGORA
                  </button>
                </div>

                {/* Lado Direito - Imagem do PSN Plus */}
                <div className="lg:order-last">
                  <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-2 border-blue-400/30 p-4">
                    <img 
                      src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c58d8bdc-375e-4097-889a-a012ebfd37ce.png" 
                      alt="PlayStation Plus Subscription" 
                      className="w-full h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Benefícios visuais */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="bg-blue-900/20 border border-blue-400/20 rounded-xl p-3 text-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-xs text-blue-400 font-semibold">Multiplayer Online</p>
                    </div>
                    <div className="bg-purple-900/20 border border-purple-400/20 rounded-xl p-3 text-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Gift className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-xs text-purple-400 font-semibold">Jogos Mensais</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - FUNDO MELHORADO */}
      <section className="py-16 relative overflow-hidden">
        {/* Background com múltiplas camadas e efeitos visuais */}
        <div className="absolute inset-0">
          {/* Gradiente base vibrante */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
          
          {/* Gradiente secundário animado */}
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-blue-500/30 to-purple-500/20 animate-pulse"></div>
          
          {/* Elementos geométricos animados */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-full blur-2xl animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-xl animate-bounce"></div>
          </div>
          
          {/* Pattern geométrico */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, #00ff00 2px, transparent 2px),
              radial-gradient(circle at 70% 70%, #ff00ff 1px, transparent 1px),
              linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)
            `,
            backgroundSize: '80px 80px, 60px 60px, 120px 120px'
          }}></div>
          
          {/* Partículas flutuantes */}
          <div className="absolute inset-0">
            <div className="absolute top-16 left-16 w-3 h-3 bg-green-400 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute top-32 right-32 w-2 h-2 bg-blue-400 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-ping"></div>
            <div className="absolute top-48 right-16 w-2 h-2 bg-pink-400 rounded-full opacity-90 animate-pulse"></div>
            <div className="absolute bottom-24 right-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-75 animate-bounce"></div>
          </div>
          
          {/* Efeito de luz central */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/10 via-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Não perca essa <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">oportunidade!</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Seja um dos primeiros a jogar EA FC 26 com preços exclusivos de pré-venda
            </p>
            
            <div className="bg-gradient-to-r from-red-500/30 to-orange-500/30 border-2 border-red-400/50 rounded-3xl p-6 mb-8 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-6 h-6 text-red-400 animate-pulse" />
                <span className="text-red-400 font-bold text-lg">OFERTA POR TEMPO LIMITADO</span>
              </div>
              <p className="text-gray-200 font-semibold">Preços especiais válidos apenas durante a pré-venda</p>
            </div>

            <div className="space-y-4">
              <button className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold text-2xl px-16 py-6 rounded-3xl transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-green-500/50 overflow-hidden group">
                {/* Efeito de brilho no botão */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-shimmer"></div>
                <span className="relative z-10">🚀 COMPRAR AGORA NO WHATSAPP</span>
              </button>
              <p className="text-sm text-gray-300 font-semibold">
                💬 Atendimento humanizado • ⚡ Entrega imediata • 🔒 100% seguro
              </p>
            </div>
          </div>
        </div>

        {/* Keyframes para animações */}
        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(200%) skewX(-12deg); }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-green-400/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a21eaaad-a1db-4381-bb8c-7077da8da78b.png" 
              alt="Icon Games Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-green-400">ICON GAMES</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Icon Games. Todos os direitos reservados.<br />
            Sua loja gamer de confiança há mais de 3 anos.
          </p>
        </div>
      </footer>
    </div>
  )
}