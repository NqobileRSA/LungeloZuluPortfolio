import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

type Props = {};

const Archives = (props: Props) => {
  return (
    <div id="archives">
      <SectionTitle title="Archives" />
      <div className="grid">
        {/* 1st row */}
        <div className="grid grid-cols-6 grid-rows-1">
          <div
            style={{
              background: `url("/radio.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
          <div
            className="col-span-2"
            style={{
              background: `url("/bluegray.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
          <div
            className="col-start-4"
            style={{
              background: `url("/wearhouz.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
          <div
            className="col-start-5"
            style={{
              background: `url("/themba.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
          <div
            className="col-start-6"
            style={{
              background: `url("/cusuin.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
        </div>
        {/* 2nd row */}
        <div className="grid grid-cols-5 grid-rows-1 gap-0">
          <div
            style={{
              background: `url("/skyf.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
          <div
            className="col-span-2"
            style={{
              background: `url("/swag.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
          <div
            className="col-span-2 col-start-4"
            style={{
              background: `url("/bittercure.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
        </div>
        {/* 3rd row */}
        <div className="grid grid-cols-4 grid-rows-1 gap-0">
          <div
            style={{
              background: `url("/combo.png")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
          <div
            style={{
              background: `url("/vibe.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
          <div
            style={{
              background: `url("/half.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
          <div
            style={{
              background: `url("/cusuin.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
        </div>
        {/* 4th row */}
        <div className="grid grid-cols-1 grid-rows-1 gap-0">
          <div
            style={{
              background: `url("/yellow.png")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // padding: '20px',
              // width: '400px',
              height: '1200px',
            }}
          />
        </div>
        {/* 5th row */}
        <div className="grid grid-cols-5 grid-rows-1 gap-0">
          <div
            className="col-span-2"
            style={{
              background: `url("/pink.png")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
          <div
            className="col-start-3"
            style={{
              background: `url("/fb.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
          <div
            className="col-span-2 col-start-4"
            style={{
              background: `url("/k1.png")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // padding: '20px',
              // width: '400px',
              height: '400px',
            }}
          />
        </div>
        {/* 6th row */}
        <div className="grid grid-cols-1 grid-rows-1 gap-0">
          <div
            style={{
              background: `url("/SUNDAY.jpg")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // padding: '20px',
              // width: '400px',
              height: '1200px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Archives;
