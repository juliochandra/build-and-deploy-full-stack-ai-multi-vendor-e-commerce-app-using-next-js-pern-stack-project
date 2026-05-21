"use client";
import { UserButton, useClerk, useUser } from "@clerk/nextjs";
import { PackageIcon, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store";

// biome-ignore lint/nursery/useExplicitType: <>
const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const router = useRouter();

  const [search, setSearch] = useState("");
  const cartCount = useSelector((state: RootState) => state.cart.total);

  const handleSearch = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    router.push(`/shop?search=${search}`);
  };

  return (
    <nav className="relative bg-white">
      <div className="mx-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4 transition-all">
          <Link href="/" className="relative font-semibold text-4xl text-slate-700">
            <span className="text-green-600">go</span>cart
            <span className="text-5xl text-green-600 leading-0">.</span>
            <p className="-top-1 -right-8 absolute flex items-center gap-2 rounded-full bg-green-500 p-0.5 px-3 font-semibold text-white text-xs">
              plus
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-4 text-slate-600 sm:flex lg:gap-8">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>

            <form
              onSubmit={handleSearch}
              className="hidden w-xs items-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm xl:flex"
            >
              <Search size={18} className="text-slate-600" />
              <input
                className="w-full bg-transparent placeholder-slate-600 outline-none"
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
            </form>

            <Link
              href="/cart"
              className="relative flex items-center gap-2 text-slate-600"
            >
              <ShoppingCart size={18} />
              Cart
              <button
                type="button"
                className="-top-1 absolute left-3 size-3.5 rounded-full bg-slate-600 text-[8px] text-white"
              >
                {cartCount}
              </button>
            </Link>
            {user ? (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    labelIcon={<PackageIcon size={16} />}
                    label="My Order"
                    onClick={() => router.push("/orders")}
                  />
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <button
                onClick={() => openSignIn()}
                type="button"
                className="rounded-full bg-indigo-500 px-8 py-2 text-white transition hover:bg-indigo-600"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile User Button  */}
          <div className="sm:hidden">
            {user ? (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    labelIcon={<ShoppingCart size={16} />}
                    label="Cart"
                    onClick={() => router.push("/cart")}
                  />
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              // <UserButton>
              //   <UserButton.MenuItems>
              //     <UserButton.Action
              //       labelIcon={<PackageIcon size={16} />}
              //       label="My Order"
              //       onClick={() => router.push("/orders")}
              //     />
              //   </UserButton.MenuItems>
              // </UserButton>

              <button
                onClick={() => openSignIn()}
                type="button"
                className="rounded-full bg-indigo-500 px-8 py-2 text-white transition hover:bg-indigo-600"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />
    </nav>
  );
};

export default Navbar;
