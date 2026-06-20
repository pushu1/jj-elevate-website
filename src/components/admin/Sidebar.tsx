"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Briefcase, 
  Image as ImageIcon, 
  Settings,
  LogOut,
  Zap
} from "lucide-react";

const navItems = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Leads & Inquiries", href: "/admin/leads", icon: Users },
  { name: "Case Studies", href: "/admin/portfolio", icon: Briefcase },
  { name: "Blog Posts", href: "/admin/blogs", icon: FileText },
  { name: "Media Library", href: "/admin/media", icon: ImageIcon },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 flex flex-col shadow-sm">
      <div className="h-20 flex items-center px-6 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-200">
            <Zap className="w-4 h-4 text-gray-900 fill-gray-900" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-gray-900">
            JJ<span className="text-gray-900">Elevate</span>
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                isActive 
                  ? "bg-gray-100 text-gray-900" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-gray-900" : "text-gray-400"}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button 
          onClick={() => {
            document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            window.location.href = "/admin-login";
          }}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg font-medium text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut className="w-5 h-5 text-gray-400" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
