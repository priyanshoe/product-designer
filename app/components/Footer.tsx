// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="font-[Bold] w-full px-6 lg:px-12  pb-8 lg:pb-2 ">
      <div className=" flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        
        {/* Links (on right for desktop, top for mobile) */}
        <div className=" uppercase text-sm md:text-base border-[#9c9c9c] max-sm:border-b-1 py-6 lg:gap-12  flex flex-wrap justify-between md:justify-end md:gap-6 order-1 md:order-2">
          <a href="#" >LinkedIn</a>
          <a href="#" >X/Twitter</a>
          <a href="#" >Instagram</a>
          <a href="#" >Youtube</a>
        </div>

        {/* 2 Headings (on left for desktop, below links in mobile) */}
        <div className="text-base flex justify-between gap-8 w-full md:w-auto order-2 md:order-1">
          <h2>&copy; 2025</h2>
          <h2>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/New_York' })} ET</h2>
        </div>

      </div>
    </footer>
  );
}
