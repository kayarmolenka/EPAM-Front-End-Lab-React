import "../index.css";
import Content from "./Content";
import UserDetails from "../components/UserDetails/UserDetails";
import ErrorBoundary from "./ErrorBoundary";
import FieldForErrorBoundary from "./FieldForErrorBoundary";
import ScrollItem from "./ScrollItem";
import UsePrevious from "./UsePrevious";

function App() {
  return (
    <div className="wrapper-app">
      <ScrollItem />
      <UserDetails />
      <Content />
      <ErrorBoundary>
        <FieldForErrorBoundary />
      </ErrorBoundary>
      <UsePrevious />
    </div>
  );
}

export default App;
