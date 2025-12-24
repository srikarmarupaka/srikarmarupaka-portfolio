import React, { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, isSameDay } from 'date-fns';
import emailjs from '@emailjs/browser';
import 'react-day-picker/dist/style.css';

const Scheduler = () => {
  const [step, setStep] = useState(1); // 1: Date, 2: Time, 3: Form
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState(null);
  const [userDetails, setUserDetails] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('IDLE');

  const [busySlots, setBusySlots] = useState<string[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);

  const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  // Initialize EmailJS with public key (if provided)
  useEffect(() => {
    const pk = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (pk) {
      try {
        // emailjs.init is optional; if not available this will be ignored
        // @ts-ignore
        emailjs.init(pk);
      } catch (err) {
        // no-op
      }
    }
  }, []);

  // --- Logic Helpers ---

  // --- 1. Fetch Availability when Date Changes ---
  useEffect(() => {
    if (selectedDate) {
      const checkAvailability = async () => {
        setIsLoadingSlots(true);
        setBusySlots([]); // Reset previous busy slots
        try {
          const response = await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify({
              action: "check", // Tell script to check slots
              date: format(selectedDate, 'yyyy-MM-dd')
            })
          });
          const result = await response.json();
          if (result.status === 'success') {
            console.log("Busy Slots:", result.busySlots);
            setBusySlots(result.busySlots);
          }
        } catch (error) {
          console.error("Failed to check availability", error);
        } finally {
          setIsLoadingSlots(false);
        }
      };
      checkAvailability();
    }
  }, [selectedDate]);

  // --- 2. Generate Slots (Filter Past + Booked) ---
  const generateTimeSlots = () => {
    if (!selectedDate) return [];

    const slots = [];
    const now = new Date();
    const isToday = isSameDay(selectedDate, now);

    for (let hour = 8; hour <= 20; hour++) {
      // Check :00 (On the hour)
      const dateOnHour = new Date(selectedDate);
      dateOnHour.setHours(hour, 0, 0, 0);
      let timeStr = format(dateOnHour, 'hh:mm a');

      // Only push if not today OR (if today, time must be in future)
      if ((!isToday || dateOnHour > now) && !busySlots.includes(timeStr)) {
        slots.push(timeStr);
      }

      // Check :30 (Half hour) - Skip if it's 8 PM (20:00) to end exactly at 8
      if (hour !== 20) {
        const dateHalfHour = new Date(selectedDate);
        dateHalfHour.setHours(hour, 30, 0, 0);
        timeStr = format(dateHalfHour, 'hh:mm a');

        if ((!isToday || dateHalfHour > now) && !busySlots.includes(timeStr)) {
          slots.push(timeStr);
        }
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleNext = () => {
    if (step === 1 && selectedDate) setStep(2);
    if (step === 2 && selectedTime) setStep(3);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setStatus('SENDING');

    try {
      // 1. Call your Google Apps Script to create the Event & Link
      // Replace with your actual Script URL from Step 1
      
      const response = await fetch(scriptURL, {
        method: "POST",
        // mode: "no-cors" is often needed for Google Scripts, but prevents reading response.
        // For this specific setup, we use standard POST. If CORS fails, we use a workaround.
        body: JSON.stringify({
          name: userDetails.name,
          email: userDetails.email,
          // CHANGE 1: Send ISO format for the script to parse easily
          date: format(selectedDate, 'yyyy-MM-dd'), // Outputs "2025-12-25"
          time: selectedTime
        })
      });

      const result = await response.json();

      if (result.status === "success") {
        // 2. Link Created! Now send the EmailJS with the link.
        const templateParams = {
            name: userDetails.name,
            email: userDetails.email,
            date: format(selectedDate, 'PPP'),
            time: selectedTime,
            meet_link: result.meetLink // <--- PASSING THE LINK HERE
        };

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setStatus('SUCCESS');
      } else {
        throw new Error("Calendar Error");
      }

    } catch (error) {
      console.error("Booking Failed", error);
      setStatus('ERROR');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-black text-white p-6 border border-white/10 hover:border-[#00ff41] rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.15)] relative min-h-[400px] flex flex-col">
      
      {/* --- Progress Bar (Header) --- */}
      {/* <div className="flex justify-between mb-8 text-xs font-mono text-gray-500 border-b border-white/10 pb-4">
        <span className={step >= 1 ? "text-[#00ff41] font-bold" : ""}>01 DATE</span>
        <span className="text-white/20">-----</span>
        <span className={step >= 2 ? "text-[#00ff41] font-bold" : ""}>02 TIME</span>
        <span className="text-white/20">-----</span>
        <span className={step >= 3 ? "text-[#00ff41] font-bold" : ""}>03 CONFIRM</span>
      </div> */}

      {/* --- STEP 1: Select Date --- */}
      {step === 1 && (
        <div className="flex-1 flex flex-col items-center animate-fade-in">
          <h3 className="text-xl font-bold mb-4 text-[#00ff41] font-mono">&gt; SELECT_DATE</h3>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="bg-zinc-900/50 rounded-md p-4 border border-white/10"
            disabled={{ before: new Date() }}
            modifiersClassNames={{
              selected: 'bg-[#00ff41] text-black font-bold',
              today: 'text-[#00ff41] font-bold'
            }}
            styles={{
              caption: { color: '#00ff41' },
              head_cell: { color: 'white' },
              cell: { color: '#cccccc' }
            }}
          />
        </div>
      )}

      {/* --- STEP 2: Select Time --- */}
      {step === 2 && (
        <div className="flex-1 flex flex-col animate-fade-in">
          <h3 className="text-xl font-bold mb-4 text-[#00ff41] font-mono text-center">
            &gt; {format(selectedDate, 'MMM dd')} // SELECT_TIME
          </h3>
          {timeSlots.length === 0 ? (
             <div className="text-center text-gray-400 mt-10 font-mono">
               <p>NO_SLOTS_AVAILABLE_TODAY.</p>
               <p className="text-xs mt-2">Please select a future date.</p>
             </div>
          ) : (
            <div className="grid grid-cols-3 gap-3 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 rounded border text-sm font-mono transition-all
                    ${selectedTime === time 
                      ? 'bg-[#00ff41] text-black border-[#00ff41] font-bold shadow-[0_0_10px_#00ff41]' 
                      : 'bg-transparent border-white/20 text-gray-400 hover:border-[#00ff41] hover:text-[#00ff41]'
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* --- STEP 3: Form & Confirm --- */}
      {step === 3 && (
        <div className="flex-1 flex flex-col animate-fade-in">
          <h3 className="text-xl font-bold mb-6 text-[#00ff41] font-mono text-center">&gt; INITIALIZE_UPLINK</h3>
          
          {status === 'SUCCESS' ? (
            <div className="text-center my-auto flex flex-col items-center justify-center py-6">
               {/* <div className="text-5xl mb-4">✅</div> */}
               <div className="relative w-24 h-24 mb-4">
        
        {/* Outer Rotating Ring (Scanning Effect) */}
        <div className="absolute inset-0 border-4 border-dashed border-[#00ff41]/30 rounded-full animate-[spin_4s_linear_infinite]"></div>
        <div className="absolute inset-2 border-2 border-dashed border-[#00ff41]/60 rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>

        {/* The Checkmark SVG */}
        <svg 
          viewBox="0 0 52 52" 
          className="w-full h-full stroke-[#00ff41] stroke-[4] fill-none drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]"
        >
          {/* Animated Path: Draws the check */}
          <path 
            d="M14.1 27.2l7.1 7.2 16.7-16.8" 
            className="animate-draw-check" 
            strokeDasharray="48" 
            strokeDashoffset="48"
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
               <h4 className="text-white font-bold text-xl">UPLINK ESTABLISHED</h4>
               <p className="text-gray-400 text-sm mt-2">Check your comms channel.</p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-xs text-[#00ff41] mb-1 font-mono">USER_ID</label>
                <input 
                  type="text" 
                  value={userDetails.name}
                  onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                  required
                  className="w-full bg-black border border-white/20 rounded p-3 text-white focus:border-[#00ff41] outline-none"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block text-xs text-[#00ff41] mb-1 font-mono">COMM_CHANNEL</label>
                <input 
                  type="email" 
                  value={userDetails.email}
                  onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                  required
                  className="w-full bg-black border border-white/20 rounded p-3 text-white focus:border-[#00ff41] outline-none"
                  placeholder="Email"
                />
              </div>
              
              {/* <div className="bg-zinc-900 p-4 rounded border border-white/5 font-mono text-sm mt-4">
                 <p className="text-gray-400">Target Date: <span className="text-[#00ff41]">{format(selectedDate, 'PPP')}</span></p>
                 <p className="text-gray-400">Target Time: <span className="text-[#00ff41]">{selectedTime}</span></p>
              </div> */}

              <p className="bg-zinc-900 p-4 rounded border border-white/5 font-mono text-sm mt-4">
                  <span className="label text-[#00ff41]">TARGET_DATE:</span> {format(selectedDate, 'PPP')}<br />
                  <span className="label text-[#00ff41]">TARGET_TIME:</span> {selectedTime}<br />
                  <span className="label text-[#00ff41]"> You will be known soon by the COMM_CHANNEL provided.</span>
              </p>
              
            </form>
          )}
        </div>
      )}

      {/* --- Navigation Footer --- */}
      {status !== 'SUCCESS' && (
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-between">
          
          {/* Back Button */}
          <button 
            onClick={handleBack}
            disabled={step === 1}
            className={`px-6 py-2 rounded text-sm font-mono border border-white/20 hover:bg-white/10 transition-colors
              ${step === 1 ? 'opacity-0 cursor-default' : 'text-gray-300'}
            `}
          >
            &lt; BACK
          </button>

          {/* Next / Confirm Button */}
          {step < 3 ? (
            <button 
              onClick={handleNext}
              disabled={(step === 1 && !selectedDate) || (step === 2 && !selectedTime)}
              className="px-6 py-2 bg-[#00ff41] text-black font-bold rounded text-sm font-mono hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              NEXT &gt;
            </button>
          ) : (
            <button 
              onClick={handleBooking}
              disabled={status === 'SENDING' || !userDetails.name || !userDetails.email}
              className="px-6 py-2 bg-[#00ff41] text-black font-bold rounded text-sm font-mono hover:bg-white disabled:opacity-50 transition-colors"
            >
              {status === 'SENDING' ? 'SENDING...' : 'CONFIRM'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Scheduler;