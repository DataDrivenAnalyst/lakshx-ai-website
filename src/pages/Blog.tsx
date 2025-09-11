import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, ArrowRight, User } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useState } from "react";

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
    title: "AI Automation As A Service",
    excerpt: "Introducing AIAaaS for SMBs - transforming operational chaos into clarity through intelligent automation workflows that eliminate manual tasks and enable faster decision-making.",
    content: `Introducing #AIAaaS for SMBs

You've heard of SaaS. But here's what's next: AI Automation as a Service (AIAaaS).

In a world where decisions must be made fast and with precision, small and medium businesses can no longer afford to waste hours—or days—just making sense of their data. Especially when that data lives across dozens of platforms and comes in hundreds of formats.

________________________________________

The Real Problem

Take the case of a mid-sized FMCG company that sells across multiple e-commerce platforms. Every month, they struggle to consolidate and analyze massive volumes of tertiary sales and ad spend data to inform their pricing and marketing decisions.

Here are just a few of the questions they struggle to answer in time:
• What product should we promote on which platform this month?
• Which products are trending in which regions?
• Which ad campaigns actually worked—and when?

Now imagine this complexity across hundreds of SKUs, listed with inconsistent naming conventions, spread across multiple marketplaces like Amazon, Flipkart, BigBasket, and more. Manually harmonizing all this data used to take months, often delaying critical decisions and costing them missed market opportunities.

________________________________________

Enter AIAaaS – AI Automation as a Service

Now, with our custom-built AIAaaS solution, their reality has changed:
• Every week, over 500 files of raw, messy data are automatically harmonized, validated, and analyzed in under an hour.
• A clean, smart Ecommerce Performance Dashboard is delivered by Monday 9 AM, just in time for the management's 10:30 AM strategy huddle.
• AI Agents and ML models work in the background to standardize SKUs, track campaign performance, provide insights and even flag anomalies in ad spend or regional sales.

That's the power of automation infused with intelligence. No more messy spreadsheets. No more guessing games. Just insights—served fresh, every week.

________________________________________

Why AIAaaS Matters for SMBs

Whether you're in FMCG, manufacturing, distribution, retail, or real estate, your business is generating data every day. But are you using it? Are your teams spending more time collecting data—or analyzing it?

AI Automation enables you to:
✅ Eliminate repetitive, manual tasks
✅ Improve accuracy and speed of operations
✅ Free up your team for strategic thinking
✅ Enable better, faster decision-making

________________________________________

Final Word

You don't need to hire a large tech team or buy expensive AI platforms. With AIAaaS, we bring intelligent automation as a service—tailored to your business needs and your data challenges.

At LakshX, we specialize in building AI and ML-powered automation workflows that turn operational chaos into clarity for SMBs.

Because data doesn't create value. Actionable data does.

📞 +91 99106 35419 | 📩 info@lakshx.com

#AIAaaS #BusinessAutomation #DataThatWorks #AIforSMBs #DataToDecisions #LakshX #IndiaAI #AICollaboration #MadeInIndia #AIIndia #SMBGrowth #FutureOfWork #MSME`,
    author: "LakshX Team",
    date: "2025-07-27",
    category: "Business Automation",
    readTime: "6 min read",
    image: blog1Image
  },
  {
    id: "2", 
    title: "What do Cricket and SMBs have in common?",
    excerpt: "Innovating with data—and using insights to their advantage. Just as cricket teams use data to plan strategy, businesses can use analytics to read the game and win decisively.",
    content: "At the recent WAVES Summit in Mumbai, former Indian cricket captain and coach Anil Kumble shared a powerful perspective: 'Cricket has always produced data. Every ball produces millions of data points.' If you run a small or medium business, this idea should strike a chord. Every sale, lead, delay, complaint, and click your business generates is data. The question is—are you using it to your advantage? We worked with an industrial goods manufacturer who seemed to be on a growth track with 40% YoY customer growth. But our analysis revealed the true picture: Average order value had declined sharply, high-value customers had dropped by half, and monthly sales teams achieving less than 30% of targets were creating compounding losses. These insights weren't visible in their ERP or Excel MIS, but became crystal clear with business analytics. Business analysis helps you spot what's working, identify missed opportunities, predict future outcomes, and course-correct early. At LakshX, we help SMBs transform their raw data into insights that lead to smarter decisions, stronger performance, and sustainable growth.",
    author: "LakshX Team",
    date: "2024-05-19",
    category: "Business Analytics",
    readTime: "5 min read",
    image: blog2Image
  },
  {
    id: "3",
    title: "ERP is not a panacea for SMBs",
    excerpt: "Many SMB owners invest in ERP systems believing they've found the magic bullet for growth. While ERP organizes data, it doesn't provide actionable insights—that's where business analysis comes in.",
    content: "Many small and medium business (SMB) owners invest in Enterprise Resource Planning (ERP) systems, believing they've found the magic bullet for business growth. While ERP systems are excellent for organizing data across functions like finance, HR, and supply chain, they are not designed to offer actionable business insights. An ERP organizes your data; it doesn't tell you what that data means or how to act on it. This is where business analysis comes in. A manufacturing client we worked with had recently implemented an ERP system. While it helped streamline operations and reduce paperwork, they still struggled to answer key business questions: Which product lines are the most profitable? How can we reduce lead times? Where are we losing customers? Which customers are most valuable? The ERP system had all the data, but extracting insights required applying business analytics. By integrating data analytics tools on top of their ERP, we helped them identify patterns, reduce inventory, and increase revenue. Business analysis turns data into insights, enables strategic decision-making, and explains the 'why' behind what happened. Your ERP system is an essential tool for organizing business operations, but it's not the full picture. Business analysis is the key to unlocking the value hidden within your data and turning it into strategic actions that drive growth.",
    author: "LakshX Team",
    date: "2025-04-09",
    category: "Business Intelligence",
    readTime: "5 min read",
    image: blog3Image
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
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            className="w-full group/btn"
                            onClick={() => setSelectedPost(post)}
                          >
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">{post.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="aspect-video overflow-hidden rounded-lg">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                              </div>
                              <Badge variant="secondary">{post.category}</Badge>
                              <span>{post.readTime}</span>
                            </div>
                            <div className="prose prose-lg max-w-none">
                              <p className="whitespace-pre-wrap leading-relaxed">{post.content}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
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