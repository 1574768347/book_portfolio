import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { TimelineItem } from '../types';
import { GraduationCap, Briefcase, Users, Sprout, Award } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  school: GraduationCap,
  work: Briefcase,
  users: Users,
  sprout: Sprout,
  award: Award,
};

export const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
  return (
    <div className="relative pl-4 py-2">
      {/* Vertical Line */}
      <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gray-300 border-l border-dashed border-gray-400"></div>

      <div className="space-y-8">
        {items.map((item, index) => {
          const Icon = item.icon ? iconMap[item.icon] : Briefcase;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-8"
            >
              {/* Icon Node */}
              <div className="absolute left-0 top-1 w-5 h-5 bg-white border-2 border-ink rounded-full flex items-center justify-center z-10">
                 <div className="w-2 h-2 bg-accent rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative">
                <span className="text-xs font-bold text-gray-400 font-mono tracking-wider bg-gray-100 px-2 py-0.5 rounded-sm">
                   {item.year}
                </span>
                
                <h3 className="text-lg font-bold text-ink mt-1 leading-tight">{item.title}</h3>
                <p className="text-accent font-bold text-sm mb-2">{item.organization}</p>
                
                <ul className="space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-gray-600 text-sm leading-snug font-hand">
                      • {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};