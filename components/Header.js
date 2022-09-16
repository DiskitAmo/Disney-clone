import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  console.log(session);
  return (
    <div className="sticky bg-black top-0 z-10 flex items-center px-10 md:px-12 ">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div className="hidden ml-10 md:flex items-center space-x-6">
        <a className="header-link group text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <span className="span">Home</span>
        </a>
        <a className="header-link group text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="span">Search</span>
        </a>
        <a className="header-link group text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
            />
          </svg>

          <span className="span">Watchlist</span>
        </a>
        <a className="header-link group text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="span">Originals</span>
        </a>
        <a className="header-link group text-white">
          <img src="/images/movie-icon.svg" alt="" className="h-5" />
          <span className="span">Movies</span>
        </a>
        <a className="header-link group text-white">
          <img src="/images/series-icon.svg" alt="" className="h-5" />
          <span className="span">Series</span>
        </a>
      </div>
      {!session ? (
        <button
          className="ml-auto uppercase border text-white px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={signIn}
        >
          Login
        </button>
      ) : (
        <>
          <img
            src={session.user.image}
            className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
            onClick={signOut}
            alt=""
          />
        </>
      )}
    </div>
  );
};

export default Header;
