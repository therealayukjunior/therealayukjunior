import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Developers = lazy(() => import("./pages/Developers"));
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Product = lazy(() => import("./pages/Product"));
const Resources = lazy(() => import("./pages/Resources"));
const Solutions = lazy(() => import("./pages/Solutions"));

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/product" component={Product} />
    <Route path="/developers" component={Developers} />
    <Route path="/solutions" component={Solutions} />
    <Route path="/resources/blog" component={Resources} />
    <Route path="/company/about" component={About} />
    <Route path="/company/contact" component={Contact} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><Suspense fallback={<div aria-live="polite" />}><Router /></Suspense></ErrorBoundary>;
}
