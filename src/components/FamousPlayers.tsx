import SectionWrapper from "@/components/SectionWrapper";
import { chessPlayers } from "@/constants/data";

const FamousPlayers = () => {
  return (
    <SectionWrapper
      title="Chess Legends"
      subtitle="Learn from the greatest minds in chess history"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {chessPlayers.map((player, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-glow transition-all duration-500 animate-scale-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="aspect-[3/4] relative">
              <img 
                src={player.image} 
                alt={player.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${player.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-1">{player.name}</h3>
                <p className="text-lg font-semibold mb-2 opacity-90">{player.title}</p>
                <p className="text-sm opacity-80">{player.achievement}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FamousPlayers;
