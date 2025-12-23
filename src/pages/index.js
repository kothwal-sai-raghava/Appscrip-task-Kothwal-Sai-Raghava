import Head from "next/head";
import ProductGrid from "@/components/ProductGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function getServerSideProps() {
  try {
    // DummyJSON is much more reliable for Vercel SSR deployments
    const res = await fetch("https://dummyjson.com/products?limit=20");

    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const data = await res.json();

    const products = data.products.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.thumbnail,
    }));

    return { props: { products } };
  } catch (error) {
    console.error("SSR fetch failed:", error.message);
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
              "itemListElement": products.map((p, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "url": `https://your-vercel-link.com/product/${p.id}`,
                "name": p.title
              }))
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
