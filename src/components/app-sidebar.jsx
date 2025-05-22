import { useState } from "react";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { Card, CardContent } from "./ui/card";

export function AppSidebar() {
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);

  return (
    <Sidebar className="p-2">
      <SidebarHeader>
        <div className="text-xl font-bold p-4">My App</div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Home */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <Home size={18} />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Course Creation with Dropdown */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setCourseDropdownOpen((prev) => !prev)}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center gap-2">
                    <Inbox size={18} />
                    <span>Course Creation</span>
                  </div>
                  {courseDropdownOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </SidebarMenuButton>

                {courseDropdownOpen && (
                  <div className="ml-6 mt-1 space-y-1">
                    <Link
                      to="/category-creation"
                      className="block text-sm hover:underline"
                    >
                      Category Creation
                    </Link>
                    <Link to="#" className="block text-sm hover:underline">
                      Module Creation
                    </Link>
                    <Link to="#" className="block text-sm hover:underline">
                      Lesson Creation
                    </Link>
                  </div>
                )}
              </SidebarMenuItem>

              {/* Other menu items */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="#" className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>Calendar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="#" className="flex items-center gap-2">
                    <Search size={18} />
                    <span>Search</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/sitting" className="flex items-center gap-2">
                    <Settings size={18} />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        <Card>
          <CardContent>
            <div className="flex items-center gap-2">
              <img
                src="https://via.placeholder.com/40"
                className="rounded-full"
              />
              <div>
                <h3 className="text-sm font-semibold">John Doe</h3>
                <p className="text-xs text-gray-500">
                  gnanendrapnani@gmail.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </SidebarFooter>
    </Sidebar>
  );
}
