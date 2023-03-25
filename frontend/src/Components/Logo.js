import { Box, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <>
      <Box>
        {/* box for logo */}
        <Image
          w={"99.35px"}
          h={"56px"}
          src="https://s3-alpha-sig.figma.com/img/80a0/725d/c6fde8d86e0166b58d5ef942d8d55b63?Expires=1679875200&Signature=mDE0gmutHrZk1ucqmOFMoFUhnVTHA2T9n4qkNdAOV8d8PFWtfg4Ytc~aymbtdjc7dC3vC~kEoi~IiB~e7jxKKWC342ezJ5wyi3unZa3PAxc7HnLnvzu3XFBEC8404r6mx3WdOocZUp0G1GH3kM31OPrqtQ2nUJ-krc-NDHM01l3bXMMkCm2EEtn5DNiZSA6FImaeAeneCpyf1CSGkaCjBZ~R1VRlzrUcgm5m-MiIgvSZ9HPpu-lY3mfjFJ~sSlL0M8GGYGNsi0AyMq-Glp24jwXDbFk7kXKOgSxFxEnwM9Eo-cfgQwi4tcFBOjUAly8d9-e9jtMMpSRSulJRoxAxHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </Box>
    </>
  );
};

export default Logo;
