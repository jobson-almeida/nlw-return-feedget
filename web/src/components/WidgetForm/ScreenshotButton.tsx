import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import domtoimage from "dom-to-image";
import { Loading } from "../Loading";
import { useTheme } from "../../hooks/useTheme";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setTakingScreenshot] = useState(false);
  const [theme] = useTheme();

  async function handleTakeScreenshot() {
    setTakingScreenshot(true);
    const data = await domtoimage.toPng(document.querySelector("html")!, {
      bgcolor: theme,
    });
    if (!data) {
      throw new Error("Fail screenshot");
    }
    onScreenshotTook(data);
    setTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <>
        <button
          type="button"
          className="mr-2 flex min-w-[2.5rem] items-end justify-end rounded-md border-transparent bg-[#f4f4f5] text-[#27272a] transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-[#ffffff] hover:bg-[#e4e4e7] dark:bg-surface-secondary dark:text-primary dark:focus:ring-offset-zinc-900 dark:hover:bg-surface-secondary-hover"
          onClick={() => onScreenshotTook(null)}
          style={{
            backgroundImage: `url(${screenshot})`,
            backgroundPosition: "right bottom",
            backgroundSize: 180,
          }}
        >
          <Trash weight="fill" />
        </button>
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        className="mr-2 min-w-[2.5rem] rounded-md border-transparent bg-[#f4f4f5] p-2 text-[#27272a] transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-[#ffffff] hover:bg-[#e4e4e7] dark:bg-surface-secondary dark:text-primary dark:focus:ring-offset-zinc-900 dark:hover:bg-surface-secondary-hover"
        onClick={handleTakeScreenshot}
      >
        {isTakingScreenshot ? <Loading /> : <Camera className="h-6 w-6" />}
      </button>
    </>
  );
}
