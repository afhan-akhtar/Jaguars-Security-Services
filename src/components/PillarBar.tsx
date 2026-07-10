import { Eye, Handshake, Radio, Shield } from "lucide-react";
import { companyInfo } from "@/lib/services";

const pillarIcons = [Shield, Eye, Radio, Handshake];

export default function PillarBar() {
  return (
    <div className="section-premium-dark border-y border-jaguar-gold/20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-4 py-6 sm:px-6 lg:gap-x-20 lg:px-8">
        {companyInfo.pillars.map((pillar, i) => {
          const Icon = pillarIcons[i] || Shield;
          return (
            <div key={pillar} className="flex items-center gap-3">
              <div className="icon-ring-solid h-10 w-10">
                <Icon className="h-4 w-4 text-jaguar-black" />
              </div>
              <span className="text-xs font-bold tracking-[0.22em] text-jaguar-gold-light sm:text-sm">
                {pillar}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
