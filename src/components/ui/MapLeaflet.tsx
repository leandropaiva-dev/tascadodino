"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapLeafletProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  className?: string;
}

export function MapLeaflet({
  latitude,
  longitude,
  zoom = 15,
  className = "",
}: MapLeafletProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Inicializar o mapa
    const map = L.map(mapRef.current, {
      center: [latitude, longitude],
      zoom: zoom,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    // Forçar z-index baixo no container do mapa
    if (mapRef.current) {
      const mapContainer = mapRef.current.querySelector('.leaflet-pane');
      if (mapContainer instanceof HTMLElement) {
        mapContainer.style.zIndex = '1';
      }
    }

    mapInstanceRef.current = map;

    // Adicionar tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Criar ícone customizado com o logo
    const customIcon = L.divIcon({
      className: "custom-map-marker",
      html: `
        <div class="flex flex-col items-center">
          <div class="relative w-12 h-12 bg-brown-dark rounded-full shadow-lg flex items-center justify-center border-4 border-white">
            <img src="/logo-dino.svg" alt="Tasca do Dino" class="w-8 h-8 brightness-0 invert" />
          </div>
          <div class="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white -mt-1"></div>
        </div>
      `,
      iconSize: [48, 56],
      iconAnchor: [24, 56],
    });

    // Adicionar marcador
    L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [latitude, longitude, zoom]);

  return <div ref={mapRef} className={`w-full h-full relative z-40 ${className}`} />;
}
