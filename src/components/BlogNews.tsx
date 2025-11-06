import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import InfoCard from "@/components/InfoCard";
import { blogPosts, newsItems, quickUpdates } from "@/constants/data";
import { Badge } from "@/components/ui/badge";

const BlogNews = () => {
  return (
    <SectionWrapper bgGradient>
      {/* Blogs Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Latest Blogs
        </h2>
        <p className="text-xl text-muted-foreground">
          Expert tips, strategies, and stories from the world of chess
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {blogPosts.map((blog, index) => (
          <Card 
            key={index}
            className="group overflow-hidden hover:shadow-glow transition-all duration-500 hover:scale-105 animate-scale-in border-0"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {blog.description}
              </p>
              <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary">
                Read More 
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* News & Quick Updates Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* News Section */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
            <Newspaper className="w-8 h-8" />
            Latest News
          </h3>
          <Card className="bg-background p-6">
            <CardContent className="p-0">
              <ul className="space-y-3">
                {newsItems.map((item, idx) => (
                  <li 
                    key={idx}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                      item.highlight ? 'bg-primary/10 border-l-4 border-primary' : 'hover:bg-muted'
                    }`}
                  >
                    <ArrowRight className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quick Updates */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-3xl font-bold mb-6 text-foreground">Quick Updates</h3>
          <div className="space-y-4">
            {quickUpdates.map((update, index) => (
              <Card key={index} className="bg-background hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="text-4xl">{update.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-foreground">{update.title}</h4>
                    <p className="text-muted-foreground">{update.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BlogNews;
