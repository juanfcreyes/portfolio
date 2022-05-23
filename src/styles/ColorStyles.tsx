export const themes = {
  light: {
    text1: "black",
    text2: "rgba(0,0,0,0.7)",
    primary: `#7838e0`,
    secondary: "#87FDDE",
    danger: '#C22D2D',
    backgroundColor: `#f2f6ff`,
    backgroundForm: `#e0e7f7`,
    disabled: `#6c8086`,
    warning: `#C22D2D`,
    loadingScreen: "rgba(255,255,255,0.7)",
    card: {
      backgroundColor: `rgba(255, 255, 255, 0.6)`,
      boxShadow: `0px 16px 24px rgba(34, 79, 169, 0.1)`,
    },
    cardHover: {
      backgroundColor: `rgba(68, 66, 178, 0.1)`,
      boxShadow: `inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2)`,
    },
    pricingCard: {
      backgroundColor: `rgba(255, 255, 255, 0.3)`,
    },
    status: {
      backgroundColor: "rgba(68, 66, 178, 0.1)",
    },
    modal: {
      backgroundColor: `rgba(255, 255, 255, 0.6)`,
      boxShadow: `0px 50px 100px rgba(34, 79, 169, 0.3),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.6)`,
    },
  },
  dark: {
    text1: "white",
    text2: "rgba(255,255,255,0.7)",
    primary: `#401587`,
    secondary: "#2EAE7B",
    backgroundColor: `#2B2830`,
    backgroundForm: `#282828`,
    danger: '#C22D2D',
    loadingScreen: "rgba(0,0,0,0.7)",
    card: {
      backgroundColor: `rgba(15, 13, 17, 0.84)`,
      boxShadow: `0px 30px 60px rgba(0, 0, 0, 0.25),
        inset 0 0 0 0.5px rgba(255, 255, 255, 0.2)`,
    },
    cardHover: {
      backgroundColor: `rgba(255, 255, 255, 0.1)`,
      boxShadow: `inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2)`,
    },
    pricingCard: {
      backgroundColor: `rgba(31, 31, 71, 0.6)`,
    },
    status: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modal: {
      backgroundColor: `rgba(50, 61, 109, 0.5)`,
      boxShadow: `0px 50px 100px rgba(0, 0, 0, 0.25),
        inset 0 0 0 0.5px rgba(255, 255, 255, 0.3)`,
    },
  },
} as const;
