import React from 'react';
import * as Icons from 'lucide-react';

const DynamicIcon = ({ name, className = '', size = 20 }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    // Return standard fallback icon
    const Fallback = Icons.HelpCircle;
    return <Fallback className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
};

export default DynamicIcon;
