import DocumentsRequired from "./persnalLoa-documtent";
import PersonalLoanHero from "./personalLoan";
import PersonalLoanInfo from "./personalLoaninfo";

export default function PersonalLoan() {
    return (
        <div>

            <PersonalLoanHero />
            <PersonalLoanInfo />
            <DocumentsRequired />

        </div>
    )
}