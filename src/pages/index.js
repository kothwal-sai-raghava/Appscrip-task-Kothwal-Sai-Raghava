import Head from "next/head";
import ProductGrid from "@/components/ProductGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: 'GET',
      headers: {
        // This makes the request look like it's coming from a Chrome browser
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        "Accept": "application/json",
      },
    });

    if (!res.ok) {
      // This will now log the specific 403 error in Vercel so you can see it
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return { props: { products: [] } };
    }

    const products = await res.json();
    return { props: { products } };
  } catch (error) {
    console.error("Fetch failed:", error.message);
    return { props: { products: [] } };
  }
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Shop Products Online | Appscrip PLP</title>

        <meta
          name="description"
          content="Browse a wide range of premium products with responsive design and fast server-side rendering."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Product Listing Page",
              "itemListElement": []
            })
          }}
        />
      </Head>

      <Header />

      <div className="divider" />


      <main className="page">
        <section className="discoverSection">
          <h1>Discover Our Products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>

        <div className="divider" />

        <section className="toolbar">
          <div className="toolbarLeft">
            <span>{products.length} Items</span>
            <button className="filterToggle">Hide Filter</button>
          </div>

          <div className="toolbarRight">
            <select>
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </section>

        <div className="divider" />

        <section className="contentArea">
          <aside className="filters">
            <h2>Filters</h2>

            <div className="filterGroup">
              <h3>Category</h3>
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Kids</label>
            </div>

            <div className="filterGroup">
              <h3>Price</h3>
              <label><input type="checkbox" /> Below ₹500</label>
              <label><input type="checkbox" /> ₹500 - ₹1000</label>
            </div>
          </aside>

          <div className="products">
            {/* Product grid here */}
            <ProductGrid products={products} />
          </div>
        </section>

      </main >

      <Footer />

    </>
  );
}
