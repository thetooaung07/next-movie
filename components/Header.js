import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
// import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/dist/client/router";

function Header() {
  const router = useRouter();

  return (
    <div className="sticky bg-[#040714] top-0 z-[1000] h-[72px] flex items-center px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

      <div className="items-center hidden ml-10 space-x-6 md:flex">
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
      </div>

      <button
        className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black
      transition duration-200
      "
        // onClick={signIn}
      >
        Login
      </button>
      {/* <img
         
          src="/images/background.png"
          alt="user profile image"
          className="object-cover w-12 h-12 ml-auto rounded-full cursor-pointer "
          onClick={signOut}
        /> */}
    </div>
  );
}

export default Header;

// export async function getServerSideProps(context) {
//   const
// }
