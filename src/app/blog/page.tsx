import Link from 'next/link';
import Image from 'next/image';

const dummyPosts = [
  {
    id: 1,
    title: "Understanding Your Medical Records: A Patient's Guide",
    excerpt: "Navigating your medical history can be complex. We break down what you need to know to take control of your healthcare journey.",
    date: "July 10, 2026",
    category: "Guidance",
    image: "/blog-1.webp"
  },
  {
    id: 2,
    title: "How to Prepare for Your International Treatment",
    excerpt: "Traveling for care? Here is our comprehensive checklist to ensure your transition is smooth and stress-free.",
    date: "July 05, 2026",
    category: "Travel & Care",
    image: "/blog-2.webp"
  },
  {
    id: 3,
    title: "The Importance of Holistic Recovery Support",
    excerpt: "Why healing goes beyond the hospital bed, and how our coordinators support your wellbeing long-term.",
    date: "June 28, 2026",
    category: "Recovery",
    image: "/blog-3.webp"
  }
];

export default function BlogPage() {
  return (
    <main className="bg-[#F9F6F1] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-sm font-bold tracking-widest text-[#C5A059] uppercase mb-4">Our Blog</h1>
          <h2 className="text-5xl font-serif text-[#172744]">Insights & Stories</h2>
        </div>

       {/* Featured Post */}
<div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#172744]/10 mb-16 flex flex-col md:flex-row items-center">
  <div className="w-full md:w-1/2 h-80 relative">
    <Image 
      src="/feture-blog.webp" 
      alt="Featured blog post" 
      fill 
      className="object-cover"
    />
  </div>
  <div className="p-10 md:w-1/2">
    <span className="text-[#C5A059] font-bold text-sm tracking-widest">FEATURED</span>
    <h3 className="text-3xl font-serif mt-2 mb-4 text-[#172744]">The Future of Personalized Healthcare Coordination</h3>
    <p className="text-stone-600 mb-6">Discover how technology and compassion are merging to create better patient outcomes worldwide.</p>
    <Link href="#" className="text-[#172744] font-semibold hover:text-[#C5A059] transition">Read More →</Link>
  </div>
</div>

       {/* Grid of Posts */}
<div className="grid md:grid-cols-3 gap-8">
  {dummyPosts.map((post, index) => (
    <article key={post.id} className="bg-white p-6 rounded-2xl shadow-sm border border-[#172744]/5 hover:shadow-md transition flex flex-col">
      {/* Container with 'relative' for Image fill */}
      <div className="h-48 w-full rounded-xl mb-6 relative overflow-hidden">
        <Image 
          src={`/blog-${index + 1}.webp`} // This looks for blog-1.jpg, blog-2.jpg, etc.
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      
      <span className="text-[#C5A059] text-xs font-bold uppercase tracking-wider">{post.category}</span>
      <h4 className="text-xl font-serif text-[#172744] mt-2 mb-3">{post.title}</h4>
      <p className="text-stone-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
      
      <div className="flex justify-between items-center mt-auto">
        <span className="text-stone-400 text-xs">{post.date}</span>
        <Link href="#" className="text-[#172744] font-semibold text-sm hover:underline">Read</Link>
      </div>
    </article>
  ))}
</div>
      </div>
    </main>
  );
}