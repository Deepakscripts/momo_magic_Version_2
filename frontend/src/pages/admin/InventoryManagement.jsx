// src/pages/InventoryManagement.jsx
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";
import { Card, CardContent } from "../../components/ui/card";
import { SidebarTrigger } from "../../components/ui/sidebar";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import {
    Search,
    Bell,
    Settings,
    Plus,
    ChevronLeft,
    ChevronRight,
    TrendingUp,
    AlertTriangle,
    Clock,
    XCircle,
} from "lucide-react";
import AdminSidebar from "@/components/admin/Sidebar";
import { Label } from "../../components/ui/label";
import { Link } from "react-router-dom";
import chickenImg from "@/assets/Chicken.webp";
import wrapperImg from "@/assets/wrapper.jpg";
import schezwanImg from "@/assets/schezwansauce.webp";
import cabbageImg from "@/assets/cabbage.webp";
import soySauceImg from "@/assets/soysauce.webp";


export default function InventoryManagement() {
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("all");
    const [stockStatus, setStockStatus] = useState("all");

    // Stats data
    const stats = [
        {
            icon: TrendingUp,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            label: "Total Ingredients",
            value: 142,
            badge: "+6%",
            badgeColor: "text-green-600",
            subtext: "Across all categories",
        },
        {
            icon: AlertTriangle,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-600",
            label: "Low Stock Alerts",
            value: 4,
            badge: "Urgent",
            badgeColor: "text-orange-600",
            subtext: "+2 from yesterday",
        },
        {
            icon: Clock,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            label: "Pending Orders",
            value: 12,
            badge: "Arriving Soon",
            badgeColor: "text-blue-600",
            subtext: "From 5 suppliers",
        },
        {
            icon: XCircle,
            iconBg: "bg-red-100",
            iconColor: "text-red-600",
            label: "Out of Stock",
            value: 2,
            badge: "Critical",
            badgeColor: "text-red-600",
            subtext: "Restock needed",
        },
    ];

    // Inventory items
    const inventoryItems = [
        {
            id: 1,
            name: "Chicken Breast",
            supplier: "Boulder Fresh",
            sku: "CH-001-BR",
            category: "Meat",
            categoryColor: "bg-blue-100 text-blue-700",
            stockLevel: 50,
            maxStock: 60,
            unit: "kg",
            status: "in-stock",
            image: chickenImg,
        },
        {
            id: 2,
            name: "Momo Wrappers",
            supplier: "Asian Slices",
            sku: "WR-185-S10",
            category: "Dry Goods",
            categoryColor: "bg-purple-100 text-purple-700",
            stockLevel: 15,
            maxStock: 100,
            unit: "pks",
            status: "low-stock",
            image: wrapperImg,
        },
        {
            id: 3,
            name: "Szechuan Sauce",
            supplier: "SpicyWorld",
            sku: "SA-868-H67",
            category: "Sauce & Spices",
            categoryColor: "bg-yellow-100 text-yellow-700",
            stockLevel: 0,
            maxStock: 40,
            unit: "L",
            status: "out-of-stock",
            image: schezwanImg,
        },
        {
            id: 4,
            name: "Cabbage",
            supplier: "Local Market",
            sku: "VE-282-CAB",
            category: "Produce",
            categoryColor: "bg-green-100 text-green-700",
            stockLevel: 25,
            maxStock: 40,
            unit: "kg",
            status: "in-stock",
            image: cabbageImg,
        },
        {
            id: 5,
            name: "Soy Sauce",
            supplier: "Kiko Corp",
            sku: "SA-488-S67",
            category: "Sauce & Spices",
            categoryColor: "bg-yellow-100 text-yellow-700",
            stockLevel: 18,
            maxStock: 50,
            unit: "L",
            status: "in-stock",
            image: soySauceImg,
        },
    ];

    // Get status badge
    const getStatusBadge = (status) => {
        const statusConfig = {
            "in-stock": {
                label: "In Stock",
                className: "bg-green-100 text-green-700 hover:bg-green-100",
                icon: "●",
            },
            "low-stock": {
                label: "Low Stock",
                className: "bg-orange-100 text-orange-700 hover:bg-orange-100",
                icon: "●",
            },
            "out-of-stock": {
                label: "Out of Stock",
                className: "bg-red-100 text-red-700 hover:bg-red-100",
                icon: "●",
            },
        };

        const config = statusConfig[status];
        return (
            <Badge variant="secondary" className={config.className}>
                <span className="mr-1">{config.icon}</span>
                {config.label}
            </Badge>
        );
    };

    // Calculate stock percentage
    const getStockPercentage = (current, max) => {
        return (current / max) * 100;
    };

    // Get progress bar color
    const getProgressColor = (percentage) => {
        if (percentage === 0) return "bg-red-500";
        if (percentage < 30) return "bg-orange-500";
        return "bg-green-500";
    };

    // Filtered items based on search, category and stock status
    const filteredItems = inventoryItems.filter((item) => {
        const q = searchQuery.trim().toLowerCase();
        const matchesSearch =
            q === "" ||
            `${item.name} ${item.sku} ${item.supplier}`.toLowerCase().includes(q);

        const matchesCategory = category === "all" || item.category === category;
        const matchesStock = stockStatus === "all" || item.status === stockStatus;

        return matchesSearch && matchesCategory && matchesStock;
    });

    return (
        <>
            <AdminSidebar />
            <div className="flex-1 bg-gray-50 min-h-screen">
                {/* Header */}
                <header className="bg-white border-b px-6 py-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                            <div className="flex items-center gap-4">
                                <SidebarTrigger />
                                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Inventory Management</h1>
                            </div>

                            <div className="flex items-center gap-4 mt-3 md:mt-0">
                            {/* Search */}
                            {/* <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="Search global..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 w-64"
                                />
                            </div> */}

                            {/* Notification */}
                            <Button variant="ghost" size="icon">
                                <Bell className="h-5 w-5 text-gray-600" />
                            </Button>

                            {/* Settings */}
                            <Button variant="ghost" size="icon">
                                <Settings className="h-5 w-5 text-gray-600" />
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="p-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <Card key={index} className="bg-white">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className={`p-3 rounded-lg ${stat.iconBg}`}>
                                                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-lg md:text-base font-medium text-gray-700">{stat.label}</p>
                                                <div className="flex items-baseline gap-3">
                                                    <p className="text-4xl md:text-5xl font-extrabold text-gray-900">{stat.value}</p>
                                                    <span className={`text-sm font-medium ${stat.badgeColor}`}>
                                                        {stat.badge}
                                                    </span>
                                                </div>
                                                <p className="text-sm md:text-base text-gray-500">{stat.subtext}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Filters */}
                    <div className="bg-white rounded-lg border p-4 mb-6">
                        <div className="flex items-center justify-between gap-4">
                            {/* Search Items */}
                            <div className="flex-1">
                                <Label className="text-sm text-gray-600 mb-2 block">Search Items</Label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        type="text"
                                        placeholder="Search by name, SKU..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div className="w-48">
                                <Label className="text-sm text-gray-600 mb-2 block">Category</Label>
                                <Select value={category} onValueChange={setCategory}>
                                    <SelectTrigger className="cursor-pointer">
                                        <SelectValue placeholder="All Categories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                            <SelectItem className="cursor-pointer" value="all">All Categories</SelectItem>
                                            <SelectItem className="cursor-pointer" value="Meat">Meat</SelectItem>
                                            <SelectItem className="cursor-pointer" value="Produce">Produce</SelectItem>
                                            <SelectItem className="cursor-pointer" value="Dry Goods">Dry Goods</SelectItem>
                                            <SelectItem className="cursor-pointer" value="Sauce & Spices">Sauce & Spices</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Stock Status Filter */}
                            <div className="w-48">
                                <Label className="text-sm text-gray-600 mb-2 block">Stock Status</Label>
                                <Select value={stockStatus} onValueChange={setStockStatus}>
                                    <SelectTrigger className="cursor-pointer">
                                        <SelectValue placeholder="All Statuses" />
                                    </SelectTrigger>
                                    <SelectContent>
                                            <SelectItem className="cursor-pointer" value="all">All Statuses</SelectItem>
                                            <SelectItem className="cursor-pointer" value="in-stock">In Stock</SelectItem>
                                            <SelectItem className="cursor-pointer" value="low-stock">Low Stock</SelectItem>
                                            <SelectItem className="cursor-pointer" value="out-of-stock">Out of Stock</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Add New Item Button */}
                            <div className="pt-6">
                                    <Link to="/admin/inventory/add">
                                    <Button className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer">
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add New Item
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Inventory Table */}
                    <div className="bg-white rounded-lg border overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50">
                                    <TableHead className="font-semibold text-gray-700">ITEM NAME</TableHead>
                                    <TableHead className="font-semibold text-gray-700">SKU</TableHead>
                                    <TableHead className="font-semibold text-gray-700">CATEGORY</TableHead>
                                    <TableHead className="font-semibold text-gray-700">STOCK LEVEL</TableHead>
                                    <TableHead className="font-semibold text-gray-700">STATUS</TableHead>
                                    <TableHead className="font-semibold text-gray-700">ACTIONS</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredItems.map((item) => {
                                    const percentage = getStockPercentage(item.stockLevel, item.maxStock);
                                    const progressColor = getProgressColor(percentage);

                                    return (
                                        <TableRow key={item.id} className="hover:bg-gray-50">
                                            {/* Item Name */}
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-12 h-12 rounded-lg object-cover border"
                                                    />
                                                    <div>
                                                        <p className="font-medium text-gray-900">{item.name}</p>
                                                        <p className="text-sm text-gray-500">
                                                            Supplier: {item.supplier}
                                                        </p>
                                                    </div>
                                                </div>
                                            </TableCell>

                                            {/* SKU */}
                                            <TableCell className="text-gray-600">{item.sku}</TableCell>

                                            {/* Category */}
                                            <TableCell>
                                                <Badge className={`${item.categoryColor} border-0`}>
                                                    {item.category}
                                                </Badge>
                                            </TableCell>

                                            {/* Stock Level */}
                                            <TableCell>
                                                <div className="space-y-1">
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="font-medium text-gray-900">
                                                            {item.stockLevel} {item.unit}
                                                        </span>
                                                        <span className="text-gray-500">
                                                            of {item.maxStock} {item.unit}
                                                        </span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full transition-all ${progressColor}`}
                                                            style={{ width: `${percentage}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </TableCell>

                                            {/* Status */}
                                            <TableCell>{getStatusBadge(item.status)}</TableCell>

                                            {/* Actions */}
                                            <TableCell>
                                                {item.status === "out-of-stock" && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="border-red-200 text-red-600 hover:bg-red-50 cursor-pointer"
                                                    >
                                                        Restock Now
                                                    </Button>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-6">
                        <p className="text-sm text-gray-600">
                            Showing <span className="font-medium">{filteredItems.length > 0 ? `1-${filteredItems.length}` : 0}</span> of{" "}
                            <span className="font-medium">{filteredItems.length}</span> results
                        </p>

                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="cursor-pointer">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>

                            <Button
                                size="sm"
                                className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
                            >
                                1
                            </Button>
                            <Button size="sm" variant="outline" className="cursor-pointer">
                                2
                            </Button>
                            <Button size="sm" variant="outline" className="cursor-pointer">
                                3
                            </Button>
                            <span className="text-gray-500">...</span>

                            <Button variant="outline" size="icon" className="cursor-pointer">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
