import React from 'react';

const Footer = ({ backgroundColor }: { backgroundColor: string }) => {
  return (
    <div className={`flex flex-col px-14 py-4 ${backgroundColor}`}>
      <hr className="w-full bg-black" />
      <span className="pt-2 text-lg">
        Copyright &copy;
        <span className="text-gold">Avinash Prabhakaran</span>
        2023
      </span>
    </div>
  );
};

export default Footer;
