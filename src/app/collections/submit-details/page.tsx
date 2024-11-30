'use client'
// import Interest from '@/components/Interest'
import CheckoutPage from '@/components/CheckoutForm'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const page = () => {
    const stripData = loadStripe('pk_test_51QMii5EFMA1yX1qaq3DzO1Gzv536HJDMpIoll5pEjkNKW6Jc2QLYx2AM62vj47ZyfzbPZhOTwjhEC4haxEVFSn8o00q1Sntrc0')
    return <div >
        {/* <Interest /> */}
        <Elements stripe={stripData}>
            <CheckoutPage />
        </Elements>
    </div>;
};

export default page;    
