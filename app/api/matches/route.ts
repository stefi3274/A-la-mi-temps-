export async function GET() {
  const data = {
    matches: [
      { home: { name: "PSG" }, away: { name: "Marseille" } },
      { home: { name: "Real Madrid" }, away: { name: "Barcelona" } }
    ]
  };
  return Response.json(data);
}