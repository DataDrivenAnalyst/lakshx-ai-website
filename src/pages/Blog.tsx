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
    id: "4",
    title: "Stop Drowning in Repetitive Tasks: 5 Signs Your Business is Ready for Process Automation",
    excerpt: "In today's fast-paced business environment, efficiency is key to staying competitive. One of the biggest productivity killers is repetitive tasks that consume time and resources without adding strategic value.",
    content: `Stop Drowning in Repetitive Tasks: 5 Signs Your Business is Ready for Process Automation
November 3, 2025

In today's fast-paced business environment, efficiency is key to staying competitive. One of the biggest productivity killers is repetitive tasks that consume time and resources without adding strategic value. Process automation can be a game-changer, freeing your team from mundane work and allowing them to focus on higher-impact activities. But how do you know when your business is ready to take the leap into automation? Here are five signs that indicate it's time to automate your processes:

1. Your Team is Overwhelmed with Manual Tasks  
If your employees spend a significant portion of their day performing repetitive tasks like data entry, report generation, or manual approvals, automation can help. It reduces human error and speeds up workflows, making your team more productive and satisfied.

2. Errors and Inconsistencies are Increasing  
Repetitive manual processes often lead to mistakes that can be costly and time-consuming to fix. If you notice a rise in errors, especially in critical operations, automation can provide consistency and accuracy, ensuring reliable outcomes every time.

3. Scaling Operations is Becoming a Challenge  
As your business grows, the volume of repetitive tasks typically increases, putting pressure on your existing systems and staff. Automation enables you to handle higher volumes without a proportional increase in labor costs, facilitating smoother growth.

4. Delays in Workflow Approval or Processing are Frequent  
Bottlenecks caused by waiting for approvals or process handoffs can slow down projects and frustrate customers. Automating these workflows accelerates turnaround times and improves transparency, so everyone knows the status in real-time.

5. Lack of Real-Time Data and Insights  
Manual processes often mean delayed or inaccurate data, making it hard to gain meaningful insights. Automation tools can collect and analyze data continuously, giving you actionable intelligence to optimize operations and make informed decisions.

Conclusion  
Process automation is not just a technological upgrade—it's a strategic move that can transform how your business operates. If you recognize these signs in your organization, it may be time to explore automation solutions to boost productivity, reduce errors, and support sustainable growth.`,
    author: "LakshX Team",
    date: "2025-11-03",
    category: "Business Automation",
    readTime: "2 min read",
    image: blog4Image
  },
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
✅ Eliminate repetitive, manual reporting tasks
✅ Improve accuracy and speed of reporting
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
    readTime: "3 min read",
    image: blog1Image
  },
  {
    id: "2", 
    title: "What do Cricket and SMBs have in common?",
    excerpt: "Innovating with data—and using insights to their advantage. Just as cricket teams use data to plan strategy, businesses can use analytics to read the game and win decisively.",
    content: `What do Cricket and SMBs have in common?
May 19, 2025

Innovating with data—and using insights to their advantage.

At the recent WAVES Summit in Mumbai, former Indian cricket captain and coach Anil Kumble shared a powerful perspective:

"Cricket has always produced data. Every ball produces millions of data points."

(Watch from [19'45" onwards](https://www.youtube.com/watch?v=WW6whsjo0N4) on YouTube) 

If you run a small or medium business, this idea should strike a chord. Every sale, lead, delay, complaint, and click your business generates is data. The question is—are you using it to your advantage?

Just as a cricket team uses pitch reports, player stats, and match conditions to plan their strategy, businesses can use business analytics to read the game, adjust mid-innings, and win decisively.

Real-world Example from Our Work

At the end of FY25, we worked with an industrial goods manufacturer who, at first glance, seemed to be on a growth track. Their customer count was up by 40% YoY, and on paper, things looked good.

But once we ran an in-depth analysis of their sales data, the true picture emerged:

Average order value had declined sharply, showing a skew toward low-value customers.
A year-on-year comparison revealed that the number of high-value customers had dropped by half—a red flag that would've gone unnoticed in standard reports.
In another layer of analysis, we found that monthly sales teams who achieved less than 30% of their targets consistently dragged down the year-end performance below 40%—creating avoidable, compounding losses.

These insights weren't visible in their ERP or Excel MIS. But they became crystal clear with business analytics.

Why Business Analysis Matters

ERPs are excellent at organizing data—they track inventory, sales, HR, finances, and more. But they don't explain trends, patterns, or risks. That's where business analytics comes in.

Business analysis helps you:

Spot what's working—and what's not.
Identify missed opportunities—like profitable customers who aren't buying anymore.
Predict future outcomes—based on trends and behaviors.
Course-correct early, just like a cricket captain adjusting field placement after the first few overs.

If You Know, You Can Act

In cricket, when you see the pitch slowing down, you change your bowling strategy. In business, if your data tells you which products are stagnating or which regions are underperforming—you have a chance to adapt before it's too late.

That's the power of business analysis. It turns unknowns into action.

Final Thought

If you're running your SMB without business analytics, it's like playing cricket blindfolded. At LakshX, we help SMBs transform their raw data into insights that lead to smarter decisions, stronger performance, and sustainable growth.

Because data alone isn't power. Insightful data is.

📞 +91 99106 35419 | 📩 info@lakshx.com

#SMBGrowth #BusinessAnalytics #CricketAndBusiness #DataForDecisions #ERPvsAnalytics #LakshXforSMBGrowth #MakeDataWork #SmallBusinessIndia #FamilyBusiness #FamilyOwned #FamilyRunBusiness #GenerationalBusiness #LegacyBusiness`,
    author: "LakshX Team",
    date: "2025-05-19",
    category: "Business Analytics",
    readTime: "3 min read",
    image: blog2Image
  },
  {
    id: "3",
    title: "ERP is not a panacea for SMBs",
    excerpt: "Many SMB owners invest in ERP systems believing they've found the magic bullet for growth. While ERP organizes data, it doesn't provide actionable insights—that's where business analysis comes in.",
    content: `ERP is not a panacea for SMBs
April 9, 2025

You have an ERP, now what?!

Many small and medium business (SMB) owners invest in Enterprise Resource Planning (ERP) systems, believing they've found the magic bullet for business growth. While ERP systems are excellent for organizing data across functions like finance, HR, and supply chain, they are not designed to offer actionable business insights. An ERP organizes your data; it doesn't tell you what that data means or how to act on it. This is where business analysis comes in.

Example from Experience: A manufacturing client we worked with had recently implemented an ERP system. While it helped streamline operations and reduce paperwork, they still struggled to answer key business questions: Which product lines are the most profitable? How can we reduce lead times? Where are we losing customers? Which customers are most valuable? The ERP system had all the data, but extracting insights required applying business analytics. By integrating data analytics tools on top of their ERP, we helped them identify patterns, reduce inventory, and increase revenue.

Why Business Analysis Matters

1. Turning Data into Insights: An ERP records transactions; business analytics transforms that data into actionable insights. For example, business analysis can show sales trends, predict demand, or highlight valuable customers.

2. Strategic Decision-Making: Analytics enables you to visualize data and make proactive decisions. You can monitor KPIs in real time, such as customer churn, profit margins, and inventory turnover, allowing you to adjust strategies quickly.

3. Understanding the "Why": An ERP can tell you what happened, but business analytics explains why it happened and recommends actionable solutions.

Misconception: ERP Alone Can Drive Growth

ERP systems help standardize processes, but they aren't designed for deep analysis. Business owners often realize after implementation that generating insights requires additional tools and expertise. Business analytics fills that gap by:

Providing dashboards with real-time insights.
Enabling advanced reporting and forecasting.
Helping visualize data for better communication and decision-making.

A Simple Analogy: Think of your ERP as a filing system. It keeps your data well-organized. Business analytics, on the other hand, is the lens that lets you zoom in on what's important, analyze trends, and guide your next move.

How to Get Started

1. Identify the Right Questions: Start by defining what insights you need—sales growth, customer trends, or supply chain optimization.

2. Integrate Analytics Tools: Layer data analytics solutions on top of your ERP for deeper analysis.

3. Upskill Your Team: Ensure your team can interpret and act on the insights generated.

Final Thought: Your ERP system is an essential tool for organizing business operations, but it's not the full picture. Business analysis is the key to unlocking the value hidden within your data and turning it into strategic actions that drive growth.

Let us help you bridge this gap—because data alone isn't power. Insightful data is. 

Connect with us at +91 99106 35419 or info@lakshx.com.`,
    author: "LakshX Team",
    date: "2025-04-09",
    category: "Business Intelligence",
    readTime: "3 min read",
    image: blog3Image
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
                              <div 
                                className="whitespace-pre-wrap leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html: post.content.replace(
                                    /\[([^\]]+)\]\(([^)]+)\)/g,
                                    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>'
                                  )
                                }}
                              />
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