import TestimonialCard from "./TestimonialCard/TestimonialCard";

const TestimonialCards = () => {
    return (
        <div className="grid grid-cols-12 gap-8">
            <TestimonialCard
                comment={'“We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.”'}
                clientName={'-Brand Director at a Tech Startup'}>
            </TestimonialCard>
            <TestimonialCard
                comment={'“adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!”'}
                clientName={'– Head of Growth at Tech Startup'}>
            </TestimonialCard>
            <TestimonialCard
                comment={'“We’ve tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!”'}
                clientName={'– Ecommerce Manager at Home Décor Brand'}>
            </TestimonialCard>
            <TestimonialCard
                comment={'“What impressed me most was the real-time optimization. adTask’s intelligent agents just keep refining our campaigns—our ad spend has never worked harder!”'}
                clientName={'– Digital Strategist at SaaS Company'}>
            </TestimonialCard>
            <TestimonialCard
                comment={'“adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers.”'}
                clientName={'– Social Media Lead at Non-Profit Organization'}>
            </TestimonialCard>
            <TestimonialCard
                comment={'“We’ve seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!”'}
                clientName={'– Social Media Manager at a Fitness Brand'}>
            </TestimonialCard>
        </div>
    );
};

export default TestimonialCards;