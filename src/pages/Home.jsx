import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl my-6 md:text-6xl">
              Discover the Best Deals at Draggers
            </h1>
            <p className="max-w-[600px] my-6 text-muted-foreground md:text-xl">
              Draggers is your one-stop shop for high-quality groceries,
              electronics, and cosmetics. Explore our curated collection and
              find the perfect products to meet your everyday needs.
            </p>
            <div className="flex flex-col justify-center items-center gap-2 min-[400px]:flex-row">
              <Link
                to={"/products"}
                className="inline-flex h-10 my-6 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/642b77bd57fe38001dfdd8fc.jpg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6">
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link
              to={"/categoryfilter/groceries"}
              className="absolute inset-0 z-10"
              prefetch={false}
            >
              <span className="sr-only">View</span>
            </Link>
            <img
              src="https://www.skh.com/wp-content/uploads/2020/01/iStock-1155240408-1-800x500.jpg"
              alt="Product 1"
              width={500}
              height={400}
              className="object-cover w-full h-64"
              style={{ aspectRatio: "500/400", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Organic Produce</h3>
              <p className="text-sm text-muted-foreground">
                Fresh and Nutritious
              </p>
              <h4 className="text-lg font-semibold md:text-xl">$9.99</h4>
            </div>
          </div>
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link
              to={"/categoryfilter/laptops"}
              className="absolute inset-0 z-10"
              prefetch={false}
            >
              <span className="sr-only">View</span>
            </Link>
            <img
              src="data:image/jpeg;base64,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"
              alt="Product 2"
              width={500}
              height={400}
              className="object-cover w-full h-64"
              style={{ aspectRatio: "500/400", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Laptop</h3>
              <p className="text-sm text-muted-foreground">Apple Macbook</p>
              <h4 className="text-lg font-semibold md:text-xl">$1999.99</h4>
            </div>
          </div>
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link
              to={"categoryfilter/beauty"}
              className="absolute inset-0 z-10"
              prefetch={false}
            >
              <span className="sr-only">View</span>
            </Link>
            <img
              src="data:image/jpeg;base64,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"
              alt="Product 3"
              width={500}
              height={400}
              className="object-cover w-full h-64"
              style={{ aspectRatio: "500/400", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Luxury Makeup Set</h3>
              <p className="text-sm text-muted-foreground">
                High-Quality Cosmetics
              </p>
              <h4 className="text-lg font-semibold md:text-xl">$79.99</h4>
            </div>
          </div>
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link
              to={"categoryfilter/mobile-accessories"}
              className="absolute inset-0 z-10"
              prefetch={false}
            >
              <span className="sr-only">View</span>
            </Link>
            <img
              src="https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/j/b/jbl-t570bt-myshop-pk-4.jpg"
              alt="Product 4"
              width={500}
              height={400}
              className="object-cover w-full h-64"
              style={{ aspectRatio: "500/400", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Wireless Headphones</h3>
              <p className="text-sm text-muted-foreground">Noise-Cancelling</p>
              <h4 className="text-lg font-semibold md:text-xl">$149.99</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Draggers?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Draggers offers a wide range of high-quality groceries,
              electronics, and cosmetics to cater to all your everyday needs.
              With our commitment to customer satisfaction, you can trust that
              you're getting the best products and services.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <CompassIcon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Curated Selection</h3>
                <p className="text-muted-foreground">
                  Our team of experts carefully selects the best products to
                  ensure you have access to top-quality items.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TruckIcon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Fast Shipping</h3>
                <p className="text-muted-foreground">
                  We offer fast and reliable shipping to ensure your items
                  arrive quickly, so you can start enjoying them right away.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldIcon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Secure Payments</h3>
                <p className="text-muted-foreground">
                  Your payment information is safe with us. We use industry-
                  leading security measures to protect your transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

export default Home;
