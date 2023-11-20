import { ComponentType } from "react";
import { ImageBlock } from "../types";
import { Media } from "../components";

export const Image: ComponentType<ImageBlock> = ({ caption, image }) => {
  return (
    <section className="flex flex-col gap-3">
      <picture className="relative h-[400px] lg:h-[700px]">
        <Media image={image} />
      </picture>
      {caption && (
        <p className="text-xs">{caption}</p>
      )}
    </section>
  )
}
