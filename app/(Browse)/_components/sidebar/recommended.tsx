import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { recommended } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import React from "react";

function Recommended() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Recommended</SidebarGroupLabel>
      <SidebarContent>
        <SidebarMenu>
          {recommended.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton asChild>
                <Link href={item.title}>
                  <Image
                    width={32}
                    height={32}
                    className="  rounded-full"
                    src={item.avatar}
                    alt={item.title}
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-bold font-spaceGrotesk">
                      @{item.title}
                    </p>
                    <p className="text-muted-foreground">
                      {item.followBy} folow{item.followBy !== 1 && "s"}
                    </p>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </SidebarGroup>
  );
}

export default Recommended;
