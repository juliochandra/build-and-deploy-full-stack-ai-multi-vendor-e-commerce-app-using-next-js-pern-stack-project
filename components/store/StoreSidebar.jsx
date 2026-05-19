"use client";
import {
  HomeIcon,
  LayoutListIcon,
  SquarePenIcon,
  SquarePlusIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StoreSidebar = ({ storeInfo }) => {
  const pathname = usePathname();

  const sidebarLinks = [
    { name: "Dashboard", href: "/store", icon: HomeIcon },
    { name: "Add Product", href: "/store/add-product", icon: SquarePlusIcon },
    { name: "Manage Product", href: "/store/manage-product", icon: SquarePenIcon },
    { name: "Orders", href: "/store/orders", icon: LayoutListIcon },
  ];

  return (
    <div className="inline-flex h-full flex-col gap-5 border-slate-200 border-r sm:min-w-60">
      <div className="flex flex-col items-center justify-center gap-3 pt-8 max-sm:hidden">
        <Image
          className="h-14 w-14 rounded-full shadow-md"
          src={storeInfo?.logo}
          alt=""
          width={80}
          height={80}
        />
        <p className="text-slate-700">{storeInfo?.name}</p>
      </div>

      <div className="max-sm:mt-6">
        {sidebarLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`relative flex items-center gap-3 p-2.5 text-slate-500 transition hover:bg-slate-50 ${pathname === link.href && "bg-slate-100 sm:text-slate-600"}`}
          >
            <link.icon size={18} className="sm:ml-5" />
            <p className="max-sm:hidden">{link.name}</p>
            {pathname === link.href && (
              <span className="absolute top-1.5 right-0 bottom-1.5 w-1 rounded-l bg-green-500 sm:w-1.5"></span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StoreSidebar;
