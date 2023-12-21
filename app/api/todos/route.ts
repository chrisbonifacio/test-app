export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  return Response.json({
    todos: [
      {
        name: "walk the dog",
        done: false,
      },
      {
        name: "buy milk",
        done: true,
      },
    ],
  });
}
