import Link from "next/link";
const NoAuth = () => {
  return (
    <div className="flex h-96 justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl text-red-500">Login Require</h1>
        <Link href="/account">
          <button className="bg-red-500 p-2 my-5 rounded-md text-white">
            Login Here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoAuth;
