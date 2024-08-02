import Link from 'next/link';
import React from 'react';

type Props = {};

const NavBar = (props: Props) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Archives', href: '#archives' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <nav className="bg-white text-black flex items-center justify-between w-full py-4 md:py-0 px-[50px] text-lg ">
      <div className="">
        <h2 className="text-3xl font-bold">LUNGELO ZULU</h2>
      </div>
      <div className="w-full md:flex md:items-center md:w-auto ">
        <ul className="pt-4 text-base md:flex md:justify-between md:pt-0 gap-10 mx-11">
          {navItems.map((item) => (
            <li key={item.name} className="md:p-4 py-2 block">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
