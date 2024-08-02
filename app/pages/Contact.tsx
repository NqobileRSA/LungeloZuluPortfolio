import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <SectionTitle title="Contact info" />
      <div className="bg-black text-white p-6 font-serif">
        <div className="text-center space-y-2">
          <p className="text-xl">Tel: 081 267 7005</p>
          <p className="text-xl">Email: ndumisolungelo.zulu@gmail.com</p>
          <p className="text-xl">Base: Katlehong,Gauteng</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
