import Image from "next/image";

function StudioCard() {
  return (
    // to add custom max width
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
      <div className="studio-card group">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden object-cover rounded-lg group-hover:inline"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="studio-card group">
        <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden object-cover rounded-lg group-hover:inline"
        >
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="studio-card group">
        <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden object-cover rounded-lg group-hover:inline"
        >
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="studio-card group">
        <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden object-cover rounded-lg group-hover:inline"
        >
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="studio-card group">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden object-cover rounded-lg group-hover:inline"
        >
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default StudioCard;

// {/* <div className=" studio-card group">
// {/* whenever you want to use layout fill make sure to add position relative, width and height to parent */}
// <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
// <video
//   autoPlay
//   loop
//   playsInline
//   className="hidden object-cover rounded-lg group-hover:inline"
// >
//   <source src="/videos/disney.mp4" type="video/mp4"/>
// </video>
// </div> */}
