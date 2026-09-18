export default function TrendingMarquee() {
  // ডামি মুভি পোস্টারের তালিকা (Cinematic Aspect Ratio)
  const POSTERS = [
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=400&auto=format&fit=crop",
  ];

  // লুপটিকে স্মুথ করার জন্য একই অ্যারেকে ডাবল করে দেওয়া হয়েছে
  const SCROLLING_ITEMS = [...POSTERS, ...POSTERS, ...POSTERS];

  return (
    <div className="relative flex w-full overflow-hidden bg-[#141414] py-2">
      
      {/* বাম ও ডান পাশে হালকা ডার্ক ফেড ইফেক্ট (যাতে মনে হয় পোস্টারগুলো অন্ধকার থেকে বের হচ্ছে) */}
      
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#141414] to-transparent"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#141414] to-transparent"></div>

      <div className="animate-scroll flex w-max gap-4 px-4 sm:gap-6">
        {SCROLLING_ITEMS.map((imgUrl, index) => (
          <div 
            key={index} 
            className="group relative h-48 w-32 shrink-0 overflow-hidden rounded-lg sm:h-64 sm:w-44 cursor-pointer"
          >
            <img
              src={imgUrl}
              alt="Movie Poster"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Hover করলে হালকা লাল বর্ডার ও শ্যাডো আসবে */}
            <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-colors duration-300 group-hover:border-red-600/80 group-hover:bg-red-600/10"></div>
          </div>
        ))}
      </div>
      
    </div>
  );
}