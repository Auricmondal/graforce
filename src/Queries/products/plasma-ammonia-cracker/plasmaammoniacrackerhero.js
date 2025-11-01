export const plasmaAmmoniaHeroQuery = /* groq */ `
*[_type == "plasma-ammonia-cracker"][0]{
  "heroSection": plasmaammoniacrackerHeroSection {
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
