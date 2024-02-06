import React, { useState } from 'react';

function PricingComponent() {
  const [billingType, setBillingType] = useState('month');
  const [basicPrice, setBasicPrice] = useState('19');
  const [premiumPrice, setPremiumPrice] = useState('29');
  const [proPrice, setProPrice] = useState('39');

  const handleBillingTypeChange = (type) => {
    if (type === 'month') {
      setBillingType('month');
      setBasicPrice('19');
      setPremiumPrice('29');
      setProPrice('39');
    } else if (type === 'year') {
      setBillingType('year');
      setBasicPrice('205');
      setPremiumPrice('313');
      setProPrice('421');
    }
  };

  return (
    <div className="min-h-full bg-gray-200 pb-12">
      <div className="w-full bg-slate-900 pt-16 pb-24 text-center">
        <h4 className="text-2xl text-gray-100">Choose the right plan for you</h4>
        <p className="text-sm text-gray-100 mt-2">Pricing built for businesses of all sizes. Choose package that suits your needs.</p>
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={() => handleBillingTypeChange('month')}
            className={`text-gray-800 px-4 py-2 rounded-tl-lg rounded-bl-lg bg-gray-200 ${billingType === 'month' ? 'bg-blue-300' : 'bg-gray-200'}`}
            title="Choose Monthly billing"
          >
            Monthly billing
          </button>
          <button
            onClick={() => handleBillingTypeChange('year')}
            className={`text-gray-800 px-4 py-2 rounded-tr-lg rounded-br-lg bg-gray-200 ${billingType === 'year' ? 'bg-blue-300' : 'bg-gray-200'}`}
            title="Choose Annual billing"
          >
            Annual billing
          </button>
        </div>
      </div>
      <div className="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
        <div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-4">
          <PlanCard title="Basic" price={basicPrice} billingType={billingType} />
          <PlanCard title="Premium" price={premiumPrice} billingType={billingType} />
          <PlanCard title="Pro" price={proPrice} billingType={billingType} />
          <PlanCard title="Pro" price={proPrice} billingType={billingType} />
        </div>
      </div>
    </div>
  );
}

function PlanCard({ title, price, billingType }) {
    const getFeaturesList = () => {
      switch (title.toLowerCase()) {
        case 'basic':
          return [
            'Free Setup Guidance',
            'Email Support',
            'User Management',
            'Reports',
            'Unlimited Users',
            'Data Export',
            'Automated Workflows',
            'API Access'
          ];
        case 'premium':
          return [
            'Free Setup Guidance',
            'Email Support',
            'User Management',
            'Reports',
            'Unlimited Users',
            'Data Export',
            'Automated Workflows',
            'API Access'
          ];
        case 'pro':
          return [
            'Free Setup Guidance',
            'Email Support',
            'User Management',
            'Reports',
            'Unlimited Users',
            'Data Export',
            'Automated Workflows',
            'API Access'
          ];
        default:
          return [];
      }
    };
  
    return (
      <div className="bg-white shadow-2xl rounded-lg py-4">
        <p className="text-xl text-center font-bold text-blue-600">{title}</p>
        <p className="text-center py-8">
          <span className="text-4xl font-bold text-gray-700">${price}</span>
          <span className="text-xs uppercase text-gray-500">/ {billingType}</span>
        </p>
        <ul className="border-t border-gray-300 py-8 space-y-6">
          {getFeaturesList().map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 px-8">
              <span className="bg-blue-600 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
              <span className="text-gray-600 capitalize">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center mt-6">
         
        </div>
      </div>
    );
  }
  


export default PricingComponent;
