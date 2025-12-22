import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Truck, Home } from "lucide-react";
import heroImg from "@/assets/hero.png";

const HeroSection = () => {
    return (
        <section className="w-full bg-[#fafafa] px-4 py-16">
            <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-8 px-2 md:flex-row md:gap-12">
                {/* Left Content */}
                <div className="flex w-full flex-1 flex-col gap-6">
                    {/* Badge */}
                    <Badge
                        variant="outline"
                        className="w-fit border-[#ff7a3c]/20 bg-[#fff4ed] text-xs font-semibold uppercase tracking-wide text-[#ff7a3c] hover:bg-[#fff4ed]"
                    >
                        <Home className="mr-1.5 h-3 w-3" />
                        THE SPICY SENSATION
                    </Badge>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1a1a1a]">
                        Taste the
                         <span className="relative text-[#ff7a3c]">
                            Magic
                            <span className="absolute bottom-0 left-1 h-1 w-full bg-linear-to-r from-transparent via-[#ff7a3c] to-transparent opacity-60"></span>
                        </span>
                        <br />
                        in Every Bite.
                    </h1>

                    {/* Description */}
                    <p className="max-w-full md:max-w-md font-semibold text-[15px] leading-relaxed text-[#6b7280]">
                        Freshly steamed, spicy, and savory momos delivered to your doorstep
                        in minutes. Experience the authentic taste of the Himalayas with a
                        modern twist.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center">
                        <Button
                            size="lg"
                            className="w-full rounded-full bg-[#ff7a3c] text-sm font-semibold shadow-md hover:bg-[#ff6825] sm:w-auto"
                        >
                            Order Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full rounded-full border-[#e0e0e0] text-sm font-semibold text-[#1a1a1a] hover:border-[#ff7a3c] hover:text-[#ff7a3c] sm:w-auto"
                        >
                            View Menu
                        </Button>
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            <Avatar className="h-8 w-8 md:h-10 md:w-10 border-2 border-white">
                                <AvatarFallback className="bg-[#f4a261]" />
                            </Avatar>
                            <Avatar className="h-8 w-8 md:h-10 md:w-10 border-2 border-white">
                                <AvatarFallback className="bg-[#e76f51]" />
                            </Avatar>
                            <Avatar className="h-8 w-8 md:h-10 md:w-10 border-2 border-white">
                                <AvatarFallback className="bg-[#a28089]" />
                            </Avatar>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1">
                                <span className="text-xs font-bold text-[#1a1a1a]">+2k</span>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-xs text-[#fbbf24]">
                                            ⭐
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <span className="text-xs text-[#9ca3af]">Happy customers</span>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex-1 w-full mb-8 md:mb-0">
                    <Card className="relative overflow-hidden rounded-3xl py-0 border-none bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] shadow-2xl">
                        <img
                            src={heroImg}
                            alt="Steaming momos in bamboo steamer"
                            className="w-full h-64 object-cover md:h-auto"
                        />

                        {/* Delivery Badge */}
                        <Card className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white flex flex-row items-center gap-3 rounded-2xl border-none px-4 py-2 shadow-lg">
                            <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#fff4ed]">
                                <Truck size={18} className="text-[#ff7a3c]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold uppercase tracking-wide text-[#9ca3af]">
                                    DELIVERY
                                </span>
                                <span className="text-sm font-bold text-[#1a1a1a]">
                                    Under 30 Mins
                                </span>
                            </div>
                        </Card>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
