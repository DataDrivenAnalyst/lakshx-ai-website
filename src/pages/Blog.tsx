import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// Import blog images
import blog1Image from "@/assets/blog-1.jpg";
import blog2Image from "@/assets/blog-2.jpg";
import blog3Image from "@/assets/blog-3.jpg";
import blog4Image from "@/assets/blog-4.jpg";
import blog5Image from "@/assets/blog-5.jpg";
import blog6Image from "@/assets/blog-6.jpg";
import blog7Image from "@/assets/blog-7.jpg";
import blog8Image from "@/assets/blog-8.jpg";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  source?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Small Business: AI-Powered Growth Strategies",
    excerpt: "Discover how artificial intelligence is revolutionizing small business operations and creating unprecedented growth opportunities.",
    content: "In today's rapidly evolving business landscape, artificial intelligence is no longer a luxury reserved for large corporations. Small and medium-sized businesses are leveraging AI to streamline operations, enhance customer experiences, and drive sustainable growth. From automated customer service to predictive analytics, AI tools are becoming more accessible and affordable for SMBs.",
    author: "LakshX Team",
    date: "2024-12-09",
    category: "AI Strategy",
    readTime: "5 min read",
    image: blog1Image,
    source: "https://www.linkedin.com/feed/update/urn:li:activity:7355119970478907392"
  },
  {
    id: "2", 
    title: "Data-Driven Decision Making: A Game Changer for SMBs",
    excerpt: "Learn how small businesses can harness the power of data analytics to make informed decisions and stay competitive.",
    content: "Data-driven decision making is transforming how small businesses operate. By collecting, analyzing, and acting on data insights, SMBs can optimize their operations, understand customer behavior, and identify new market opportunities. This approach leads to more effective strategies and improved business outcomes.",
    author: "LakshX Team",
    date: "2024-11-11",
    category: "Data Analytics",
    readTime: "4 min read",
    image: blog2Image,
    source: "https://www.linkedin.com/feed/update/urn:li:activity:7330126855175393281"
  },
  {
    id: "3",
    title: "Transforming Customer Experience with Smart Analytics",
    excerpt: "Explore how analytics can help businesses understand their customers better and deliver personalized experiences.",
    content: "Customer experience has become a key differentiator in today's competitive market. Smart analytics tools enable businesses to track customer interactions, preferences, and behaviors across multiple touchpoints. This data helps create personalized experiences that drive customer satisfaction and loyalty.",
    author: "LakshX Team", 
    date: "2024-10-24",
    category: "Customer Analytics",
    readTime: "6 min read",
    image: blog3Image,
    source: "https://www.linkedin.com/feed/update/urn:li:activity:7315619160519036928"
  },
  {
    id: "4",
    title: "The ROI Revolution: Measuring Success in the Digital Age",
    excerpt: "Understand how to measure and optimize return on investment for your digital transformation initiatives.",
    content: "Measuring ROI in the digital age requires new metrics and methodologies. Traditional financial metrics are no longer sufficient to capture the full value of digital investments. Businesses need to consider factors like customer lifetime value, operational efficiency gains, and competitive advantages.",
    author: "LakshX Team",
    date: "2024-09-17",
    category: "Business Intelligence", 
    readTime: "7 min read",
    image: blog4Image,
    source: "https://www.linkedin.com/feed/update/urn:li:activity:7292797344343830528"
  },
  {
    id: "5",
    title: "AI, Data Analytics, and Data Science: Understanding the Ecosystem",
    excerpt: "A comprehensive guide to understanding the interconnected world of AI, data analytics, and data science for businesses.",
    content: "The modern business landscape is increasingly driven by data. Understanding the relationship between AI, data analytics, and data science is crucial for businesses looking to leverage these technologies effectively. Each discipline plays a unique role in transforming raw data into actionable business insights.",
    author: "Kalaat Mak Consulting",
    date: "2024-08-15",
    category: "Data Science",
    readTime: "8 min read", 
    image: blog5Image,
    source: "https://kalaatmakconsulting.com/explore-2/blog-ai-data-analytics-data-science/"
  },
  {
    id: "6",
    title: "Sales Analytics: Boosting Revenue Through Data Insights",
    excerpt: "Learn how sales analytics can help identify opportunities, optimize processes, and drive revenue growth.",
    content: "Sales analytics transforms raw sales data into actionable insights that drive revenue growth. By analyzing sales patterns, customer behavior, and market trends, businesses can optimize their sales processes, identify high-value opportunities, and improve conversion rates.",
    author: "Kalaat Mak Consulting",
    date: "2024-07-22",
    category: "Sales Analytics",
    readTime: "6 min read",
    image: blog6Image,
    source: "https://kalaatmakconsulting.com/explore-2/blog-sales-analytics/"
  },
  {
    id: "7", 
    title: "Customer Segmentation: The Key to Targeted Marketing Success",
    excerpt: "Discover how data analytics can help you segment customers effectively and create targeted marketing campaigns.",
    content: "Customer segmentation using data analytics enables businesses to understand their diverse customer base and create targeted marketing strategies. By grouping customers based on behavior, preferences, and demographics, businesses can deliver more relevant experiences and improve marketing ROI.",
    author: "Kalaat Mak Consulting",
    date: "2024-06-18",
    category: "Customer Analytics",
    readTime: "5 min read",
    image: blog7Image,
    source: "https://kalaatmakconsulting.com/explore-2/blog-data-analytics-customer-segmentation/"
  },
  {
    id: "8",
    title: "Data Analytics vs MIS: Understanding the Difference",
    excerpt: "Clarify the distinctions between data analytics and management information systems to make informed technology decisions.",
    content: "While both data analytics and Management Information Systems (MIS) deal with data, they serve different purposes in modern business operations. Understanding their unique roles, capabilities, and applications helps businesses choose the right approach for their specific needs and objectives.",
    author: "Kalaat Mak Consulting", 
    date: "2024-05-25",
    category: "Business Intelligence",
    readTime: "4 min read",
    image: blog8Image,
    source: "https://kalaatmakconsulting.com/explore-2/blog-data-analytics-vs-mis/"
  }
];

const categories = ["All", "AI Strategy", "Data Analytics", "Customer Analytics", "Business Intelligence", "Data Science", "Sales Analytics"];

export default function Blog() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              LakshX Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, strategies, and expert perspectives on AI, data analytics, and business intelligence for small and medium-sized businesses.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="ghost" className="w-full group/btn">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights on AI, data analytics, and business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}