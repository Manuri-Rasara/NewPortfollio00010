"use client";

import { SpringComponent } from "./SpringComponent";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const MySpringComponent = () => {
  return (
    <SpringComponent>
      <Avatar className="size-20">
        <AvatarImage
          draggable={false}
          src="./Assets/Avatar/Badge_IMG.png"
          alt="AK"
        />
        <AvatarFallback>AK</AvatarFallback>
      </Avatar>
    </SpringComponent>
  );
};

export { MySpringComponent};
