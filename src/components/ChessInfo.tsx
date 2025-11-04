import { Trophy, Brain, Users, Target } from "lucide-react";

const ChessInfo = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Enhance Critical Thinking",
      description: "Chess develops problem-solving skills and strategic thinking abilities"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Improve Focus",
      description: "Playing chess enhances concentration and attention span"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Build Sportsmanship",
      description: "Learn respect, patience, and gracious winning and losing"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Boost Confidence",
      description: "Success in chess builds self-esteem and decision-making confidence"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Why Play Chess?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chess is more than a game—it's a tool for personal growth and mental development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{benefit.title}</h3>
              <p className="text-muted-foreground text-center text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold mb-6 text-center">Quick Chess Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">♔</div>
              <h4 className="font-semibold mb-2">Control the Center</h4>
              <p className="text-sm text-muted-foreground">
                Occupy and control the center squares for better piece mobility
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">♜</div>
              <h4 className="font-semibold mb-2">Develop Your Pieces</h4>
              <p className="text-sm text-muted-foreground">
                Bring your knights and bishops out early in the game
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">♛</div>
              <h4 className="font-semibold mb-2">Protect Your King</h4>
              <p className="text-sm text-muted-foreground">
                Castle early to ensure your king's safety
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChessInfo;
