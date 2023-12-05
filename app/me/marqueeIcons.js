import React from 'react';
import Image from "next/image";


const IconComponent = ({ src, alt }) => {
  return <Image src={src} alt={alt} style={{ width: '50px', height: '50px' }} />;
};

export default IconComponent;