function LabCategory() {
  

  return (
    <div className="min-h-full bg-gray-200 pb-12">
      <div className="w-full bg-slate-900 pt-16 pb-24 text-center">
        <h4 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Explore the right  <span className="underline decoration-blue-500">Lab Setup</span> according to your <span className="underline decoration-blue-500"> Students need</span></h4>
        <p className="text-sm text-gray-100 mt-2">Pricing built for businesses of all sizes. Choose package that suits your needs.</p>
      </div>
      <div className="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
        <div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-4">
          <PlanCard title="Alpha Lab" />
          <PlanCard title="Beta Lab" />
          <PlanCard title="Gamma Lab" />
          <PlanCard title="Delta Lab" />
        </div>
      </div>
    </div>
  );
}

function PlanCard({ title }) {
    const getFeaturesList = () => {
      switch (title) {
        case 'Alpha Lab':
          return [
            'Basic Kits',
            '3 set of Microcontroller',
            '6 set of Sensorst',
            'Electronics Hardware Tools',
            'Curated Resources, curriculum, with Manuals',
            'Teacher Training of 2 weeks',
            '3 Complimentary Student mentoring sessions',
            'Post Lab support up to 3 months',
            'Lab Upgradation at discounted price'
          ];
        case 'Beta Lab':
          return [
            'Basic Kits',
            '6 set of Microcontrollers',
            'Microprocessor & single board computer',
            'Robo car kits',
            'Battery Set with charging modules',
            'Electronics Hardware Tools',
            'Curated Resources, curriculum, with Manuals',
            'Teacher Training of 2 weeks',
            '4 Complimentary Student mentoring sessions',
            '1 paid workshop and 1 paid course free of cost',
            '1 paid evaluation free of cost',
            'Post Lab support up to 6 months',
            'Lab Upgradation at discounted price'
            
          ];
        case 'Gamma Lab':
          return [
            'Basic kits',
            '3D printer',
            '6 set of Microcontrollers',
            'Microprocessor & single board computer',
            '26 set of Sensors',
            'Robo Car kits with chassis',
            'Radio Controller Kit',
            'Battery Set with charging modules',
            'Electronics Hardware Tools',
            'Curated Resources, curriculum, with Manuals',
            'Teacher Training of 3 weeks',
            '5 Complimentary Student mentoring sessions',
            '2 paid workshops and 3 paid courses free of cost',
            '2 paid evaluation free of cost',
            'Post Lab support up to 9 months',
            'Lab Upgradation at discounted price'
          ];
          case 'Delta Lab':
          return [
            'Basic kits',
            '3D printer with filament',
            '7 set of Microcontrollers',
            'Microprocessor & single board computer',
            'Camera Module',
            'Drone kits',
            '26 set of Sensors',
            'Robo Car kits with chassis',
            'Radio Controller Kit',
            'Battery Set with charging modules',
            'Electronics Hardware Tools',
            'Curated Resources, curriculum, with Manuals',
            'Teacher Training of 3 weeks',
            '5 Complimentary Student mentoring sessions',
            '2 paid workshops and 3 paid courses free of cost',
            '2 paid evaluation free of cost',
            '1 Drone building session',
            'Post Lab support up to 9 months',
            'Lab Upgradation at discounted price'
          ];
        default:
          return ['Sorry it will upload fast '];
      }
    };
  
    return (
      <div className="bg-white shadow-2xl rounded-lg py-8">
        <p className="text-xl text-center font-bold text-red-600">{title}</p>
        <p className="text-center py-4">
          
          <span className="text-xs uppercase text-gray-500"></span>
        </p>
        <ul className="border-t border-gray-300 py-8 space-y-6">
          {getFeaturesList().map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 px-8">
              <span className="bg-gray-700 rounded-full p-1">
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
  


export default LabCategory;
