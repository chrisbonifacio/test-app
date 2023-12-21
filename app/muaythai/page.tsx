"use client";

const Page = () => {
  const fetchTodos = async () => {
    const todos = await fetch("/api/todos", {
      method: "GET",
    });

    const data = await todos.json();

    console.log(data);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="mb-5">Muay Thai</h1>
      <button onClick={fetchTodos}>Fetch Todos</button>
    </div>
  );
};

export default Page;
