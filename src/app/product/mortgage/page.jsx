import MortgageLoanHero from "./moratage-hero";
import DocumentsRequired from "./moratageDoc";
import MortgageLoanInfo from "./mortageloaninfo";

export default function page() {
    return (
        <div>
            <MortgageLoanHero />
            <MortgageLoanInfo />
            <DocumentsRequired />
        </div>
    )
}