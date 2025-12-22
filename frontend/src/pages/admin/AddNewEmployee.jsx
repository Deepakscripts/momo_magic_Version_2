// src/pages/AddNewEmployee.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { SidebarTrigger } from "../../components/ui/sidebar";
import { ChevronRight, Upload, User, IdCard, Briefcase } from "lucide-react";
import { toast } from "sonner";
import AdminSidebar from "@/components/admin/Sidebar";

export default function AddNewEmployee() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [permissionLevel, setPermissionLevel] = useState("standard");
  const [accountActive, setAccountActive] = useState(true);
  const [employeeId, setEmployeeId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Handle profile photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
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
                  <span className="hover:text-orange-500 cursor-pointer">Dashboard</span>
                  <ChevronRight className="h-4 w-4" />
                  <span className="hover:text-orange-500 cursor-pointer">Employees</span>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-orange-500">Add New</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Add New Team Member</h1>
                <p className="text-sm text-gray-500">
                  Fill in the details below to onboard a new staff member to the system.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => navigate('/admin/employees')}>Cancel</Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => {
                  toast.success("New profile has been created");
                  setFirstName("");
                  setLastName("");
                  setDob("");
                  setGender("");
                  setEmail("");
                  setPhone("");
                  setAddress("");
                  setRole("");
                  setPermissionLevel("standard");
                  setAccountActive(true);
                  setEmployeeId("");
                  setStartDate("");
                  setEmergencyName("");
                  setEmergencyPhone("");
                  setProfilePhoto(null);
                }}
              >
                <User className="h-4 w-4 mr-2" />
                Create Profile
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Profile Photo & System Access */}
            <div className="space-y-6">
              {/* Profile Photo Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative inline-block mb-4">
                      {profilePhoto ? (
                        <div className="relative">
                          <img
                            src={profilePhoto}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                          />
                          <button
                            onClick={() => document.getElementById("photoUpload").click()}
                            className="absolute bottom-0 right-0 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 shadow-lg"
                          >
                            <Upload className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="relative">
                          <div className="w-32 h-32 rounded-full border-4 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                            <Upload className="h-8 w-8 text-gray-400" />
                          </div>
                          <button
                            onClick={() => document.getElementById("photoUpload").click()}
                            className="absolute bottom-0 right-0 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 shadow-lg"
                          >
                            <Upload className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                      <input
                        type="file"
                        id="photoUpload"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Profile Photo</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Upload a clear photo for ID card
                    </p>
                    <p className="text-xs text-gray-400">Max 2MB, JPG, PNG only</p>
                  </div>
                </CardContent>
              </Card>

              {/* System Access Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Briefcase className="h-5 w-5 text-orange-500" />
                    System Access
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Role */}
                  <div>
                    <Label htmlFor="role" className="text-sm font-medium">
                      Role
                    </Label>
                    <Select value={role} onValueChange={setRole}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select Role..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="head-chef">Head Chef</SelectItem>
                        <SelectItem value="sous-chef">Sous Chef</SelectItem>
                        <SelectItem value="cashier">Cashier</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="inventory-manager">Inventory Manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Permission Level */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">
                      Permission Level
                    </Label>
                    <div className="space-y-2">
                      <button
                        onClick={() => setPermissionLevel("standard")}
                        className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                          permissionLevel === "standard"
                            ? "bg-orange-50 border-orange-500 text-orange-700"
                            : "bg-white border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <p className="font-medium">Standard</p>
                      </button>

                      <button
                        onClick={() => setPermissionLevel("admin")}
                        className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                          permissionLevel === "admin"
                            ? "bg-orange-50 border-orange-500 text-orange-700"
                            : "bg-white border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <p className="font-medium">Admin</p>
                      </button>

                      <button
                        onClick={() => setPermissionLevel("viewer")}
                        className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                          permissionLevel === "viewer"
                            ? "bg-orange-50 border-orange-500 text-orange-700"
                            : "bg-white border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <p className="font-medium">Viewer</p>
                      </button>
                    </div>
                  </div>

                  {/* Account Active */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Account Active</p>
                    </div>
                    <Switch
                      checked={accountActive}
                      onCheckedChange={setAccountActive}
                      className="data-[state=checked]:bg-orange-500"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <User className="h-5 w-5 text-orange-500" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="e.g. Sarah"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="e.g. Jenkins"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Date of Birth & Gender */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dob" className="text-sm font-medium">
                        Date of Birth
                      </Label>
                      <Input
                        id="dob"
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="gender" className="text-sm font-medium">
                        Gender
                      </Label>
                      <Select value={gender} onValueChange={setGender}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Details Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <IdCard className="h-5 w-5 text-orange-500" />
                    Contact Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Email & Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="sarah.j@momomagic.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <Label htmlFor="address" className="text-sm font-medium">
                      Address
                    </Label>
                    <Input
                      id="address"
                      placeholder="123 Orange St, Flavor Town"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Employment Details Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Briefcase className="h-5 w-5 text-orange-500" />
                    Employment Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Employee ID & Start Date */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="employeeId" className="text-sm font-medium">
                        Employee ID
                      </Label>
                      <Input
                        id="employeeId"
                        placeholder="MM-2024-893"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="startDate" className="text-sm font-medium">
                        Start Date
                      </Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Emergency Contact Name & Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="emergencyName" className="text-sm font-medium">
                        Emergency Contact Name
                      </Label>
                      <Input
                        id="emergencyName"
                        placeholder="Full Name"
                        value={emergencyName}
                        onChange={(e) => setEmergencyName(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="emergencyPhone" className="text-sm font-medium">
                        Emergency Phone
                      </Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        placeholder="+1 (555) 999-9999"
                        value={emergencyPhone}
                        onChange={(e) => setEmergencyPhone(e.target.value)}
                        className="mt-1"
                      />
                    </div>
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
