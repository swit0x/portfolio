import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText";
import SplitText from "./components/SplitText";
import BlurText from "./components/BlurText";
import AnimatedContent from "./components/AnimatedContent";
import ShapeGrid from "./components/ShapeGrid";
import GradientText from "./components/GradientText";
import CircularText from "./components/CircularText";



export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full">
      <ShapeGrid
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#FFFFF"
        hoverFillColor="#C6F10E"
        shape="square"
        hoverTrailAmount={0}
      />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
          <div className="flex items-center h-full">
            <div className="flex flex-col gap-4">
              <AnimatedContent
                  distance={180}
                  direction="vertical"
                  reverse={false}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.1}
                  delay={0}
                  >
        <div className="flex flex-col gap-1">
<SplitText
 text="Hello, I'm Ahmed Rashidy &nbsp;" 
 className="text-3xl font-semibold text-start text-white"
 delay={50}
 duration={1.25}
 ease="power3.out"
 splitType="chars"
 from={{ opacity: 0, y: 40 }}
 to={{ opacity: 1, y: 0 }}
 threshold={0.1}
 rootMargin="-100px"
 textAlign="left"
/>

<SplitText
 text="Full Stack Web Developer"
 className="text-3xl font-semibold text-start text-[#C6F10E]"
 delay={75}
 duration={1.25}
 ease="power3.out"
 splitType="chars"
 from={{ opacity: 0, y: 40 }}
 to={{ opacity: 1, y: 0 }}
 threshold={0.1}
 rootMargin="-100px"
 textAlign="left"
/>
          </div>
          <br></br>
          
                    <div className="flex items-center gap-2">

                    <h1 className="text-2xl text-white font-semibold ">I'm ready for &nbsp;</h1>
                    <RotatingText
                      texts={['Brand Strategy', 'Web Design', 'Web Development', 'AI Development']}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 rounded-lg text-1xl font-semibold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />

                    </div>
    
              </AnimatedContent>
           


        
          <BlurText
          text="Strategic Branding, Websites & Marketing Consultant, Google Certified creative
                entrepreneur with 7+ years of experience driving digital transformation for startups
                and SMEs. Proven track record in branding, business development, and marketing
                strategy. Dedicated to delivering analytical, leadership-driven solutions that scale
                organizations and exceed commercial targets."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-xl mb-8 text-white"
        />
       <div className="flex items-center"> 
        <a href="mailto:therawswitch@gmail.com">
        <GradientText
        colors={["#C6F10E","#65eaec","#9a84a9"]}
        animationSpeed={13.5}
        showBorder
        className="px-6 py-3 rounded-lg"
      >
        Consult me 
      </GradientText>
      </a>
      </div>
        
          </div>
          </div>
          </div>
          <div className="col-span-6 relative">
          <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
          <CircularText
            text="FUSION*STUDIO*ID"
            onHover="speedUp"
            spinDuration={20}
            className="absolute top-10 right-10"
          />
          </div>
        </div>


      </div>
    </div>
  );
}
