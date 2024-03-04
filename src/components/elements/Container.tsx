import { cn } from "@/lib/utils";
import { WithClassName } from "@/types/UI";
import clsx from "clsx";

type ContainerProps<T extends React.ElementType> = WithClassName & {
  as?: T;
  children: React.ReactNode;
  wrapperClassName?: string;
};

export const Container = <T extends React.ElementType = "div">({ 
  as,
  className,
  wrapperClassName,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>) => {
  const Component = as ?? "div";

  return (
    <Component className={clsx("mx-auto max-w-7xl px-6 lg:px-8", className)}>
      <div className={cn("mx-auto max-w-2xl lg:max-w-none", wrapperClassName)}>
        {children}
      </div>
    </Component>
  );
};
