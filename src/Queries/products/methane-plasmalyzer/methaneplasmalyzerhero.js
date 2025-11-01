export const methaneHeroQuery = /* groq */ `
*[_type == "methane-plasmalyzer"][0]{
  "heroSection": methaneplasmalyzerHeroSection {
    title,
    subTitle,
    primaryButtonText,
    primaryButtonAction,
    secondaryButtonText,
    secondaryButtonAction,
    secondaryButtonUrl,
    "riveFile": riveFile.asset->url,
    riveStateMachine,
    riveDelay
  }
}
`;
