// src/pages/Analytics.jsx
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { SidebarTrigger } from "../../components/ui/sidebar";
import { 
  Wallet, 
  ShoppingBag, 
  TrendingUp, 
  Users,
  ArrowUp,
} from "lucide-react";
import AdminSidebar from "@/components/admin/Sidebar";
import RevenueChart from "@/components/admin/RevenueChart";
import BarChart from "@/components/admin/BarChart";
import CustomerActivityChart from "@/components/admin/CustomerActivity";


export default function Analytics() {
  const [activeTab, setActiveTab] = useState("today");


  // Stats data
  const stats = [
    {
      icon: Wallet,
      label: "Total Revenue",
      value: "$12,450",
      change: "+12%",
      isPositive: true,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: ShoppingBag,
      label: "Total Orders",
      value: "1,230",
      change: "+8%",
      isPositive: true,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: TrendingUp,
      label: "Avg. Order Value",
      value: "$10.12",
      change: "+2%",
      isPositive: true,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Users,
      label: "Active Employees",
      value: "8",
      change: "0%",
      isPositive: null,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];


  // Most sold items
  const mostSoldItems = [
    {
      name: "Steam Chicken Momo",
      count: 482,
      percentage: 85,
    },
    {
      name: "Spicy Jhol Momo",
      count: 354,
      percentage: 62,
    },
    {
      name: "Coke (500ml)",
      count: 201,
      percentage: 35,
    },
  ];


  // Peak order times data - Updated format for BarChart component
  const peakOrderTimesData = [
    { label: "12p", value: 45 },
    { label: "3p", value: 95 },
    { label: "6p", value: 65 },
    { label: "9p", value: 78 },
  ];


  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar/>
      <div className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center gap-4 border-b bg-background px-6 py-4">
          <SidebarTrigger />
          <h1 className="text-2xl font-semibold">Analytics Dashboard (Admin)</h1>
        </header>
        
        {/* Page Content */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Header Section */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Analytics Overview</h2>
                <p className="text-muted-foreground">Real-time performance metrics</p>
              </div>
              
              {/* Time Period Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger 
                    value="today"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    Today
                  </TabsTrigger>
                  <TabsTrigger value="week">This Week</TabsTrigger>
                  <TabsTrigger value="month">This Month</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>


            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-lg ${stat.iconBg}`}>
                          <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                        </div>
                        {stat.isPositive !== null && (
                          <Badge
                            variant="secondary"
                            className={`${
                              stat.isPositive
                                ? "bg-red-50 text-red-600 hover:bg-red-50"
                                : "bg-green-50 text-green-600 hover:bg-green-50"
                            }`}
                          >
                            {stat.isPositive && <ArrowUp className="h-3 w-3 mr-1" />}
                            {stat.change}
                          </Badge>
                        )}
                        {stat.isPositive === null && (
                          <Badge variant="secondary">{stat.change}</Badge>
                        )}
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>


            {/* Revenue Chart and Most Sold Items */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Revenue vs Costs Chart */}
              <RevenueChart/>


              {/* Most Sold Items */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Most Sold Items</CardTitle>
                    <Button variant="link" className="text-orange-500 hover:text-orange-600">
                      View Menu
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mostSoldItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-orange-200 text-orange-700 font-semibold">
                            {item.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <div className="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-orange-500 rounded-full transition-all"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="font-semibold text-lg">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>


            {/* Peak Order Times and Customer Activity */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Peak Order Times - Using BarChart Component */}
              <Card>
                <CardHeader>
                  <CardTitle>Peak Order Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart 
                    data={peakOrderTimesData} 
                    height={400}
                    highlightMax={true}
                    showLabel={true}
                  />
                </CardContent>
              </Card>


              {/* Recent Customer Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Customer Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CustomerActivityChart />
                  
                  {/* Activity List */}
                  <div className="mt-6 space-y-3 pt-4 border-t">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-orange-100">U{i + 1}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Order #{1234 + i}</p>
                          <p className="text-xs text-muted-foreground">2 mins ago</p>
                        </div>
                        <Badge variant="outline">
                          {i === 0 ? "Dine-in" : "Delivery"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
