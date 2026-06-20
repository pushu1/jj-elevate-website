import { Users, Briefcase, Target, Star } from "lucide-react";

export default function AdminOverview() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Overview</h1>
        <p className="text-gray-500">Welcome back to the JJ Elevate admin dashboard.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        {/* Stat Card 1 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-gray-50 rounded-xl">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Leads</p>
            <h3 className="text-2xl font-bold text-gray-900">1,248</h3>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-gray-50 rounded-xl">
            <Briefcase className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Case Studies</p>
            <h3 className="text-2xl font-bold text-gray-900">14</h3>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-gray-50 rounded-xl">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Active Campaigns</p>
            <h3 className="text-2xl font-bold text-gray-900">32</h3>
          </div>
        </div>

        {/* Stat Card 4 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-gray-50 rounded-xl">
            <Star className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Testimonials</p>
            <h3 className="text-2xl font-bold text-gray-900">48</h3>
          </div>
        </div>

      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent System Activity</h3>
        <p className="text-gray-500 text-sm italic">
          Connect real-time logs here in the future. For now, use the sidebar to manage specific data tables.
        </p>
      </div>
    </div>
  );
}
