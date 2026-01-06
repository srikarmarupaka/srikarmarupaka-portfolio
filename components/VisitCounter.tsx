import React, { useEffect, useState } from 'react';

const VisitCounter = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // YOUR GOOGLE SCRIPT URL
  const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL; 

  useEffect(() => {
    const fetchCount = async () => {
      // Check if this user has already been counted in this session
      const hasVisited = sessionStorage.getItem('visit_counted');
      
      // Decide which action to take
      const actionType = hasVisited ? "get_count" : "visit";

      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          body: JSON.stringify({ action: actionType })
        });
        
        const data = await response.json();
        
        if (data.status === 'success') {
          setCount(data.count);
          
          // If this was a new visit, mark them as counted now
          if (!hasVisited) {
            sessionStorage.setItem('visit_counted', 'true');
          }
        }
      } catch (error) {
        console.error("Counter Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  // Format to 6 digits (e.g., 000451)
  const formattedCount = count.toString().padStart(6, '0');

  return (
    <div className="flex items-center gap-2 font-mono text-xs text-gray-500 mt-4 md:mt-0">
      <span>NET_TRAFFIC:</span>
      
      {loading ? (
        <span className="animate-pulse text-[#00ff41]">CALCULATING...</span>
      ) : (
        <div className="flex bg-black border border-white/10 px-2 py-1 rounded shadow-[0_0_10px_rgba(0,255,65,0.1)]">
           {formattedCount.split('').map((digit, index) => (
             <span 
               key={index} 
               className={`text-[#00ff41] font-bold ${index < 3 ? 'opacity-50' : 'opacity-100'}`}
             >
               {digit}
             </span>
           ))}
        </div>
      )}
    </div>
  );
};

export default VisitCounter;