import { Calendar, Home, Inbox, Search, Settings, Upload } from "lucide-react"
import Summary from "@/pages/Summary"

import { Link } from 'react-router-dom';
import { Router , Route  } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Analysis of documents",
    url: "/",
    icon: Home,
  },

  {
    title: "Document Summary",
    url: "/summary", // updated path
    icon: Upload,
  },
  {
    title: "AI powered intelligent search tool",
    url: "/search",
    icon: Search,
  },
  {
    title: "Certificate Verification",
    url: "/certificate",
    icon: Upload,
  },
  {
    title: "Classification of best incentives for users",
    url: "#",
    icon: Inbox,
  },
];



export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className='bg-black text-white'>
        <SidebarGroup>
          <SidebarGroupLabel className='text-white text-xl'>Application</SidebarGroupLabel>
          <br/>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
