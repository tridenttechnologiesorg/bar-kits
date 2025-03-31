
export interface Author {
    id: string;
    name: string;
    avatar: string;
    bio: string;
    socialLinks: {
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    };
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    category: string;
    tags: string[];
    date: string;
    authorId: string;
    slug: string;
  }
  
  export const authors: Author[] = [
    {
      id: "author1",
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      bio: "Travel enthusiast and photography lover. Always seeking the next adventure.",
      socialLinks: {
        twitter: "https://twitter.com/alexj",
        instagram: "https://instagram.com/alexj",
        linkedin: "https://linkedin.com/in/alexj"
      }
    },
    {
      id: "author2",
      name: "Samantha Lee",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      bio: "Fashion writer with a passion for sustainable style and trend forecasting.",
      socialLinks: {
        twitter: "https://twitter.com/samlee",
        instagram: "https://instagram.com/samlee"
      }
    },
    {
      id: "author3",
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      bio: "Tech blogger and podcast host focusing on emerging technologies and digital trends.",
      socialLinks: {
        twitter: "https://twitter.com/marcuschen",
        linkedin: "https://linkedin.com/in/marcuschen"
      }
    }
  ];
  
  export const blogPosts: BlogPost[] = [
    {
      id: "post1",
      title: "Get to your dream now destinations with Travel Pro",
      excerpt: "Discover how Travel Pro is revolutionizing the way we explore dream destinations around the world.",
      content: `
        <p>Travel has always been about discovery, about pushing boundaries and finding new horizons. With Travel Pro, that journey becomes even more seamless and enriching.</p>
        
        <p>Imagine landing in a new country with a personalized itinerary that balances must-see attractions with hidden local gems. That's what Travel Pro offers - a blend of advanced AI technology with human expertise to craft the perfect travel experience.</p>
        
        <h2>Why Travel Pro is Different</h2>
        
        <p>Unlike traditional travel agencies or standard booking platforms, Travel Pro uses your preferences, travel history, and even social media activity to understand what would make a trip special for <em>you</em>.</p>
        
        <p>Their network of local experts provides insights that you simply can't get from guidebooks or typical tourist recommendations. These are people who live and breathe the culture of your destination.</p>
        
        <h2>Sustainability at its Core</h2>
        
        <p>What makes Travel Pro truly stand out is their commitment to sustainable tourism. Each trip is designed to minimize environmental impact while maximizing positive contributions to local economies.</p>
        
        <p>From carbon-offset transportation options to partnerships with community-based tourism initiatives, Travel Pro ensures that your journey benefits both you and the places you visit.</p>
        
        <h2>The Future of Travel</h2>
        
        <p>As we emerge from a period where travel was restricted, there's a new appreciation for the privilege of exploring our world. Travel Pro is at the forefront of this more mindful approach to travel.</p>
        
        <p>Their innovative use of technology, combined with genuine respect for destinations and travelers alike, points to a bright future for those who wander with purpose.</p>
      `,
      featuredImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
      category: "Travel",
      tags: ["travel", "adventure", "technology"],
      date: "Sep 05, 2022",
      authorId: "author1",
      slug: "dream-destinations-travel-pro"
    },
    {
      id: "post2",
      title: "The Fashion Revolution: Sustainable Trends Taking Over",
      excerpt: "How sustainable fashion is reshaping the industry and influencing consumer choices worldwide.",
      content: `
        <p>Fashion is no longer just about looking good—it's about feeling good about the impact of your style choices. The sustainable fashion movement has evolved from a niche interest to a powerful force shaping the future of the industry.</p>
        
        <h2>Redefining Luxury</h2>
        
        <p>Today's conscious consumers are redefining what luxury means. It's less about brand names and more about brand values: ethical production, transparent supply chains, and ecological responsibility.</p>
        
        <p>Luxury fashion houses that have historically resisted change are now introducing sustainable lines and practices, recognizing that this is not merely a trend but a fundamental shift in consumer expectations.</p>
        
        <h2>Technology Meets Tradition</h2>
        
        <p>Innovative materials are at the heart of sustainable fashion. From fabrics made of pineapple leaves (Piñatex) to mushroom leather (Mylo), science is providing alternatives that reduce environmental impact without compromising on quality or aesthetics.</p>
        
        <p>At the same time, there's renewed interest in traditional techniques that have inherent sustainability: natural dyeing, hand weaving, and repair skills that extend the life of garments.</p>
        
        <h2>The Circular Economy</h2>
        
        <p>Perhaps the most significant shift is the move toward circularity. The linear "take-make-dispose" model is giving way to systems where materials and products remain in use through resale, rental, repurposing, and recycling.</p>
        
        <p>Platforms facilitating secondhand purchasing are growing exponentially, challenging the notion that fashion must always be new to be desirable.</p>
        
        <h2>Individual Impact</h2>
        
        <p>While industry-wide changes are crucial, individual choices matter too. By buying less but better, caring properly for garments, and supporting brands committed to positive change, consumers become active participants in the fashion revolution.</p>
        
        <p>The future of fashion looks not only more sustainable but more creative, diverse, and thoughtful—a style evolution that goes far beyond aesthetics.</p>
      `,
      featuredImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Fashion",
      tags: ["fashion", "sustainability", "trends"],
      date: "Aug 22, 2022",
      authorId: "author2",
      slug: "fashion-revolution-sustainable-trends"
    },
    {
      id: "post3",
      title: "How brands dictate the vision",
      excerpt: "The subtle and powerful ways that brands shape our perceptions and consumer behaviors.",
      content: `
        <p>In a world saturated with media and messaging, brands have become more than just products or companies—they're powerful shapers of culture and perception.</p>
        
        <h2>The Psychology of Branding</h2>
        
        <p>Successful brands don't just sell products; they sell identities, values, and worldviews. Through carefully crafted visual languages, narratives, and experiences, they create emotional connections that influence how we see ourselves and our place in society.</p>
        
        <p>This psychological dimension of branding goes far beyond rational consumer decision-making. It taps into deeper human needs for belonging, status, and self-expression.</p>
        
        <h2>Curated Reality</h2>
        
        <p>Brands increasingly curate our experience of reality. From Instagram filters that match brand aesthetics to sponsored content that blurs the line between entertainment and advertising, we consume brand-mediated versions of the world.</p>
        
        <p>Even our physical environments—retail spaces, restaurants, hotels—are designed as brand experiences, using architecture, sound, scent, and technology to immerse us in particular visions.</p>
        
        <h2>The Digital Acceleration</h2>
        
        <p>Digital transformation has amplified brand influence. Algorithms serve us content aligned with our previous choices, creating echo chambers that reinforce brand loyalties and worldviews.</p>
        
        <p>Virtual and augmented reality promise even more immersive brand experiences, where the line between the real and the branded becomes increasingly blurred.</p>
        
        <h2>Reclaiming Agency</h2>
        
        <p>Understanding how brands shape perception is the first step toward more conscious consumption. Media literacy, critical thinking, and intentional consumption habits help us engage with brands on our own terms.</p>
        
        <p>The most thoughtful brands recognize this desire for agency and build transparency and user participation into their models, creating collaborative rather than manipulative relationships with their audiences.</p>
        
        <p>In the ongoing dialogue between brands and consumers, awareness is our most valuable currency.</p>
      `,
      featuredImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
      category: "Fashion",
      tags: ["branding", "marketing", "psychology"],
      date: "Jul 15, 2022",
      authorId: "author2",
      slug: "how-brands-dictate-vision"
    },
    {
      id: "post4",
      title: "The Rise of AI in Creative Industries",
      excerpt: "Exploring how artificial intelligence is transforming creative processes and enabling new forms of expression.",
      content: `
        <p>Artificial intelligence is no longer just the domain of data scientists and tech companies. It has entered the creative sphere, challenging our understanding of imagination, originality, and the nature of art itself.</p>
        
        <h2>Collaboration Rather Than Replacement</h2>
        
        <p>The most exciting developments in AI and creativity come from collaboration between human creators and intelligent systems. Rather than replacing artists, writers, and musicians, AI is becoming a powerful tool that extends human creative capabilities.</p>
        
        <p>From AI-assisted music composition to generative design in architecture, these partnerships are producing works that neither humans nor machines could create alone.</p>
        
        <h2>New Aesthetic Frontiers</h2>
        
        <p>AI doesn't just help create traditional art forms more efficiently—it opens up entirely new aesthetic possibilities. By analyzing vast datasets of cultural production and identifying patterns invisible to human perception, AI can suggest novel combinations and approaches.</p>
        
        <p>The emergence of GAN (Generative Adversarial Network) art is perhaps the most visible example, creating uncanny, dreamlike images that feel simultaneously familiar and alien.</p>
        
        <h2>Democratizing Creation</h2>
        
        <p>As AI creative tools become more accessible, they have the potential to democratize creative production. People without years of technical training can use AI assistants to express their ideas in sophisticated ways.</p>
        
        <p>This accessibility raises questions about the value of technical skill in creative fields and could lead to a greater emphasis on concept, curation, and creative direction.</p>
        
        <h2>Ethical Considerations</h2>
        
        <p>The rise of AI in creative fields brings important ethical questions. Issues of copyright, attribution, bias in training data, and environmental impact of computation all require thoughtful navigation.</p>
        
        <p>Creating frameworks that respect the contributions of human creators whose work trains AI systems, while still allowing innovation to flourish, is one of the central challenges of this emerging field.</p>
        
        <p>As we move forward, the most valuable perspective may be one that neither uncritically celebrates nor rejects AI creativity, but engages thoughtfully with its complex implications for culture and society.</p>
      `,
      featuredImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
      category: "Technology",
      tags: ["AI", "creativity", "digital art"],
      date: "Jun 30, 2022",
      authorId: "author3",
      slug: "ai-creative-industries"
    },
    {
      id: "post5",
      title: "A place where fashion is",
      excerpt: "Exploring the evolving relationship between physical spaces and fashion experiences in the digital age.",
      content: `
        <p>Fashion has always had a complex relationship with space. From the grand salons of Parisian couture houses to the democratized spaces of department stores and the intimate privacy of our own closets, where fashion exists shapes how we experience it.</p>
        
        <h2>The Digital Disruption</h2>
        
        <p>The rise of e-commerce and social media has profoundly altered fashion's spatial dimension. Physical limitations of inventory and geography have given way to potentially infinite digital showrooms accessible from anywhere with an internet connection.</p>
        
        <p>This shift has democratized access to fashion information and products, but it has also flattened some of the sensory richness of fashion experience—the touch of fabrics, the subtle fall of a garment, the social ritual of shared shopping.</p>
        
        <h2>The New Physical</h2>
        
        <p>In response to digitization, physical fashion spaces are being reinvented. Retail stores are becoming more experiential, focusing less on inventory and more on creating memorable environments that communicate brand values and build community.</p>
        
        <p>Pop-up installations, immersive fashion exhibitions, and concept stores blur the boundaries between retail, art, and entertainment, offering experiences that can't be replicated online.</p>
        
        <h2>Hybrid Realities</h2>
        
        <p>The most innovative fashion spaces now exist at the intersection of physical and digital. Augmented reality fitting rooms, virtual showrooms with physical outposts, and digital garments that can be "worn" in social media spaces all point to a hybrid future.</p>
        
        <p>These developments don't simply replace one spatial paradigm with another—they multiply the possibilities for how and where fashion can exist.</p>
        
        <h2>Personal Spaces</h2>
        
        <p>Perhaps the most significant but least discussed fashion space is the most intimate: our own wardrobes and the daily act of dressing. How we organize, care for, and interact with our clothing in private shapes our relationship with fashion as much as any public space.</p>
        
        <p>As concepts like capsule wardrobes and mindful consumption gain popularity, these personal fashion spaces are being reconsidered with new attention to intention and sustainability.</p>
        
        <p>In all these evolving spaces—digital, physical, public, private, and hybrid—fashion continues to be a powerful medium through which we express identity and build connection.</p>
      `,
      featuredImage: "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      category: "Fashion",
      tags: ["fashion", "retail", "digital experience"],
      date: "May 18, 2022",
      authorId: "author2",
      slug: "place-where-fashion-is"
    }
  ];
  
  export const getAuthorById = (id: string): Author | undefined => {
    return authors.find(author => author.id === id);
  };
  
  export const getPostsByCategory = (category: string): BlogPost[] => {
    return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
  };
  
  export const getPostsByTag = (tag: string): BlogPost[] => {
    return blogPosts.filter(post => post.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
  };
  
  export const getPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find(post => post.slug === slug);
  };
  
  export const getRecentPosts = (count: number = 3): BlogPost[] => {
    // Sort by date (newest first) and take the specified count
    return [...blogPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, count);
  };
  
  export const getFeaturedPosts = (): BlogPost[] => {
    // For this demo, we'll just return the first 3 posts as "featured"
    return blogPosts.slice(0, 3);
  };
  
  export const searchPosts = (query: string): BlogPost[] => {
    const lowerCaseQuery = query.toLowerCase();
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(lowerCaseQuery) || 
      post.excerpt.toLowerCase().includes(lowerCaseQuery) || 
      post.content.toLowerCase().includes(lowerCaseQuery) ||
      post.category.toLowerCase().includes(lowerCaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
    );
  };
  
  export const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  export const tags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));