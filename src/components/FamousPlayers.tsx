import carlsenImg from "@/assets/carlsen.jpg";
import kasparovImg from "@/assets/kasparov.jpg";
import anandImg from "@/assets/anand.jpg";

const FamousPlayers = () => {
  const players = [
    {
      name: "Magnus Carlsen",
      title: "World Champion",
      achievement: "5-time World Chess Champion",
      image: carlsenImg,
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Garry Kasparov",
      title: "Chess Legend",
      achievement: "Former World Champion & Greatest Player",
      image: kasparovImg,
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Viswanathan Anand",
      title: "The Lightning Kid",
      achievement: "First Asian World Champion",
      image: anandImg,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Chess <span className="bg-gradient-secondary bg-clip-text text-transparent">Legends</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired by the greatest minds in chess history
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t ${player.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end`}>
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-1">{player.name}</h3>
                  <p className="text-sm font-medium mb-2">{player.title}</p>
                  <p className="text-sm opacity-90">{player.achievement}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{player.name}</h3>
                <p className="text-sm text-muted-foreground">{player.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamousPlayers;
