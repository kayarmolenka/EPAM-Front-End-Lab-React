import "../index.css";
import Content from "./Content";
import UserDetails from "../components/UserDetails/UserDetails";
import ErrorBoundary from "./ErrorBoundary";
import FieldForErrorBoundary from "./FieldForErrorBoundary";
import ScrollItem from "./ScrollItem";

function App() {
  return (
    <div className="wrapper-app">
      <ScrollItem />
      <UserDetails />
      <Content />
      <ErrorBoundary>
        <FieldForErrorBoundary />
      </ErrorBoundary>
    </div>
  );
}

export default App;
