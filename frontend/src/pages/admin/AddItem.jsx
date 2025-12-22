// src/pages/AddNewItem.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { Switch } from "../../components/ui/switch";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { SidebarTrigger } from "../../components/ui/sidebar";
import { 
  ChevronRight, 
  Upload, 
  Info,
  Flame,
  Check,
  FileText,
  Sliders,
  Image,
  CheckCircle,
} from "lucide-react";
import AdminSidebar from "@/components/admin/Sidebar";

export default function AddItem() {
  const navigate = useNavigate();
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [spiciness, setSpiciness] = useState("mild");
  const [inStock, setInStock] = useState(true);
  const [stockManagement, setStockManagement] = useState("unlimited");
  const [imageFile, setImageFile] = useState(null);
  const [dietaryTags, setDietaryTags] = useState([]);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(URL.createObjectURL(file));
    }
  };

  // Handle dietary tag toggle
  const handleDietaryTag = (tag) => {
    if (dietaryTags.includes(tag)) {
      setDietaryTags(dietaryTags.filter((t) => t !== tag));
    } else {
      setDietaryTags([...dietaryTags, tag]);
    }
  };

  return (
    <>
      <AdminSidebar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div>
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <span className="hover:text-orange-500 cursor-pointer">Menu Management</span>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-orange-500">Add New Item</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Add New Menu Item</h1>
                <p className="text-sm text-gray-500">
                  Create a new offering for the Momo Magic menu. Fill in the details below.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => navigate("/admin/menu")}>Cancel</Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Check className="h-4 w-4 mr-2" />
                Publish Item
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="h-5 w-5 text-orange-500" />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Item Name */}
                  <div>
                    <Label htmlFor="itemName" className="text-sm font-medium">
                      Item Name
                    </Label>
                    <Input
                      id="itemName"
                      placeholder="e.g. Schezwan Chicken Momos"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  {/* Price and Category */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price" className="text-sm font-medium">
                        Price ($)
                      </Label>
                      <div className="relative mt-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <Input
                          id="price"
                          type="number"
                          placeholder="0.00"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="pl-7"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-sm font-medium">
                        Category
                      </Label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="momos">Momos</SelectItem>
                          <SelectItem value="sides">Sides</SelectItem>
                          <SelectItem value="drinks">Drinks</SelectItem>
                          <SelectItem value="desserts">Desserts</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description" className="text-sm font-medium">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the taste, ingredients, and what makes this item special..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="mt-1 min-h-[120px] resize-none"
                      maxLength={300}
                    />
                    <p className="text-xs text-gray-500 text-right mt-1">
                      {description.length}/300 characters
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Item Attributes Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sliders className="h-5 w-5 text-orange-500" />
                    Item Attributes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Spiciness Level */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">
                      Spiciness Level
                    </Label>
                    <RadioGroup value={spiciness} onValueChange={setSpiciness}>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mild" id="mild" />
                          <Label
                            htmlFor="mild"
                            className="font-normal cursor-pointer flex items-center gap-1"
                          >
                            Mild
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-lg">
                          <RadioGroupItem value="medium" id="medium" />
                          <Label
                            htmlFor="medium"
                            className="font-normal cursor-pointer flex items-center gap-1 text-orange-700"
                          >
                            <Flame className="h-4 w-4" />
                            Medium
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hot" id="hot" />
                          <Label
                            htmlFor="hot"
                            className="font-normal cursor-pointer flex items-center gap-1"
                          >
                            <Flame className="h-4 w-4 text-red-500" />
                            Hot
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="extra-hot" id="extra-hot" />
                          <Label
                            htmlFor="extra-hot"
                            className="font-normal cursor-pointer flex items-center gap-1"
                          >
                            <Flame className="h-4 w-4 text-red-600" />
                            <Flame className="h-4 w-4 text-red-600 -ml-2" />
                            Extra Hot
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Dietary Tags */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">
                      Dietary Tags
                    </Label>
                    <div className="flex items-center gap-3">
                      {["Vegetarian", "Vegan", "Gluten Free", "Contains Nuts"].map((tag) => (
                        <div
                          key={tag}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg border cursor-pointer transition-colors ${
                            dietaryTags.includes(tag)
                              ? "bg-orange-50 border-orange-300"
                              : "bg-white border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => handleDietaryTag(tag)}
                        >
                          <Checkbox
                            id={tag}
                            checked={dietaryTags.includes(tag)}
                            onCheckedChange={() => handleDietaryTag(tag)}
                          />
                          <Label
                            htmlFor={tag}
                            className="font-normal cursor-pointer"
                          >
                            {tag}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Image and Availability */}
            <div className="space-y-6">
              {/* Item Image Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Image className="h-5 w-5 text-orange-500" />
                    Item Image
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-400 transition-colors">
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    {imageFile ? (
                      <div className="relative">
                        <img
                          src={imageFile}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => document.getElementById("imageUpload").click()}
                          className="mt-3 w-full"
                        >
                          Change Image
                        </Button>
                      </div>
                    ) : (
                      <label htmlFor="imageUpload" className="cursor-pointer">
                        <Upload className="h-12 w-12 mx-auto text-orange-400 mb-3" />
                        <p className="font-medium text-gray-700">Click to upload</p>
                        <p className="text-sm text-gray-500">or drag and drop here</p>
                        <p className="text-xs text-gray-400 mt-2">
                          JPG, PNG (MAX. 5MB)
                        </p>
                      </label>
                    )}
                  </div>

                  <div className="flex items-start gap-2 mt-3 p-3 bg-blue-50 rounded-lg">
                    <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-blue-700">
                      High-quality images increase sales! Use a clear photo with good
                      lighting.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Availability Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* In Stock Toggle */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">In Stock</p>
                      <p className="text-sm text-gray-500">
                        Item is visible to customers
                      </p>
                    </div>
                    <Switch checked={inStock} onCheckedChange={setInStock} />
                  </div>

                  {/* Stock Management */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">
                      Stock Management
                    </Label>
                    <RadioGroup
                      value={stockManagement}
                      onValueChange={setStockManagement}
                    >
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="unlimited" id="unlimited" />
                        <Label
                          htmlFor="unlimited"
                          className="font-normal cursor-pointer flex-1"
                        >
                          <span className="flex items-center gap-2">
                            <span className="font-medium">Unlimited</span>
                          </span>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="daily-limit" id="daily-limit" />
                        <Label
                          htmlFor="daily-limit"
                          className="font-normal cursor-pointer flex-1"
                        >
                          <span className="font-medium">Daily Limit</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
