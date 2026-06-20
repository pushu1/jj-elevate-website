import type { Metadata } from "next";
import Sidebar from "@/components/admin/Sidebar";

export const metadata: Metadata = {
  title: "Admin Dashboard | JJ Elevate",
  description: "Internal admin dashboard for JJ Elevate.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - fixed width 64 */}
      <Sidebar />
      
      {/* Main Content Wrapper - offset by sidebar width */}
      <main className="flex-1 ml-64 min-h-screen bg-gray-50">
        {children}
      </main>
    </div>
  );
}
