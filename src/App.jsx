import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import preload from "./assets/Walk.gif";

function lazyWithTimeout(importFunction) {
  return lazy(() =>
    Promise.all([
      importFunction(),
      new Promise((resolve) => setTimeout(resolve, 600)),
    ]).then(([moduleExports]) => moduleExports)
  );
}

const LazyIndexPage = lazyWithTimeout(() => import("./pages/index/IndexPage"));
const LazyShopPage = lazyWithTimeout(() => import("./pages/Shop"));
const LazyCheckoutPage = lazyWithTimeout(() => import("./pages/Checkout"));
const LazyLoginPage = lazyWithTimeout(() => import("./pages/auth/Login"));
const LazyRegisterPage = lazyWithTimeout(() => import("./pages/auth/Register"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center flex-col gap-5">
            <img className="h-[70px] w-[70px]" src={preload} />
            <p className="text-xl font-bold">Please wait....</p>
          </div>
        }
      >
        <Routes>
          <Route index element={<LazyIndexPage />} />
          <Route path="shop" element={<LazyShopPage />} />
          <Route path="checkout" element={<LazyCheckoutPage />} />
          <Route path="login" element={<LazyLoginPage />} />
          <Route path="register" element={<LazyRegisterPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
