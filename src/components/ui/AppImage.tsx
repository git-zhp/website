import Image, { type ImageProps } from "next/image";

type Radius = "none" | "md" | "lg" | "full";

type AppImageProps = Omit<ImageProps, "alt"> & {
  radius?: Radius;
  alt: string;
};

const radiusClasses: Record<Radius, string> = {
  none: "",
  md: "rounded-xl",
  lg: "rounded-2xl",
  full: "rounded-full",
};

export function AppImage({ className, radius = "md", alt, ...props }: AppImageProps) {
  const mergedClassName = [
    "object-cover",
    radiusClasses[radius],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Image className={mergedClassName} alt={alt} {...props} />;
}
