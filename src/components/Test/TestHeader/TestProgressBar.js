
import { CProgress, CProgressBar } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./TestProgressBarStyle.css";

export default function TestProgressBar() {
  return (
    <CProgress className="progress">
      <CProgressBar color="success" value={25} />
    </CProgress>
  );
}