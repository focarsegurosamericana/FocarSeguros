import {
  Plane,
  Car,
  Bike,
  Truck,
  HeartPulse,
  Caravan,
  CarTaxiFront,
  Home,
  type LucideIcon,
} from "lucide-react";

export type InsuranceType = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const insuranceTypes: InsuranceType[] = [
  {
    slug: "viagem",
    title: "Seguro Viagem",
    description: "Assistência médica e tranquilidade em qualquer destino.",
    icon: Plane,
  },
  {
    slug: "carro",
    title: "Seguro Auto",
    description: "Proteção completa para o seu carro, todos os dias.",
    icon: Car,
  },
  {
    slug: "moto",
    title: "Seguro Moto",
    description: "Cobertura sob medida para andar mais seguro.",
    icon: Bike,
  },
  {
    slug: "frota",
    title: "Seguro Frota",
    description: "Gestão simplificada para a frota da sua empresa.",
    icon: Truck,
  },
  {
    slug: "vida",
    title: "Seguro de Vida",
    description: "Segurança financeira para quem você mais ama.",
    icon: HeartPulse,
  },
  {
    slug: "utilitario",
    title: "Seguro Utilitário",
    description: "Proteção para vans, picapes e veículos de trabalho.",
    icon: Caravan,
  },
  {
    slug: "app",
    title: "Seguro para Motorista de App",
    description: "Cobertura especial para quem roda por aplicativo.",
    icon: CarTaxiFront,
  },
  {
    slug: "residencial",
    title: "Seguro Residencial",
    description: "Sua casa protegida contra os imprevistos do dia a dia.",
    icon: Home,
  },
];
