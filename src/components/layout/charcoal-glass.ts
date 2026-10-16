import type { CSSProperties } from "react";

/** Light dark-gray glass, shared by the homepage's top navigation bar and its central title panel
 *  so both surfaces are literally the same material: a thin translucent slate tint and only a
 *  minimal blur, so the 3D vocabulary words behind stay sharp, colorful and recognizable — plus a
 *  hairline border, a faint top-edge highlight and a soft shadow. (Tint 0.52 rather than 0.45: at
 *  0.45 the nav bar's small muted labels lost contrast over bright words passing behind.) */
export const CHARCOAL_GLASS: CSSProperties = {
  background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0) 55%), rgba(35,40,50,0.52)",
  backdropFilter: "blur(2px)",
  WebkitBackdropFilter: "blur(2px)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 36px -22px rgba(0,0,0,0.7)",
};
