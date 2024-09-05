import { Link } from "react-router-dom";

function Home(){
    return (
        <div className="flex flex-col min-h-[100dvh]">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Discover the Best Deals at Draggers
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Draggers is your one-stop shop for high-quality groceries, electronics, and cosmetics. Explore our curated
                  collection and find the perfect products to meet your everyday needs.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                  to={'/products'}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
                <Link to={'/categoryfilter/groceries'} className="absolute inset-0 z-10" prefetch={false}>
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
                  <p className="text-sm text-muted-foreground">Fresh and Nutritious</p>
                  <h4 className="text-lg font-semibold md:text-xl">$9.99</h4>
                </div>
              </div>
              <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link to={'/categoryfilter/laptops'} className="absolute inset-0 z-10" prefetch={false}>
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
                <Link to={'categoryfilter/beauty'} className="absolute inset-0 z-10" prefetch={false}>
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
                  <p className="text-sm text-muted-foreground">High-Quality Cosmetics</p>
                  <h4 className="text-lg font-semibold md:text-xl">$79.99</h4>
                </div>
              </div>
              <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link to={'categoryfilter/mobile-accessories'} className="absolute inset-0 z-10" prefetch={false}>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Draggers?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Draggers offers a wide range of high-quality groceries, electronics, and cosmetics to cater to all your
                  everyday needs. With our commitment to customer satisfaction, you can trust that you're getting the best
                  products and services.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <CompassIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Curated Selection</h3>
                    <p className="text-muted-foreground">
                      Our team of experts carefully selects the best products to ensure you have access to top-quality
                      items.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TruckIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Fast Shipping</h3>
                    <p className="text-muted-foreground">
                      We offer fast and reliable shipping to ensure your items arrive quickly, so you can start enjoying
                      them right away.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldIcon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Secure Payments</h3>
                    <p className="text-muted-foreground">
                      Your payment information is safe with us. We use industry- leading security measures to protect your
                      transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
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
      )
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
      )
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
      )
}

export default Home;