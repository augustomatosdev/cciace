"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set launch date (example: 3 months from now)
    const launchDate = new Date();
    launchDate.setMonth(launchDate.getMonth() + 3);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>CCIACE - Em Breve | Integração Económica Angola-CEDEAO</title>
        <meta
          name="description"
          content="CCIACE - Câmara de Comércio e Indústria Angola-CEDEAO/ECOWAS. Promovendo a integração económica e comercial entre Angola e CEDEAO."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="CCIACE - Em Breve" />
        <meta
          property="og:description"
          content="Integração económica e comercial entre Angola e CEDEAO"
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-900 via-yellow-800 to-red-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-green-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-400 rounded-full opacity-25 animate-ping"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <header className="p-6 md:p-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full p-2 shadow-lg">
                  <Image
                    src="/logo.jpg"
                    alt="CCIACE Logo"
                    width={60}
                    height={60}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-white text-2xl font-bold">CCIACE</h1>
                  <p className="text-yellow-200 text-sm">
                    Câmara de Comércio e Indústria Angola-CEDEAO/ECOWAS{" "}
                  </p>
                </div>
              </div>
              <div className="hidden md:flex space-x-6 text-white">
                <a
                  href="https://in.qlinq.co/cciace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Mais Informações
                </a>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 flex items-center justify-center px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main heading */}
              <div className="mb-12">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  EM <span className="text-yellow-400">BREVE</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                  Somos a CCIACE e temos como objetivo fazer a integração
                  económica e comercial entre Angola e CEDEAO
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 mx-auto rounded-full"></div>
              </div>

              {/* Countdown Timer */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { label: "Dias", value: timeLeft.days },
                  { label: "Horas", value: timeLeft.hours },
                  { label: "Minutos", value: timeLeft.minutes },
                  { label: "Segundos", value: timeLeft.seconds },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white text-black bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20"
                  >
                    <div className="text-3xl md:text-4xl font-bold mb-2">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-green-600 text-sm uppercase tracking-wide">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter signup */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Mantenha-se Informado
                </h3>
                <p className="text-gray-300 mb-6">
                  Seja o primeiro a saber quando lançarmos nossa plataforma
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Seu email aqui..."
                    className="flex-1 px-4 py-3 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Notificar-me
                  </button>
                </div>
              </div>

              {/* Features preview */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold mb-2">
                    Networking Empresarial
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Conectamos empresários e organizações de Angola e CEDEAO
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold mb-2">
                    Análise de Mercado
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Estudos e relatórios sobre oportunidades comerciais
                    regionais
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M8 6v10a2 2 0 002 2h4a2 2 0 002-2V6"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold mb-2">
                    Facilitação Comercial
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Apoio para estabelecer parcerias e acordos comerciais
                  </p>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="p-6 md:p-8 border-t border-white border-opacity-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-4">Contactos</h4>
                  <div className="space-y-2 text-gray-300">
                    <p className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>orgbotelhoangola@outlook.pt</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Info@cciace.com</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>928016636 | 922241770</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Localização</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Província de Luanda
                    <br />
                    Município de Luanda
                    <br />
                    Rua Augusto Tadeu Basto N. 74
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://in.qlinq.co/cciace"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                    >
                      <span>Mais informações</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white border-opacity-20 text-center">
                <p className="text-gray-400 text-sm">
                  © 2024 CCIACE. Todos os direitos reservados. | Integrando
                  Angola e CEDEAO
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
