"use client";

import React from "react";
import {
  Award,
  Stethoscope,
  Home as HomeIcon,
  Users,
  Siren,
  Building2,
  Activity,
  ShieldCheck,
  HeartHandshake,
  UserCheck,
  LucideIcon,
} from "lucide-react";
import { MedicalService } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Stethoscope,
  Home: HomeIcon,
  Users,
  Siren,
  Building2,
  Activity,
  ShieldCheck,
  HeartHandshake,
  UserCheck,
};

interface ServiceCardProps {
  service: MedicalService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Stethoscope;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-slate-100 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
      <div className="space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
          <IconComponent className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
