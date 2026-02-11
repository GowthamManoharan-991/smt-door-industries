import React from 'react';

export default function FormHeading(props) {
  const { text } = props;

  return (
    <div className="w-full mb-0 text-center">
      <h3 className="text-amber-500 text-xl ">
        {text}
      </h3>
      {/* Center short divider */}
      <div className="mx-auto mt-3 h-[2px] w-16 bg-white/40 rounded" />
    </div>
  );
}
