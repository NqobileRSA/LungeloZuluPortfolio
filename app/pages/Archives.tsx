import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

type Props = {};

const Archives = (props: Props) => {
  const imageStyle =
    'bg-cover bg-center bg-no-repeat w-full h-64 sm:h-80 md:h-96 lg:h-[400px]';

  return (
    <div id="archives" className="container mx-auto">
      <SectionTitle title="Archives" />
      <div className="grid gap-4 p-4">
        {/* 1st row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          <div className={`${imageStyle} bg-[url('/radio.jpg')]`} />
          <div
            className={`${imageStyle} bg-[url('/bluegray.jpg')] sm:col-span-2`}
          />
          <div className={`${imageStyle} bg-[url('/wearhouz.jpg')]`} />
          <div className={`${imageStyle} bg-[url('/themba.jpg')]`} />
          <div className={`${imageStyle} bg-[url('/cusuin.jpg')]`} />
        </div>

        {/* 2nd row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className={`${imageStyle} bg-[url('/skyf.jpg')]`} />
          <div
            className={`${imageStyle} bg-[url('/swag.jpg')] sm:col-span-2`}
          />
          <div
            className={`${imageStyle} bg-[url('/bittercure.jpg')] sm:col-span-2`}
          />
        </div>

        {/* 3rd row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div className={`${imageStyle} bg-[url('/combo.png')]`} />
          <div className={`${imageStyle} bg-[url('/vibe.jpg')]`} />
          <div className={`${imageStyle} bg-[url('/half.jpg')]`} />
          <div className={`${imageStyle} bg-[url('/cusuin.jpg')]`} />
        </div>

        {/* 4th row */}
        <div className="grid grid-cols-1 gap-2">
          <div
            className={`${imageStyle} bg-[url('/yellow.png')] h-[300px] sm:h-[600px] md:h-[900px] lg:h-[1200px]`}
          />
        </div>

        {/* 5th row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div
            className={`${imageStyle} bg-[url('/pink.png')] sm:col-span-2`}
          />
          <div className={`${imageStyle} bg-[url('/fb.jpg')]`} />
          <div className={`${imageStyle} bg-[url('/k1.png')] sm:col-span-2`} />
        </div>

        {/* 6th row */}
        <div className="grid grid-cols-1 gap-2">
          <div
            className={`${imageStyle} bg-[url('/SUNDAY.jpg')] h-[300px] sm:h-[600px] md:h-[900px] lg:h-[95vh]`}
          />
        </div>
      </div>
    </div>
  );
};

export default Archives;
