import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { tournamentInfo, tournamentFormat } from "@/constants/data";

const TournamentDetails = () => {
  return (
    <section className="py-20 px-4 bg-gradient-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl text-white">♟</div>
        <div className="absolute bottom-10 right-10 text-9xl text-white">♜</div>
        <div className="absolute top-1/2 left-1/3 text-7xl text-white">♞</div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tournament Information
          </h2>
          <p className="text-xl opacity-90">
            Everything you need to know about the championship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tournamentInfo.map((detail, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <detail.icon className="w-12 h-12 mx-auto mb-4" />
                <p className="text-sm opacity-80 mb-2">{detail.label}</p>
                <p className="text-xl font-bold">{detail.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Tournament Format</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {tournamentFormat.map((item, index) => (
              <div key={index} className="text-center text-white animate-fade-in" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                <div className="text-5xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">{item.value}</div>
                <p className="text-lg opacity-90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <Button 
            size="lg" 
            className="bg-white text-foreground hover:bg-white/90 font-semibold px-10 py-6 text-lg shadow-glow"
          >
            Register Your School Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TournamentDetails;
