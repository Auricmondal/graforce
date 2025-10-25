import img from "@/assets/service/ServiceSolution2.jpg"

export const mockNews = Array.from({ length: 30 }).map((_, index) => ({
  id: index + 1,
  title: "Some News Title That says Something",
  date: "08th Sept, 2025",
  tag: "Tag",
  category: ["Partnership", "Environment", "Geopolitics", "Energy", "Hydrogen"][index % 5],
  image: img
}));
