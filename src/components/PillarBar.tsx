import { Eye, Handshake, Radio, Shield } from "lucide-react";
import { companyInfo } from "@/lib/services";

const pillarIcons = [Shield, Eye, Radio, Handshake];

export default function PillarBar() {
  return (
    <div className="border-y border-jaguar-gold/15 bg-jaguar-charcoal">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 py-5 sm:px-6 lg:gap-x-16 lg:px-8">
        {companyInfo.pillars.map((pillar, i) => {
          const Icon = pillarIcons[i] || Shield;
          return (
            <div
              key={pillar}
              className="flex items-center gap-3 text-white/80"
            >
              <div className="icon-ring h-10 w-10">
                <Icon className="h-4 w-4 text-jaguar-gold-bright" />
              </div>
              <span className="text-xs font-bold tracking-[0.22em] text-jaguar-gold-bright sm:text-sm">
                {pillar}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
