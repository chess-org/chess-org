import { Button } from "@/components/ui/button";
import ChessInfo from "@/components/ChessInfo";
import FamousPlayers from "@/components/FamousPlayers";
import TournamentDetails from "@/components/TournamentDetails";
import heroImage from "@/assets/chess-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Interschool Chess
            </span>
            <br />
            <span className="text-foreground">Championship 2025</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Where young minds compete, strategies collide, and champions are born
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow"
            >
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 font-semibold px-8 py-6 text-lg"
            >
              View Schedule
            </Button>
          </div>
        </div>

        {/* Floating Chess Pieces */}
        <div className="absolute bottom-20 left-10 text-6xl opacity-20 animate-bounce">♔</div>
        <div className="absolute top-20 right-10 text-6xl opacity-20 animate-bounce" style={{ animationDelay: "0.5s" }}>♛</div>
      </section>

      <TournamentDetails />
      <ChessInfo />
      <FamousPlayers />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 text-9xl text-white">♟</div>
          <div className="absolute bottom-1/4 right-1/4 text-9xl text-white">♖</div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Make Your Move?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Register your school today and be part of this exciting championship
          </p>
          <Button 
            size="lg" 
            className="bg-white text-foreground hover:bg-white/90 font-semibold px-10 py-6 text-lg shadow-glow"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
