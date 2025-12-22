// src/pages/AddNewInventory.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
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
  ChevronRight,
  Upload,
  AlertCircle,
  Package,
  Info,
  AlertTriangle,
  Building,
  Tag,
} from "lucide-react";
import AdminSidebar from "@/components/admin/Sidebar";

export default function AddNewInventory() {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [initialStock, setInitialStock] = useState("");
  const [unitOfMeasure, setUnitOfMeasure] = useState("");
  const [alertThreshold, setAlertThreshold] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [sku, setSku] = useState("");
  const [description, setDescription] = useState("");
  const [itemImage, setItemImage] = useState(null);

  const navigate = useNavigate();

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setItemImage(URL.createObjectURL(file));
    }
  };

  // Handle drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setItemImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <AdminSidebar />
      <div className="flex-1 bg-orange-50/30 min-h-screen">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div>
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <span className="hover:text-orange-500 cursor-pointer">Inventory</span>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-orange-500">Add New Item</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Add New Inventory Item
                </h1>
                <p className="text-sm text-gray-500">
                  Enter the details below to track a new ingredient, packaging/material, or
                  supply item in the system.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 max-w-4xl mx-auto">
          {/* Info Alert */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <div className="bg-orange-500 rounded-full p-1 mt-0.5">
              <AlertCircle className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-medium text-orange-900 mb-1">ITEM DETAILS</p>
              <p className="text-sm text-orange-700">
                Field marked with an asterisk (*) are required
              </p>
            </div>
          </div>

          {/* Form Card */}
          <Card className="bg-white">
            <CardContent className="p-6 space-y-6">
              {/* Item Name & Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="itemName" className="text-sm font-medium">
                    Item Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="itemName"
                    placeholder="e.g. Frozen Chicken Momos"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-sm font-medium">
                    Category <span className="text-red-500">*</span>
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="meat">Meat</SelectItem>
                      <SelectItem value="produce">Produce</SelectItem>
                      <SelectItem value="dry-goods">Dry Goods</SelectItem>
                      <SelectItem value="sauces">Sauce & Spices</SelectItem>
                      <SelectItem value="packaging">Packaging</SelectItem>
                      <SelectItem value="beverages">Beverages</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Initial Stock, Unit, Alert Threshold */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="initialStock" className="text-sm font-medium">
                    Initial Stock Quantity <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="initialStock"
                    type="number"
                    placeholder="0"
                    value={initialStock}
                    onChange={(e) => setInitialStock(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="unitOfMeasure" className="text-sm font-medium">
                    Unit of Measure (UoM) <span className="text-red-500">*</span>
                  </Label>
                  <Select value={unitOfMeasure} onValueChange={setUnitOfMeasure}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Kilograms (kg)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Kilograms (kg)</SelectItem>
                      <SelectItem value="g">Grams (g)</SelectItem>
                      <SelectItem value="l">Liters (L)</SelectItem>
                      <SelectItem value="ml">Milliliters (mL)</SelectItem>
                      <SelectItem value="pcs">Pieces (pcs)</SelectItem>
                      <SelectItem value="pks">Packages (pks)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="alertThreshold" className="text-sm font-medium flex items-center gap-2">
                    Alert Threshold
                    <div className="relative group">
                      <Info className="h-4 w-4 text-gray-400 cursor-help" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-xs rounded px-3 py-2 whitespace-nowrap">
                        Get notified when stock falls below this level
                      </div>
                    </div>
                  </Label>
                  <div className="relative mt-1">
                    <AlertTriangle className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 h-4 w-4" />
                    <Input
                      id="alertThreshold"
                      type="number"
                      placeholder="e.g. 10"
                      value={alertThreshold}
                      onChange={(e) => setAlertThreshold(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Supplier Name & SKU */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="supplierName" className="text-sm font-medium">
                    Supplier Name (Optional)
                  </Label>
                  <div className="relative mt-1">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 h-4 w-4" />
                    <Input
                      id="supplierName"
                      placeholder="e.g. Fresh Farms Ltd."
                      value={supplierName}
                      onChange={(e) => setSupplierName(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="sku" className="text-sm font-medium">
                    SKU / Barcode (Optional)
                  </Label>
                  <div className="relative mt-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 h-4 w-4" />
                    <Input
                      id="sku"
                      placeholder="Scan or enter code"
                      value={sku}
                      onChange={(e) => setSku(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-sm font-medium">
                  Description / Notes
                </Label>
                <Textarea
                  id="description"
                  placeholder="Add any specific details about this item, storage instructions, or brand preferences..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 min-h-[100px] resize-none"
                />
              </div>

              {/* Item Image */}
              <div>
                <Label className="text-sm font-medium mb-3 block">Item Image</Label>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-orange-400 transition-colors cursor-pointer bg-gray-50"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("imageUpload").click()}
                >
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  {itemImage ? (
                    <div className="space-y-3">
                      <img
                        src={itemImage}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-lg mx-auto"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById("imageUpload").click();
                        }}
                      >
                        Change Image
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-12 w-12 mx-auto text-orange-400 mb-3" />
                      <p className="font-medium text-gray-700 mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">
                        JPG, PNG (MAX. 5MB)
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t">
                <Button variant="outline" className="px-6" onClick={() => navigate('/admin/inventory')}>
                  Cancel
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                  <Package className="h-4 w-4 mr-2" />
                  Add to Inventory
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
