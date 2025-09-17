import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center px-6 md:px-16 lg:px-36">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster='/poster.jpg'
      className="absolute top-[-26px] left-0 w-full h-full object-cover -z-10"
      >
        <source src="/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10"></div>

      {/* Content */}
      <div className="flex flex-col items-start justify-center gap-4 text-white">
      
        <h1 className="text-5xl md:text-[70px] md:leading-[1.1] font-semibold max-w-110">
         Avatar <br /> Fire and Ash
        </h1>

        <div className="flex items-center gap-4 text-gray-300">
          <span>Action | Adventure | Sci-Fi</span>
          <div className="flex items-center gap-1">
            <CalendarIcon className="size-4.5" /> 2025
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="size-4.5" /> 3h 12m
          </div>
        </div>

        <p className="max-w-md text-gray-300">
        "Avatar: Fire and Ash" follows Jake, Neytiri, and their family as they face new dangers on Pandora. The story introduces the Ash People, a fiery Na’vi clan, while humanity’s return threatens balance. Epic battles, emotional struggles, and stunning worlds await.
        </p>

        <button
          onClick={() => navigate('/movies')}
          className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
        >
          Explore Movies
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
