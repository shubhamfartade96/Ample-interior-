import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-slate-700">
          <h1 className="text-4xl font-bold text-center mb-8">Returns & Refunds policy</h1>
          
          <p className="mb-4">
            You are entitled to cancel your order within 7 days without giving any reason for doing so.
          </p>
          <p className="mb-4">
            The deadline for canceling an order is 7 days from the date you received the goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.
          </p>
          <p className="mb-4">
            In order to exercise your right of cancellation, you must inform us of your decision by means of a clear statement.
          </p>
          <p className="mb-4">
            You can inform us of your decision by e-mail: inexteldigital@gmail.com
          </p>
          <p className="mb-8">
            We will reimburse you no later than 7 days from the day on which we receive the returned goods. We will use the same means of payment as you used for the order, and you will not incur any fees for such reimbursement.
          </p>

          <h2 className="text-2xl font-bold mb-4">Conditions for returns:</h2>
          <p className="mb-4">
            In order for the goods to be eligible for a return, please make sure that:
          </p>
          <ul className="list-disc list-inside mb-4 pl-4 space-y-2">
            <li>The goods were purchased in the last 7 days</li>
            <li>The goods are in the original packaging</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">The following goods cannot be returned:</h2>
          <ul className="list-disc list-inside mb-8 pl-4 space-y-2">
            <li>The supply of goods made to your specifications or clearly personalized.</li>
            <li>The supply of goods which according to their nature are not suitable to be returned, for example goods which deteriorate rapidly or where the date of expiry is over.</li>
            <li>The supply of goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
            <li>The supply of goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
          </ul>
          <p className="mb-8">
            We reserve the right to refuse returns of any merchandise that does not meet the above return conditions at our sole discretion.
          </p>

          <h2 className="text-2xl font-bold mb-4">Returning Goods</h2>
          <p className="mb-4">
            You are responsible for the cost and risk of returning the goods to us. You should send the goods to the following address:
          </p>
          <p className="mb-4 font-semibold">
            inexteldigital@gmail.com
          </p>
          <p className="mb-8">
            We cannot be held responsible for goods damaged or lost in return shipment. Therefore, we recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the goods or proof of received return delivery.
          </p>

          <h2 className="text-2xl font-bold mb-4">Gifts:</h2>
          <p className="mb-4">
            If the goods were marked as a gift when purchased and then shipped directly to you, you'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to you.
          </p>
          <p className="mb-8">
            If the goods weren't marked as a gift when purchased, or the gift giver had the order shipped to themselves to give it to you later, We will send the refund to the gift giver.
          </p>

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions about our Returns and Refunds Policy, please contact us by e-mail: inexteldigital@gmail.com
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
