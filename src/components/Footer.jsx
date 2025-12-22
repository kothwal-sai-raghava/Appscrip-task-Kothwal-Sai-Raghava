export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footerTop">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>

          <div className="newsletterForm">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              aria-label="Email address"
            />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contactCurrency">
          <div>
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettāmuse.com</p>
          </div>

          <div className="currency">
            <h3>CURRENCY</h3>
            <div className="currencyRow">
              <img src="/United States of America (US).png" alt="USD flag" />
              <span>USD</span>
            </div>
            <p className="currencyNote">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className="footerDivider" />

      {/* MIDDLE SECTION */}
      <div className="footerMiddle">
        <div>
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="socialPayments">
          <h4>FOLLOW US</h4>
          <div className="socialIcons">
            <img src="/insta.png" alt="Instagram" />
            <img src="/a.png" alt="LinkedIn" />
          </div>

          <h4 className="accepts">mettā muse ACCEPTS</h4>
          <div className="paymentIcons">
            <img src="gpay.png" alt="Google Pay" />
            <img src="Group 136189.png" alt="Mastercard" />
            <img src="Group 136191.png" alt="Paypal" />
            <img src="Group 136193.png" alt="Amex" />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <p className="footerBottom">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
