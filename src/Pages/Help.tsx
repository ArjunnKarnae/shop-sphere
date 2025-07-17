import type { JSX } from "react";
import { useGetAllFaqsQuery } from "../store/faqApi";
import type { FAQ } from "../types/FAQ";
import { FAQAccordionItem } from "../components/FAQAccordionItem";

export const Help = (): JSX.Element => {
    const {data, isLoading, isError} : {data?: FAQ[], isLoading: boolean, isError: boolean} =  useGetAllFaqsQuery();
    
    let content: JSX.Element |JSX.Element[] | undefined;
    if(isLoading) {
        content = <p>Loading Faq's</p>
    }
    else if(isError){
        content = <p>Error Fetching Faqs</p>
    }else{
        content = data?.map((q) => {
            return <FAQAccordionItem item={q} key={q.id} />
        });
    }
    return (
        <div className="sm:col-span-10 sm:p-10">
            <p className="font-bold m-5 text-xl">Frequently Asked Questions</p>
            <div>
               {content}
            </div>    
        </div>
    );
}