const AboutUs = () => {
  return (
    <div className="container py-12 px-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <img 
              src="IMG_7153-removebg-preview.png" 
              alt="Troll Mascot" 
              className="w-full max-w-[300px] mx-auto rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <div className="bg-white/5 p-6 rounded-lg mb-6">
              <p className="text-lg leading-relaxed italic">
                "I've never coded anything before, but after seeing what Satoshi did, it inspired me to build off his creation and make it better. That's when I came up with the idea to create a money, but specifically for internet trolls. I quickly found other like-minded people to work with, and as the project developed, our goals became more ambitious. That's how we arrived at the TROL coin we have today: a decentralized, borderless, restrictionless, ultra-sound money but also a platform for Decentralized Apps, other crypto-currencies, and Non-fungible tokens via the TROL Virtual Machine. Although we don't make this claim directly ourselves, others have called TROL the SOL-killer."
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <p className="text-lg italic mb-2">"The unexamined coin is not worth hodling" - Socrates</p>
              <p className="text-sm text-gray-300">This famous quote inspired us to look really hard at how we developed TROL coin and make it good. It's good because we made it.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;