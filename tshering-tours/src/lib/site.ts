/* Netlify sets URL at build time; NEXT_PUBLIC_SITE_URL wins when set,
   so a custom domain only needs one env var. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  "https://tsheringtours.com";

export const SITE_NAME = "TTT Tshering Tours and Treks";

export const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=100054541446493",
  instagram: "https://www.instagram.com/ttt_tshering_tours/",
  whatsapp: "https://wa.me/97517115200",
};
