// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cors from "cors";

const cors = Cors({
  methods: ["GET"],
});

export default async function handler(req, res) {
  cors(req, res, async () => {
    res.status(200).json({
      data,
    });
  });
}

const data = [
  {
    link: "https://github.com/armandwipangestu/magabwa",
    thubmnail: "/images/portofolio/magabwa.png",
    alt: "Magabwa",
    title: "Magabwa",
    excerpt:
      "Membuat web portal berita menggunakan Laravel, CMS (Content Management System) dengan Filament, Docker, Nginx",
    techs: ["Laravel", "Filament", "TailwindCSS", "Docker", "Nginx"],
  },
];
