'use client'
import { useState, useRef } from 'react'
import Container from '@/components/ui/Container'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from 'react-icons/fa'

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(() => {
          setHasError(true)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #1d4ed8 50%, #2563eb 75%, #3b82f6 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Background Pattern - MÁS AZUL */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm-20 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm40 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm-20-20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Elementos flotantes azules */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl animate-pulse"
          style={{ 
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            animationDelay: '1000ms'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-2xl animate-bounce"
          style={{ 
            backgroundColor: 'rgba(147, 197, 253, 0.15)',
            animationDelay: '500ms'
          }}
        ></div>
      </div>

      <Container>
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center rounded-full px-6 py-3 mb-6 border"
            style={{
              backgroundColor: 'rgba(30, 58, 138, 0.3)',
              backdropFilter: 'blur(4px)',
              borderColor: 'rgba(59, 130, 246, 0.3)'
            }}
          >
            <span className="text-blue-100 font-bold text-sm uppercase tracking-wide">
              Timeline FELADE
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
            Nuestra Historia
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Descubre el recorrido de FELADE a través de los años y cómo hemos 
            llegado a ser líderes en educación especializada en Latinoamérica
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-7xl mx-auto">
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl border"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(4px)',
              borderColor: 'rgba(59, 130, 246, 0.2)'
            }}
          >
            {hasError ? (
              // Fallback cuando el video no carga
              <div 
                className="aspect-video flex items-center justify-center text-white"
                style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)'
                }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-2xl font-bold mb-2">Timeline FELADE</h3>
                  <p className="text-blue-200">29 años de excelencia educativa</p>
                  <p className="text-sm text-blue-300 mt-4">Video próximamente disponible</p>
                </div>
              </div>
            ) : (
              <video
                ref={videoRef}
                className="w-full h-auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setHasError(true)}
                controls={false}
                playsInline
              >
                <source src="/video/timeline.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            )}

            {/* Video Controls Overlay - Solo si no hay error */}
            {!hasError && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={togglePlay}
                        className="flex items-center justify-center w-12 h-12 rounded-full text-white transition-colors"
                        style={{
                          backgroundColor: 'rgba(37, 99, 235, 0.8)',
                          backdropFilter: 'blur(4px)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.9)'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'rgba(37, 99, 235, 0.8)'
                        }}
                      >
                        {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
                      </button>
                      
                      <button
                        onClick={toggleMute}
                        className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-colors"
                        style={{
                          backgroundColor: 'rgba(37, 99, 235, 0.8)',
                          backdropFilter: 'blur(4px)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.9)'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'rgba(37, 99, 235, 0.8)'
                        }}
                      >
                        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                      </button>
                    </div>

                    <button
                      onClick={toggleFullscreen}
                      className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-colors"
                      style={{
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        backdropFilter: 'blur(4px)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.9)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(37, 99, 235, 0.8)'
                      }}
                    >
                      <FaExpand />
                    </button>
                  </div>
                </div>

                {/* Play Button Overlay (when paused) */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={togglePlay}
                      className="flex items-center justify-center w-20 h-20 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-2xl"
                      style={{
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        backdropFilter: 'blur(4px)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.9)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(37, 99, 235, 0.8)'
                      }}
                    >
                      <FaPlay className="ml-1 text-2xl" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <p className="text-blue-100 text-lg">
              Timeline de FELADE - Un recorrido por nuestros logros y evolución institucional
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default VideoSection