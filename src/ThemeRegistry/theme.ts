import { extendTheme } from "@mui/joy/styles";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["arabic"],
  adjustFontFallback: false, // prevent NextJS from adding its own fallback font
  fallback: ["var(--joy-fontFamily-fallback)"], // use Joy UI's fallback font
  display: "swap",
  preload: true,
  variable: "--font-cairo",
});

const theme = extendTheme({
  direction: "rtl",
  fontFamily: {
    body: cairo.style.fontFamily,
    display: cairo.style.fontFamily,
  },
  colorSchemes: {
    light: {
      palette: {
        text: {
          tertiary: "#D3D3D3",
          secondary: "#AEA5A5",
        },
        background: {},
        primary: {
          solidBg: "#FAAF40",
          solidHoverBg: "#FBBC60",
          solidColor: "#ffffff",
          solidActiveBg: "#FCCA80",

          outlinedBorder: "#FAAF40",
          outlinedColor: "#FAAF40",
          outlinedHoverColor: "#fff",
        },
        neutral: {
          solidBg: "#0E6B81",
          solidHoverBg: "#368496",
          solidActiveBg: "#5E9CAB",

          outlinedColor: "#0E6B81",
          outlinedHoverColor: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: "rgb(16, 20, 24)",
          surface: "rgba(16, 20, 24, 0.8)",
        },
      },
    },
  },

  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === "primary" &&
            ownerState.variant === "outlined" && {
              transition: "color 0.4s linear",
              borderRadius: "3em",
              fontWeight: "bolder",
              fontSize: "1.1em",
              padding: "10px 30px 10px 30px",
              ":hover": {
                background: "none",
              },
            }),
          ...(ownerState.color === "neutral" &&
            ownerState.variant === "outlined" && {
              transition: "color 0.4s linear",
              borderRadius: "3em",
              fontWeight: "bolder",
              fontSize: "1.1em",
              padding: "10px 30px 10px 30px",
              ":hover": {
                background: "none",
              },
            }),
        }),
      },
    },
  },
});

export default theme;
