import React from 'react';
import { siteConfig } from '../config/site';
import { Users, BookOpen, Car, Moon, Coffee } from 'lucide-react';

export const VibesServices: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'friends':
        return <Users className="w-5 h-5 text-[#184E37]" />;
      case 'work':
        return <BookOpen className="w-5 h-5 text-[#184E37]" />;
      case 'takeaway':
        return <Car className="w-5 h-5 text-[#184E37]" />;
      case 'night':
        return <Moon className="w-5 h-5 text-[#184E37]" />;
      default:
        return <Coffee className="w-5 h-5 text-[#184E37]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#F4EFE6] text-[#1A1714] border-b border-[#E2DACD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12 text-right">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D261C] mb-3">
            المكان معمول عشانك
          </h2>
          <p className="text-sm sm:text-base text-[#524B45] leading-relaxed">
            صممنا كافيه Tree House ليكون محطة مريحة على طريق البدرشين السريع، سواء عايز تقعد أو تاخد قهوتك في طريقك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 bg-[#FCFAF7] border border-[#E2DACD] rounded-lg text-right"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] border border-[#E2DACD] flex items-center justify-center mb-4">
                {getIcon(pillar.id)}
              </div>

              <h3 className="text-lg font-bold text-[#0D261C] mb-2">
                {pillar.titleAr}
              </h3>

              <p className="text-xs sm:text-sm text-[#524B45] leading-relaxed">
                {pillar.descriptionAr}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
