import { useEffect } from "react";
import { usePathname } from "next/navigation";

type UseCloseOnRouteChangeProps = {
  onClose: () => void;
  enabled?: boolean;
};

export function useCloseOnRouteChange({
  onClose,
  enabled = true,
}: UseCloseOnRouteChangeProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!enabled) return;

    onClose();
  }, [pathname]);
}
