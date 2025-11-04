import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import blogStrategy from "@/assets/blog-strategy.jpg";
import blogTournament from "@/assets/blog-tournament.jpg";
import blogTraining from "@/assets/blog-training.jpg";

const BlogNews = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Opening Strategies Every Student Should Know",
      excerpt: "Master these fundamental chess openings to gain a competitive edge in your next tournament match.",
      image: blogStrategy,
      category: "Strategy",
      date: "March 1, 2025",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      id: 2,
      title: "Interview with Last Year's Champion",
      excerpt: "Exclusive insights from our defending champion on preparation, mental strength, and tournament strategy.",
      image: blogTournament,
      category: "News",
      date: "February 28, 2025",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      title: "How to Prepare Your Team for Success",
      excerpt: "Essential tips for coaches and students to maximize performance and build winning strategies.",
      image: blogTraining,
      category: "Training",
      date: "February 25, 2025",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const newsItems = [
    {
      title: "Registration Extended to March 10th",
      date: "March 2, 2025",
      type: "Announcement"
    },
    {
      title: "New Prize Categories Added for 2025",
      date: "February 27, 2025",
      type: "Update"
    },
    {
      title: "Guest Appearance by GM Anish Giri",
      date: "February 24, 2025",
      type: "Special Event"
    },
    {
      title: "Practice Sessions Open to All Participants",
      date: "February 20, 2025",
      type: "Announcement"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Blog Posts Section */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Blogs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert tips, strategies, and stories from the world of chess
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group overflow-hidden hover:shadow-glow transition-all duration-500 hover:scale-105 animate-scale-in border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  <Badge className="absolute top-4 left-4 bg-background/90 text-foreground hover:bg-background">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary">
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* News Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Latest <span className="bg-gradient-secondary bg-clip-text text-transparent">News</span>
            </h2>
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-card transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary animate-scale-in"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">
                        {item.type}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost" className="shrink-0">
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Updates */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quick <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Updates</span>
            </h2>
            <Card className="p-8 bg-gradient-card border-0 shadow-card">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl shrink-0">
                    📢
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Live Coverage</h4>
                    <p className="text-sm text-muted-foreground">
                      All championship matches will be streamed live on our website
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center text-2xl shrink-0">
                    🏆
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Trophy Ceremony</h4>
                    <p className="text-sm text-muted-foreground">
                      Awards ceremony scheduled for March 17th at 5 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl shrink-0">
                    📸
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Photo Gallery</h4>
                    <p className="text-sm text-muted-foreground">
                      Browse highlights from previous championships
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
