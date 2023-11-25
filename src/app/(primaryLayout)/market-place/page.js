import MarketplaceCard from "@/components/Marketplace/MarketplaceCard";
import MarketplaceHeader from "@/components/Marketplace/MarketplaceHeader";

const Marketplace = () => {
  return (
    <div className="p-6 space-y-6">
      <MarketplaceHeader />
      <MarketplaceCard />
    </div>
  );
};

export default Marketplace;
