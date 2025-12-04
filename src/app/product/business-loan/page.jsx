import BusinessLoanInfo from "./businessLoan";
import BusinessLoanHero from "./BusinessLoanHero";
import DocumentsRequired from "./doucmentRequired";
import WhyChooseUs from "./whyChooseus";

export default function PersonalLoan() {
    return (
        <div>
            <BusinessLoanHero />
            <BusinessLoanInfo />
            <WhyChooseUs />
            <DocumentsRequired />
        </div>
    )
}