import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";


export default function TodoListPage() {
    return (
      <div className="top-0 px-6 py-6 z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 gap-12 flex flex-col max-w-7xl justify-center mx-auto p-6 items-center">
          <h1 className="text-3xl font-bold text-center mb-8">My Todo List</h1>
          <TodoList />
        </main>
        <div className="drop-shadow z-10 px-6 py-6">
          <Footer />
        </div>
      </div>
    )
  }
  
