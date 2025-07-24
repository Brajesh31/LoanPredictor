// import React from 'react';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-white p-6">
//       <div className="max-w-2xl mx-auto bg-white">
//         <h1 className="text-2xl font-bold mb-6">Loan Application</h1>
//         <form className="space-y-4">
//           {[
//             { label: 'Income', placeholder: 'Enter your income' },
//             { label: 'Credit Score', placeholder: 'Enter your credit score' },
//             { label: 'Dependents', placeholder: 'Number of dependents' },
//             { label: 'Loan Amount', placeholder: 'Enter loan amount' },
//             { label: 'Loan Term (months)', placeholder: 'Enter loan term' },
//           ].map(({ label, placeholder }) => (
//             <div key={label}>
//               <label className="block font-medium mb-1">{label}</label>
//               <input
//                 type="text"
//                 placeholder={placeholder}
//                 className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:outline-none"
//               />
//             </div>
//           ))}

//           {[
//             { label: 'Employment Status', options: ['Employed', 'Unemployed'] },
//             { label: 'Education', options: ['Graduate', 'Not Graduate'] },
//             { label: 'Property Area', options: ['Urban', 'Rural', 'Semiurban'] },
//             { label: 'Gender', options: ['Male', 'Female'] },
//             { label: 'Marital Status', options: ['Married', 'Single'] },
//           ].map(({ label, options }) => (
//             <div key={label}>
//               <label className="block font-medium mb-1">{label}</label>
//               <select className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:outline-none">
//                 <option value="">{`Select ${label.toLowerCase()}`}</option>
//                 {options.map((option) => (
//                   <option key={option}>{option}</option>
//                 ))}
//               </select>
//             </div>
//           ))}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700"
//           >
//             Predict Loan Approval
//           </button>

//           <div className="text-center text-sm mt-4 font-medium">
//             <p>Prediction Result</p>
//             <p className="text-green-600">Approved (Confidence: 95%)</p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Home;




import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Loan Application</h1>
        <form className="space-y-4">
          {[
            { label: 'Income', placeholder: 'Enter your income' },
            { label: 'Credit Score', placeholder: 'Enter your credit score' },
            { label: 'Dependents', placeholder: 'Number of dependents' },
            { label: 'Loan Amount', placeholder: 'Enter loan amount' },
            { label: 'Loan Term (months)', placeholder: 'Enter loan term' },
          ].map(({ label, placeholder }) => (
            <div key={label}>
              <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">{label}</label>
              <input
                type="text"
                placeholder={placeholder}
                className="w-full border rounded-md px-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none"
              />
            </div>
          ))}

          {[
            { label: 'Employment Status', options: ['Employed', 'Unemployed'] },
            { label: 'Education', options: ['Graduate', 'Not Graduate'] },
            { label: 'Property Area', options: ['Urban', 'Rural', 'Semiurban'] },
            { label: 'Gender', options: ['Male', 'Female'] },
            { label: 'Marital Status', options: ['Married', 'Single'] },
          ].map(({ label, options }) => (
            <div key={label}>
              <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">{label}</label>
              <select className="w-full border rounded-md px-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none">
                <option value="">{`Select ${label.toLowerCase()}`}</option>
                {options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700"
          >
            Predict Loan Approval
          </button>

          <div className="text-center text-sm mt-4 font-medium">
            <p className="text-gray-800 dark:text-gray-200">Prediction Result</p>
            <p className="text-green-600">Approved (Confidence: 95%)</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
