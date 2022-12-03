import React from 'react';

function Header() {
  return (
    <Card bgcolor="light" textcolor="text-red-400" label="Header" subtext="nothing" />
  );
}

function Footer() {
  return (
    <Card bgcolor="light" textcolor="text-red-400" label="Footer" subtext="nothing" />
  );
}

function Card(props) {
  return (
    <div className="mt-4">
      <div className={`flex items-start rounded-xl bg-white p-4 shadow-lg ${props.bgcolor === 'light' ? 'bg-white' : 'bg-black' }`}>
        <div className="ml-4">
          <button className={`font-semibold ${props.textcolor}`}>{props.label}</button>
          <p className="mt-2 text-sm text-gray-500">{props.subtext}</p>
        </div>
      </div>
    </div>
  );
}

function LocationNotEnabled(){
  return (
    <React.Fragment>
      <h1>Please enable Location</h1>
    </React.Fragment>
  );
}

export {Footer, Header, Card, LocationNotEnabled};
