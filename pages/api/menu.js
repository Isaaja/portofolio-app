import Cors from "cors";

const cors = Cors({
  methods: ["GET"],
});

const handler = async (req, res) => {
  cors(req, res, async () => {
    res.status(200).json({ data });
  });
};

const data = [
  { title: "Home", target: "/" },
  { title: "About", target: "/tentang-saya" },
  { title: "Portofolio", target: "/Portfolio.pdf" },
  { title: "Skills", target: "/skills" },
  { title: "Project", target: "/pendidikan" },
];

export default handler;
