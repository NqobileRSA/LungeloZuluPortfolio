import React from 'react';

type Props = {
  title: string;
};

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center w-full my-8">
      <div className="flex-grow h-px bg-gray-300"></div>
      <h2 className="mx-4 text-2xl font-bold text-gray-800 uppercase">
        {title}
      </h2>
      <div className="flex-grow h-px bg-gray-300"></div>
    </div>
  );
};

export default SectionTitle;
