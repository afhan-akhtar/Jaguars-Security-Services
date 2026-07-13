import { Eye, Handshake, Radio, Shield } from "lucide-react";
import { companyInfo } from "@/lib/services";

const pillarIcons = [Shield, Eye, Radio, Handshake];

export default function PillarBar() {
  return (
    <div className="section-premium-dark border-y border-jaguar-gold/20">
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-x-8 gap-y-5 px-6 py-6 sm:max-w-7xl sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-12 sm:px-6 lg:gap-x-20 lg:px-8">
        {companyInfo.pillars.map((pillar, i) => {
          const Icon = pillarIcons[i] || Shield;
          return (
            <div
              key={pillar}
              className="flex w-full items-center gap-2.5 sm:w-auto sm:gap-3"
            >
              <div className="icon-ring-solid h-10 w-10 shrink-0">
                <Icon className="h-4 w-4 text-jaguar-black" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.18em] text-jaguar-gold-light sm:text-sm sm:tracking-[0.22em]">
                {pillar}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
