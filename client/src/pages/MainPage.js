import React ,{useEffect, useState} from 'react';

export default function MainPage() {

  //states fir the homefield
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [ammountInSourceCurrency, setAmmountInSourceCurrency] = useState(0);
  const [ammountInTargetCurrency, setAmmountInTargetCurrency] = useState(0);

  //handle submit method
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      date,
      setSourceCurrency,
      targetCurrency,
      ammountInSourceCurrency
    );
  };

  //get all currency names
  useEffect(()=>{
    const getCurrencyNames = async() =>{
      try{
        const response
      }
    } 
   })

  return (
    <div>
        <h1 className=" lg:mx-32 text-4xl font-bold text-green-500">Convert Your Currencies Today</h1>
        <p className=' lg:mx-32 opacity-40 py-6'>Convert Your Currencies Today is a fast, reliable, and user-friendly 
            currency conversion platform designed to help you exchange currencies 
            with ease. Whether you're traveling abroad, shopping internationally, 
            making business transactions, or simply tracking exchange rates, our tool 
            provides real-time currency conversions for over 150 world currencies.</p>

        <div className="w-full max-w-lg mx-auto px-4">
          <section>
          <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label for="date" htmlFor={date} className="block mb-2.5 text-sm font-medium text-heading">Date</label>
                <input onChange={(e) => setDate(e.target.value)} type="Date" id={date} name={date} className="relative pl-12 pr-4 py-1.5 bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white hover:border-green-100 hover:bg-white block w-full shadow-sm transition-all duration-200" required />  
              </div>
              
              <div className='mb-4'>
                <label for="source" htmlFor={sourceCurrency} className="block mb-2.5 text-sm font-medium text-heading">Source Currency</label>
                <select onChange={(e) => setSourceCurrency(e.target.value)} id={sourceCurrency} name={sourceCurrency} value={sourceCurrency} className="bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white hover:border-green-100 hover:bg-white block w-full px-4 py-3.5 shadow-sm transition-all duration-200 cursor-pointer" required>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                </select>  
              </div>

              <div className='mb-4'>
                <label for="target" htmlFor={targetCurrency} className="block mb-2.5 text-sm font-medium text-heading">Select Target Currency</label>
                <select onChange={(e) => setTargetCurrency(e.target.value)} id={targetCurrency} name={targetCurrency} value={targetCurrency} className="bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white hover:border-green-100 hover:bg-white block w-full px-4 py-3.5 shadow-sm transition-all duration-200 cursor-pointer" required>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                </select>  
              </div>

              <div className='mb-4'>
                <label for="ammount" htmlFor={ammountInSourceCurrency} className="block mb-2.5 text-sm font-medium text-heading">Enter The Ammount</label>
                <input onChange={(e) => setAmmountInSourceCurrency(e.target.value)} id={ammountInSourceCurrency} name={ammountInSourceCurrency} type="text" className="relative pl-12 pr-4 py-1.5 bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white hover:border-green-100 hover:bg-white block w-full shadow-sm transition-all duration-200" required />  
              </div>

              <button className=' bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md'>Get Your Result</button>
            </form>
          </section>
        </div>
    </div>
  )
}
