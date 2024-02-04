import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-400 w-full h-screen flex items-center justify-center">
      <Button onClick={() => navigate("/form")}>Go to Form</Button>
    </div>
  );
}

export default App;