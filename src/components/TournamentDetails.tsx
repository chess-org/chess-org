import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Award } from "lucide-react";

const TournamentDetails = () => {
  const details = [
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Date",
      value: "March 15-17, 2025"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Venue",
      value: "Central Sports Complex"
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Participants",
      value: "50+ Schools"
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Prize Pool",
      value: "$5,000+"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">♔</div>
        <div className="absolute bottom-10 right-10 text-9xl">♛</div>
        <div className="absolute top-1/2 left-1/4 text-7xl">♜</div>
        <div className="absolute top-1/3 right-1/4 text-7xl">♞</div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tournament Information
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join the most prestigious interschool chess championship of the year
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {details.map((detail, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                {detail.icon}
              </div>
              <p className="text-sm text-white/70 mb-1">{detail.label}</p>
              <p className="text-xl font-bold text-white">{detail.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Tournament Format</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5</div>
              <p className="text-sm opacity-80">Rounds</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <p className="text-sm opacity-80">Age Categories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30</div>
              <p className="text-sm opacity-80">Minutes per Game</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              className="bg-white text-foreground hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-glow"
            >
              Register Your School Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentDetails;
