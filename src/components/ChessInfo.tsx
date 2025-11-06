import SectionWrapper from "@/components/SectionWrapper";
import InfoCard from "@/components/InfoCard";
import { chessBenefits, chessTips } from "@/constants/data";

const ChessInfo = () => {
  return (
    <SectionWrapper
      title="Why Play Chess?"
      subtitle="Discover the incredible benefits of playing the game of kings"
      bgGradient
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {chessBenefits.map((benefit, index) => (
          <InfoCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            className="animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` } as any}
          />
        ))}
      </div>

      <div className="bg-background rounded-lg p-8 shadow-card">
        <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Quick Chess Tips</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {chessTips.map((tip, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-5xl mb-3">{tip.icon}</div>
              <h4 className="font-bold text-lg mb-2 text-foreground">{tip.text}</h4>
              <p className="text-muted-foreground text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ChessInfo;
