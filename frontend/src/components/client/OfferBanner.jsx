import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import offerImg from "@/assets/offer.png";

const OfferBanner = () => {
  const [copied, setCopied] = useState(false);
  const promoCode = "MAGIC50";

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    toast.success("Promo code copied!");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="w-full bg-[#fafafa] px-4 py-6 md:py-8">
      <div className="mx-auto max-w-7xl">
        <Card className="relative overflow-hidden rounded-2xl md:rounded-3xl border-none p-0 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] shadow-2xl">
          <div className="grid grid-cols-1 gap-0 min-h-[450px] md:min-h-[500px] lg:grid-cols-2 lg:h-[500px]">
            {/* Left Content */}
            <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 md:gap-6 lg:p-12 relative z-10">
              {/* Limited Offer Badge */}
              <Badge className="w-fit rounded-full bg-[#ff7a3c] px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-white hover:bg-[#ff7a3c]">
                LIMITED OFFER
              </Badge>

              {/* Heading */}
              <div className="space-y-1 sm:space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white lg:text-5xl">
                  Flat <span className="text-[#ff7a3c]">50% OFF</span>
                </h2>
                <p className="text-3xl sm:text-4xl font-bold leading-tight text-white lg:text-5xl">
                  on your first 3
                </p>
                <p className="text-3xl sm:text-4xl font-bold leading-tight text-white lg:text-5xl">
                  orders!
                </p>
              </div>

              {/* Promo Code */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm text-[#9ca3af]">Use code:</span>
                <div className="flex items-center gap-2 rounded-lg border border-[#333] bg-[#1a1a1a] px-3 py-1.5 sm:px-4 sm:py-2">
                  <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#ff7a3c]">
                    {promoCode}
                  </span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-[#9ca3af] hover:text-white"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <Button
                  size="lg"
                  className="rounded-full bg-white px-6 py-2 sm:px-8 text-xs sm:text-sm font-bold text-[#1a1a1a] hover:bg-[#f0f0f0]"
                >
                  Claim Offer
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] order-first lg:order-last">
              <img
                src={offerImg}
                alt="Delicious burger with sides"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/80 lg:hidden"></div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default OfferBanner;
